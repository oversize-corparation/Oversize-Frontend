"use client"
import Link from "next/link"
import { FaTelegram, FaSquareInstagram, FaFacebook } from "react-icons/fa6";

export default function MobileFooter() {
  return (
    <footer className="  bg-gray-50 border-t border-gray-200 px-4 py-6">
      <div className=" block md:hidden max-w-sm mx-auto space-y-6">
        {/* App Download Buttons */}
        <div className="space-y-3">
          {/* App Store */}
          <Link
            href="#"
            className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Загрузите в</div>
              <span className="text-sm font-medium text-gray-900">App Store</span>
            </div>
          </Link>

          {/* Google Play */}
          <Link
            href="/"
            className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M3 20.5v-17c0-.35.15-.65.4-.8L12 12l-8.6 9.3c-.25-.15-.4-.45-.4-.8z" />
                <path fill="#34A853" d="M16.7 7.7L12 12l-8.6-9.3c.15-.1.35-.2.6-.2h16c.25 0 .45.1.6.2L16.7 7.7z" />
                <path
                  fill="#FBBC04"
                  d="M16.7 16.3L20.6 20.5c-.15.1-.35.2-.6.2H4c-.25 0-.45-.1-.6-.2L7.4 16.3 12 12l4.7 4.3z"
                />
                <path fill="#EA4335" d="M12 12l8.6-9.3c.25.15.4.45.4.8v17c0 .35-.15.65-.4.8L12 12z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Доступно в</div>
              <span  className="text-sm font-medium text-gray-900">Google Play</span>
            </div>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
        <p className="text-black text-xs">
            © Oversize 2024–{new Date().getFullYear()}. Barcha huquqlar himoyalangan.
          </p>
        
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 pb-10">
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
    </footer>
  )
}
