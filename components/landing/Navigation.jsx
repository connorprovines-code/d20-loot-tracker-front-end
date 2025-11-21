"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Guides", href: "/guides" },
    { label: "D&D 5e", href: "/dnd-loot-tracker" },
    { label: "Pathfinder", href: "/pathfinder-loot-tracker" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-1.5">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690d26379a6ca945341d4258/b308b5636_06317be4-fb62-426c-996b-d259686a5599.png"
                alt="D20 Loot Tracker"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-base sm:text-lg hidden sm:block">
              D20 Loot Tracker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a href="https://app.d20-loot-tracker.com/" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Start Free
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://app.d20-loot-tracker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg w-full"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Free
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
