import type { Metadata } from "next";
import "./globals.css";
import { Tajawal } from "next/font/google";
import Providers from "@/components/providers/Providers";
import Header from "@/components/UI/header/Header";
import Footer from "@/components/UI/footer/Footer";

export const metadata: Metadata = {
    title: "Task Manager App",
    description:
        "Boost your productivity with our powerful Task Manager App. Organize your tasks, set priorities, and stay on top of your to-do list effortlessly. Streamline your workflow, collaborate with ease, and achieve more with our intuitive and feature-packed Task Manager. Download now and take control of your daily tasks!",
};

const tajawal = Tajawal({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const fontClass = tajawal.className;
    return (
        <html lang="en" dir="ltr">
            <body className={fontClass}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}