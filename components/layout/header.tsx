"use client"

import Link from "next/link"
import {FaLocationDot} from "react-icons/fa6"
import {AiOutlineMenu} from "react-icons/ai"
import {navigationData} from "@/data/navigation-data"
import SearchInput from "@/components/constants/search-input"
import MobileBottomNav from "./MobileBottomNav"

const Header = () => {
    return (
        <>
            <header className="bg shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="container max-w-[1300px] mx-auto px-4 sm:px-8">

                    {/* ✅ MOBILE HEADER */}
                    <div className="flex items-center justify-between sm:hidden gap-2 py-3">
                        {/* Search */}
                        <div className="flex-1">
                            <SearchInput />
                        </div>

                        {/* Location Button */}
                        {/*<Link*/}
                        {/*    href="/"*/}
                        {/*    className="flex items-center justify-center p-2 rounded-full hover:bg-blue-600 transition"*/}
                        {/*>*/}
                        {/*    <FaLocationDot className="text-white" size={24} />*/}
                        {/*</Link>*/}

                        {/* Menu Button */}
                        <button
                            className="p-2 rounded-lg border border-gray-300 hover transition"
                            aria-label="Open menu"
                        >
                            <Link href="/">
                                <AiOutlineMenu size={24} className="text-gray-800 dark:text-white" />
                            </Link>
                        </button>
                    </div>

                    {/* ✅ DESKTOP HEADER */}
                    <div className="hidden sm:flex items-center justify-between py-3 ">
                        {/* Logo */}
                        <div className=" justify-between items-center  ">
                            <Link
                                href="/"
                                className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-wide "
                            >
                                Oversize
                                <span className="sr-only">Website logo</span>
                            </Link>
                            {/* Menu Button start (optional in desktop) */}
                            <button
                                className="p-2 ml-4 rounded-lg border border-gray-300 hover transition"
                                aria-label="Open menu"
                            >
                                <Link href="/">
                                    <AiOutlineMenu size={24} className="text-gray-800 dark:text-white" />
                                </Link>
                            </button>
                        </div>
                        {/* Menu Button end (optional in desktop) */}

                        {/* Search  start*/}
                        <div className="flex-1 max-w-xl mx-6">
                            <SearchInput />
                        </div>
                        {/* Search  end*/}


                        {/* Navigation start */}
                        <nav>
                            <ul className="flex items-center space-x-6">
                                {navigationData.map((item) => {
                                    const IconComponent = item.icon
                                    return (
                                        <li key={item.id}>
                                            <Link
                                                href={item.href}
                                                className="flex flex-col items-center group"
                                            >
                                                <IconComponent
                                                    size={item.iconSize || 24}
                                                    className="text-white  hover transition-colors"
                                                />
                                                <span
                                                    className="mt-1 text-sm text-white  hover  transition-colors">
                                                         {item.label}
                                                 </span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        {/* Navigation end */}
                    </div>
                </div>
            </header>

            {/* ✅ MOBILE BOTTOM NAV */}
            <div className="sm:hidden">
                <MobileBottomNav />
            </div>
        </>
    )
}

export default Header
