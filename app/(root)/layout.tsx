import React from "react"
import Sidebar from "@/components/Sidebar";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

    const loggedIn = {firstName: "Venkatesh", lastName: "Vishwanadula"};

    return (
        <main className="lg:flex min-h-screen">
            <Sidebar user={loggedIn} />
            <div className="flex-1">
                {children}
            </div>
        </main>
    );
}