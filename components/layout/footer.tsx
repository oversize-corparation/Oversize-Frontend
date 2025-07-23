"use client";
import Link from "next/link";
import { QrCode } from "lucide-react";
import { FaTelegram, FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import { footerData } from "@/data/footerData";
import MobileFooter from "@/components/layout/mobile-footer";

const Footer = () => {
  return (
    <footer className="  bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8  hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm">{section.title}</h3>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* QR Code & Socials */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <div className="w-24 h-24 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
              <QrCode className="w-16 h-16 text-gray-400" />
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
              >
                <FaTelegram size={20} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:opacity-90"
              >
                <FaSquareInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600"
              >
                <FaFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8  py-4  items-center justify-center   border-t border-gray-200 text-center sm:text-left">
          <p className="text-black text-xs">
            © Oversize 2024–{new Date().getFullYear()}. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
      <MobileFooter />
    </footer>
  );
};

export default Footer;
