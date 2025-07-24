import {FaLocationDot, FaCartShopping} from "react-icons/fa6"
import {RxAvatar} from "react-icons/rx"
import {GrFavorite} from "react-icons/gr"
import type {IconType} from "react-icons"


export interface NavigationItem {
    id: string
    label: string
    href: string
    icon: IconType
    iconSize?: number
}

export const navigationData: NavigationItem[] = [
   
    {
        id: "favorites",
        label: "Sevimli",
        href: "/favorites",
        icon: GrFavorite,
        iconSize: 24,
    },
    {
        id: "shop",
        label: "Shop",
        href: "/shop",
        icon: FaCartShopping,
        iconSize: 24,
    },
    {
        id: "login",
        label: "Kirish",
        href: "/login",
        icon: RxAvatar,
        iconSize: 24,
    },
]
