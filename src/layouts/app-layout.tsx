import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

import { FaWhatsapp } from "react-icons/fa";

interface SocialWrapperProps {
  children: React.ReactNode;
  showFacebook?: boolean;
  showTwitter?: boolean;
  showInstagram?: boolean;
  showLinkedin?: boolean;
  showGithub?: boolean;
  showEmail?: boolean;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  emailAddress?: string;
}

const SocialWrapper: React.FC<SocialWrapperProps> = ({
  children,
  showFacebook = true,
  showTwitter = true,
  showInstagram = true,
  showLinkedin = false,
  showGithub = false,
  showEmail = true,
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  instagramUrl = "https://instagram.com",
  linkedinUrl = "https://linkedin.com",
  githubUrl = "https://github.com",
  emailAddress = "hello@example.com",
}) => {
  const socialLinks = [
    {
      show: showFacebook,
      icon: Facebook,
      url: facebookUrl,
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      show: showTwitter,
      icon: FaWhatsapp,
      url: twitterUrl,
      label: "Whatsapp",
      color: "hover:text-green-400",
    },
    {
      show: showInstagram,
      icon: Instagram,
      url: instagramUrl,
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      show: showLinkedin,
      icon: Linkedin,
      url: linkedinUrl,
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      show: showGithub,
      icon: Github,
      url: githubUrl,
      label: "GitHub",
      color: "hover:text-gray-700",
    },
    {
      show: showEmail,
      icon: Mail,
      url: `mailto:${emailAddress}`,
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  const visibleLinks = socialLinks.filter((link) => link.show);

  return (
    <div className="relative min-h-screen">
      {/* Floating Social Media Icons */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-1 md:p-2 shadow-lg border border-gray-200">
        {visibleLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 ${link.color} transition-all duration-200 hover:scale-110 p-1 md:p-2 rounded-full hover:bg-gray-100`}
              aria-label={link.label}
            >
              <IconComponent className="size-4 sm:size-5 md:size-6" />
            </a>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="w-full">{children}</div>
    </div>
  );
};
export default SocialWrapper;
