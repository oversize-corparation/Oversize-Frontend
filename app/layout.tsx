import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {
    title: "Oversize",
    description: "Oversize — nafaqat kiyim, bu his.\" O‘zingizni qulay va erkin his eting. Modani o‘z didingiz bilan birlashtiring. Sizning uslubingiz, sizning tanlovingiz.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <body className="flex min-h-screen flex-col"
         cz-shortcut-listen="true" data-new-gr-c-s-check-loaded="14.1245.0" data-gr-ext-installed="">
            <Header />
            <main  className="flex-grow">
            {children}
            </main>
         <Footer/>
        </body>
        </html>
    );
}
