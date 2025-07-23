import {IoMdHome} from "react-icons/io";
import {FaCartShopping} from "react-icons/fa6";
import {RxAvatar} from "react-icons/rx";
import {GrFavorite} from "react-icons/gr";

export const mobileMenuData = [
    {
        title: "Home",
        href: "/",
        icon: IoMdHome,
    },
    {
        title: "Savat",
        href: "/cart",
        icon: FaCartShopping,
    },
    {
        title: "Sevimli",
        href: "/favorites",
        icon: GrFavorite,
    },
    {
        title: "Kirish",
        href: "/login",
        icon: RxAvatar,
    },
];
