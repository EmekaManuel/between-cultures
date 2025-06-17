/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const godaddyEmail = "info@betweencultures.ca";
const godaddyPassword = "Yanozie00$";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Office365 SMTP server
  port: 587, // Use 587 for STARTTLS
  auth: {
    user: godaddyEmail || "info@betweencultures.ca",
    pass: godaddyPassword || "Yanozie00$",
  },
  requireTLS: true,
  debug: process.env.NODE_ENV === "development",
});

export async function POST(request: Request) {
  try {
    const { email, name, sessionId, cancelledAt } = await request.json();

    // Input validation
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const formattedDate = new Date(cancelledAt).toLocaleString("en-CA", {
      timeZone: "America/Edmonton",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Email to team about cancelled donation
    const teamMailOptions = {
      from: `"Between Cultures Foundation" <info@betweencultures.ca>`,
      to: ["info@betweencultures.ca"],
      subject: `Donation Cancelled - Follow-up Opportunity with ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f97316; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">📊 Donation Cancellation Notice</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f97316;">
              <h3 style="color: #ea580c; margin-top: 0;">Cancellation Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #f97316;">${email}</a></p>
              <p><strong>Session ID:</strong> ${
                sessionId || "Not available"
              }</p>
              <p><strong>Cancelled:</strong> ${formattedDate} (Mountain Time)</p>
            </div>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <h4 style="color: #92400e; margin-top: 0;">Follow-up Opportunities:</h4>
              <ul style="color: #92400e; margin: 0; padding-left: 20px;">
                <li>Add to newsletter for future engagement</li>
                <li>Invite to volunteer orientation</li>
                <li>Share impact stories to build connection</li>
                <li>Follow up with alternative giving options</li>
              </ul>
            </div>
            
            <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px;">
              <p style="margin: 0; color: #065f46;">
                <strong>Auto-sent:</strong> We've automatically sent them helpful information about other ways to support our mission, including volunteering opportunities and staying connected with our work.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Follow-up email to the user
    const userMailOptions = {
      from: `"Between Cultures Foundation" <info@betweencultures.ca>`,
      to: email,
      subject: "Thank you for considering Between Cultures Foundation 🌟",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #a8c499; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">Your Interest Means Everything to Us! 💚</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Dear ${name},</p>
            
            <p>Thank you for taking the time to learn about Between Cultures Foundation and considering supporting our mission. Even though you didn't complete a donation today, your interest in helping immigrant families means the world to us.</p>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Every Form of Support Matters</h3>
              <p style="color: #2d5016; margin-bottom: 15px;">There are many meaningful ways to help immigrant families thrive in their new communities:</p>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div style="background-color: white; padding: 15px; border-radius: 8px; text-align: center;">
                  <div style="font-size: 24px; margin-bottom: 8px;">🤝</div>
                  <h4 style="color: #2d5016; margin: 0 0 8px 0; font-size: 14px;">Volunteer</h4>
                  <p style="color: #2d5016; margin: 0; font-size: 12px;">Share your skills & time</p>
                </div>
                
                <div style="background-color: white; padding: 15px; border-radius: 8px; text-align: center;">
                  <div style="font-size: 24px; margin-bottom: 8px;">🌍</div>
                  <h4 style="color: #2d5016; margin: 0 0 8px 0; font-size: 14px;">Cultural Ambassador</h4>
                  <p style="color: #2d5016; margin: 0; font-size: 12px;">Share your heritage</p>
                </div>
                
                <div style="background-color: white; padding: 15px; border-radius: 8px; text-align: center;">
                  <div style="font-size: 24px; margin-bottom: 8px;">📢</div>
                  <h4 style="color: #2d5016; margin: 0 0 8px 0; font-size: 14px;">Spread Awareness</h4>
                  <p style="color: #2d5016; margin: 0; font-size: 12px;">Tell others about our work</p>
                </div>
                
                <div style="background-color: white; padding: 15px; border-radius: 8px; text-align: center;">
                  <div style="font-size: 24px; margin-bottom: 8px;">🤝</div>
                  <h4 style="color: #2d5016; margin: 0 0 8px 0; font-size: 14px;">Partner</h4>
                  <p style="color: #2d5016; margin: 0; font-size: 12px;">Collaborate on initiatives</p>
                </div>
              </div>
            </div>
            
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">💡 Did You Know?</h3>
              <p style="color: #856404; margin-bottom: 10px;">Small actions create big impacts:</p>
              <ul style="color: #856404; margin: 0; padding-left: 20px;">
                <li>One volunteer hour = support for 3 families</li>
                <li>Sharing our story = reaching 10+ potential supporters</li>
                <li>Cultural workshops = preserving traditions for the next generation</li>
                <li>Even $25 can sponsor a family integration workshop</li>
              </ul>
            </div>
            
            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="color: #1e40af; margin-top: 0;">Stay Connected with Our Impact</h3>
              <p style="color: #1e40af; margin-bottom: 15px;">
                Get inspiring stories from families we've helped and learn about upcoming volunteer opportunities.
              </p>
              <a href="https://betweencultures.ca/newsletter" 
                 style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Join Our Newsletter
              </a>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <h3 style="color: #374151; margin-bottom: 15px;">Ready to Get Involved?</h3>
              <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                <a href="https://betweencultures.ca/volunteer" 
                   style="background-color: #a8c499; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  Explore Volunteering
                </a>
                <a href="https://betweencultures.ca/donate" 
                   style="border: 2px solid #a8c499; color: #a8c499; padding: 8px 18px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  Donate Another Time
                </a>
              </div>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              Questions? We'd love to hear from you! Reply to this email or contact us:
            </p>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <ul style="list-style-type: none; padding-left: 0; margin: 0; font-size: 14px;">
                <li style="margin-bottom: 8px;">📞 <a href="tel:+14036186672" style="color: #a8c499; text-decoration: none;">(403) 618-6672</a></li>
                <li style="margin-bottom: 8px;">✉️ <a href="mailto:info@betweencultures.ca" style="color: #a8c499; text-decoration: none;">info@betweencultures.ca</a></li>
                <li>🌐 <a href="https://betweencultures.ca" style="color: #a8c499; text-decoration: none;">betweencultures.ca</a></li>
              </ul>
            </div>
            
            <p style="margin-top: 30px;">Thank you for caring about immigrant families and considering how you can make a difference. Together, we can create inclusive communities where every family thrives!</p>
            
            <p style="margin-top: 20px;">With appreciation,<br><strong>The Between Cultures Foundation Team</strong></p>
          </div>
          
          <div style="background-color: #f1f1f1; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #666; font-size: 0.875rem; margin: 0;">
              You received this because you showed interest in supporting Between Cultures Foundation.<br>
              Questions? Contact us at <a href="mailto:info@betweencultures.ca" style="color: #a8c499;">info@betweencultures.ca</a>
            </p>
          </div>
        </div>
      `,
    };

    console.log("Sending donation cancellation emails...");

    // Send both emails
    const results = await Promise.allSettled([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    // Check if any emails failed
    const failedEmails = results.filter(
      (result) => result.status === "rejected"
    );

    if (failedEmails.length > 0) {
      console.error("Some cancellation emails failed:", failedEmails);
      // Still return success if at least one email was sent
      if (results.some((result) => result.status === "fulfilled")) {
        console.log("At least one cancellation email sent successfully");
      } else {
        throw new Error("All cancellation emails failed to send");
      }
    }

    console.log("Donation cancellation emails sent successfully");

    return NextResponse.json(
      {
        message: "Cancellation follow-up emails sent successfully",
        emailsSent: results.filter((r) => r.status === "fulfilled").length,
        totalEmails: results.length,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending cancellation emails:", error);

    // More detailed error logging
    if (error.code) {
      console.error("Error code:", error.code);
    }
    if (error.command) {
      console.error("Failed command:", error.command);
    }

    return NextResponse.json(
      {
        error: "Failed to send cancellation follow-up emails",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
