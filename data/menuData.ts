// data/menuData.ts

export type MenuItem = {
    title: string
    href: string
}

export const menuData: MenuItem[] = [
    {title: "Home", href: "/"},
    {title: "About", href: "/about"},
    {title: "Services", href: "/services"},
    {title: "Contact", href: "/contact"},
]
