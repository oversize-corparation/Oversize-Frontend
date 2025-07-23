"use client"

import {useState} from "react"
import Link from "next/link"
import {menuData} from "@/data/menuData"
import {CgMenu} from "react-icons/cg"
import {X} from "lucide-react"
import clsx from "clsx"

export const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Trigger button */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 focus:outline-none"
            >
                <CgMenu size={34} className="text-black dark:text-white rounded-xl" />
            </button>

            {/* Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black/30 z-40 transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={clsx(
                    "fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 shadow-lg transition-transform duration-300",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X className="text-black dark:text-white" />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {menuData.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )
}
