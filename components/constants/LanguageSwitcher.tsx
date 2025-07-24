"use client";

import { useState } from "react";
import { MdLanguage } from "react-icons/md";

const languages = [
  { id: "lang-uz", label: "uz", value: "uz" },
  { id: "lang-ru", label: "ru", value: "ru" },
  { id: "lang-en", label: "en", value: "en" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("uz");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
    // optional: tilni localStorage yoki cookie-ga yozish
  };

  const currentLabel = languages.find((l) => l.value === selectedLang)?.label;

  return (
    <div className=" relative inline-block text-left  border rounded-full ">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2  bg text-white rounded-full hover:bg-blue-700 transition"
      >
        <MdLanguage size={24} />
        <span>{currentLabel}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-20 bg border rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => selectLanguage(lang.value)}
              className={`w-full text-left text-white px-4 py-2 hover ${
                selectedLang === lang.value ? "font-semibold" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
