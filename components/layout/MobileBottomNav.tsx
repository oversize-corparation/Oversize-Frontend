"use client";

import Link from "next/link";
import {mobileMenuData} from "../../data/mobileMenuData";


const MobileBottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-2 sm:hidden z-50">
            <div className="flex justify-around items-center text-xs text-gray-700">
                {mobileMenuData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex flex-col items-center justify-center hover:text-blue-600"
                        >
                            <Icon size={22} />
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileBottomNav;
