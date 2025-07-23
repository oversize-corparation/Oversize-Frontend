import type {Metadata} from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Oversize",
    description: "Oversize bilan o'z imejingizni yarating",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            cz-shortcut-listen="true" data-new-gr-c-s-check-loaded="14.1244.0" data-gr-ext-installed=""
        >
        {children}
        </body>
        </html>
    );
}
