import React from "react";
import { Github, Twitter, MessageCircle, Youtube } from "lucide-react";



const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  "Game Systems": [
    { label: "D&D 5e Loot Tracker", href: "/dnd-loot-tracker", isPage: true },
    { label: "Pathfinder 2e Tracker", href: "/pathfinder-loot-tracker", isPage: true },
    { label: "All Systems", href: "/" },
  ],
  Resources: [
    { label: "All Guides", href: "/guides", isPage: true },
    { label: "Tracking Loot Guide", href: "/guides/tracking-loot-dnd-beginners", isPage: true },
    { label: "Gold Distribution Tips", href: "/guides/gold-distribution-new-dms", isPage: true },
    { label: "PF2e Bulk System", href: "/guides/pathfinder-2e-bulk-system", isPage: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy", isPage: true },
    { label: "Terms of Service", href: "#terms" },
    { label: "Contact", href: "mailto:connorprovines@gmail.com" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: MessageCircle, href: "#discord", label: "Discord" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Youtube, href: "#youtube", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 sm:mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 p-1.5">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690d26379a6ca945341d4258/b308b5636_06317be4-fb62-426c-996b-d259686a5599.png"
                  alt="D20 Loot Tracker icon - treasure chest with dice"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">D20 Loot Tracker</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-xs">
              The best DnD loot tracker for tabletop RPG campaigns.
              Real-time treasure tracking for D&D and Pathfinder.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.isPage ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              © 2024 D20 Loot Tracker • Built for the TTRPG Community
            </p>
          </div>
          <div className="pt-4 border-t border-slate-800">
            <p className="text-gray-500 text-xs text-center max-w-4xl mx-auto leading-relaxed">
              DnD, D&D, and Dungeons & Dragons are trademarks of Wizards of the Coast LLC.
              Pathfinder is a trademark of Paizo Inc. This tool is not affiliated with,
              endorsed by, or sponsored by Wizards of the Coast or Paizo Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}