import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const {
      fullName,
      email,
      phone,
      age,
      address,
      languagesSpoken,
      availability,
      volunteerInterests,
      experience,
      skills,
      motivation,
      hearAboutUs,
      backgroundCheckConsent,
      emergencyContact,
      emergencyPhone,
    } = await request.json();

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !availability ||
      !volunteerInterests ||
      !motivation
    ) {
      return NextResponse.json(
        {
          error:
            "Name, email, phone, availability, volunteer interests, and motivation are required",
        },
        { status: 400 }
      );
    }

    // Generate volunteer application reference number
    const applicationRef = `VOL-${Date.now().toString().slice(-8)}`;

    // Send email to Between Cultures team
    const teamMailOptions = {
      from: `Between Cultures Foundation <${process.env.EMAIL_USER}>`,
      to: ["info@betweencultures.ca"], // Add your volunteer coordinator emails here
      subject: `New Volunteer Application - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a8c499 0%, #a097d1 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">🙋‍♀️ New Volunteer Application!</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #a8c499;">
              <h3 style="color: #a8c499; margin-top: 0;">Application Details</h3>
              <p><strong>Reference:</strong> ${applicationRef}</p>
              <p><strong>Applicant:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #a8c499;">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #a8c499;">${phone}</a></p>
              ${age ? `<p><strong>Age:</strong> ${age}</p>` : ""}
              ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #a097d1;">
              <h3 style="color: #a097d1; margin-top: 0;">Volunteer Preferences</h3>
              <p><strong>Availability:</strong> ${availability}</p>
              <p><strong>Volunteer Interests:</strong> ${volunteerInterests}</p>
              ${
                languagesSpoken
                  ? `<p><strong>Languages Spoken:</strong> ${languagesSpoken}</p>`
                  : ""
              }
              ${
                skills
                  ? `<p><strong>Skills/Expertise:</strong> ${skills}</p>`
                  : ""
              }
            </div>

            ${
              experience
                ? `
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f39c12;">
              <h3 style="color: #f39c12; margin-top: 0;">Experience with Children/Communities</h3>
              <p style="white-space: pre-line;">${experience.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            `
                : ""
            }

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #28a745;">
              <h3 style="color: #28a745; margin-top: 0;">Motivation</h3>
              <p style="white-space: pre-line;">${motivation.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>

            ${
              emergencyContact
                ? `
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #dc3545;">
              <h3 style="color: #dc3545; margin-top: 0;">Emergency Contact</h3>
              <p><strong>Name:</strong> ${emergencyContact}</p>
              ${
                emergencyPhone
                  ? `<p><strong>Phone:</strong> <a href="tel:${emergencyPhone}" style="color: #a8c499;">${emergencyPhone}</a></p>`
                  : ""
              }
            </div>
            `
                : ""
            }

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #6c757d;">
              <h3 style="color: #6c757d; margin-top: 0;">Additional Information</h3>
              ${
                hearAboutUs
                  ? `<p><strong>How they heard about us:</strong> ${hearAboutUs}</p>`
                  : ""
              }
              <p><strong>Background Check Consent:</strong> ${
                backgroundCheckConsent ? "✅ Yes, consented" : "❌ Not provided"
              }</p>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #2d5016; margin-top: 0;">Next Steps</h3>
              <ul style="color: #2d5016; margin: 0; padding-left: 20px;">
                <li>Review application and schedule initial interview</li>
                <li>Conduct background check (if consented)</li>
                <li>Provide volunteer orientation and training</li>
                <li>Match with appropriate programs/activities</li>
              </ul>
            </div>
            
            <p style="color: #666; font-size: 0.875rem; margin-top: 20px;">
              Submitted on: ${new Date().toLocaleString("en-CA", {
                timeZone: "America/Edmonton",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })} (Mountain Time)
            </p>
          </div>
        </div>
      `,
    };

    // Send confirmation email to the volunteer applicant
    const volunteerMailOptions = {
      from: `Between Cultures Foundation <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for your interest in volunteering with Between Cultures Foundation!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #a8c499 0%, #a097d1 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">🌟 Welcome to Our Volunteer Community!</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Dear ${fullName},</p>
            
            <p>Thank you so much for your interest in volunteering with Between Cultures Foundation! We are thrilled that you want to join us in creating inclusive childcare spaces where all cultures are honored and every child feels at home.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #a8c499;">
              <h3 style="color: #a8c499; margin-top: 0;">Application Summary</h3>
              <p><strong>Reference Number:</strong> ${applicationRef}</p>
              <p><strong>Volunteer Interests:</strong> ${volunteerInterests}</p>
              <p><strong>Availability:</strong> ${availability}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleDateString(
                "en-CA"
              )}</p>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">What Happens Next?</h3>
              <ol style="color: #2d5016; padding-left: 20px;">
                <li><strong>Application Review</strong> - Our volunteer coordinator will review your application (typically within 5-7 business days)</li>
                <li><strong>Initial Interview</strong> - We'll schedule a brief chat to learn more about you and answer your questions</li>
                <li><strong>Background Check</strong> - Required for all volunteers working with children (we'll guide you through this process)</li>
                <li><strong>Orientation & Training</strong> - Comprehensive introduction to our programs and cultural competency training</li>
                <li><strong>Volunteer Placement</strong> - We'll match you with opportunities that align with your interests and skills</li>
              </ol>
            </div>

            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">Your Impact as a Volunteer</h3>
              <p style="color: #856404;">As a volunteer with Between Cultures Foundation, you'll help:</p>
              <ul style="color: #856404; padding-left: 20px; margin: 0;">
                <li>Support children from diverse cultural backgrounds</li>
                <li>Bridge language and cultural gaps for immigrant families</li>
                <li>Create inclusive learning environments</li>
                <li>Share your own cultural knowledge and experiences</li>
                <li>Build stronger, more connected communities</li>
              </ul>
            </div>

            <div style="background-color: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0c5460; margin-top: 0;">Volunteer Resources</h3>
              <p style="color: #0c5460;">While you wait to hear from us, feel free to:</p>
              <ul style="color: #0c5460; padding-left: 20px; margin: 0;">
                <li>Visit our website to learn more about our programs</li>
                <li>Follow us on social media for updates</li>
                <li>Reach out with any questions or concerns</li>
                <li>Consider attending one of our community events</li>
              </ul>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
              <ul style="color: #495057; padding-left: 20px; margin: 0;">
                <li>📧 Email: <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a></li>
                <li>📞 Phone: <a href="tel:+14036186672" style="color: #a8c499;">(403) 618-6672</a></li>
                <li>🌐 Website: <a href="https://betweencultures.ca" style="color: #a8c499;">betweencultures.ca</a></li>
              </ul>
            </div>
            
            <p>We deeply value the time, energy, and heart that volunteers bring to our mission. Your commitment to supporting immigrant families and celebrating cultural diversity makes a real difference in children's lives.</p>
            
            <p style="margin-top: 30px;">We look forward to welcoming you to our volunteer family!</p>
            
            <p>With gratitude and excitement,<br><strong>The Between Cultures Foundation Volunteer Team</strong></p>
          </div>
          
          <div style="background-color: #f1f1f1; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #666; font-size: 0.875rem; margin: 0;">
              Keep this email for your records. Reference number: <strong>${applicationRef}</strong><br>
              Questions? Contact us at <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(volunteerMailOptions),
    ]);

    return NextResponse.json(
      {
        message: "Volunteer application submitted successfully",
        applicationRef: applicationRef,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing volunteer application:", error);
    return NextResponse.json(
      { error: "Failed to process volunteer application" },
      { status: 500 }
    );
  }
}
