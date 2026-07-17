"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActiveRoute = (route: string) => {
        if (route === "/") return pathname === "/";

        return pathname.startsWith(route);
    };

    const SidebarContent = () => (
        <>
            <div className="flex h-20 items-center border-b border-gray-200 px-6">
                <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/icons/logo.svg"
                        alt="Logo"
                        width={36}
                        height={36}
                        priority
                    />

                    <span className="text-2xl font-bold text-gray-900">
                        BankBuddy
                    </span>
                </Link>
            </div>

            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {sidebarLinks.map((link) => {
                        const active = isActiveRoute(link.route);

                        return (
                            <li key={link.route}>
                                <Link
                                    href={link.route}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                                        active
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    <Image
                                        src={link.imgURL}
                                        alt={link.label}
                                        width={22}
                                        height={22}
                                        className={
                                            active
                                                ? "brightness-0 invert"
                                                : ""
                                        }
                                    />

                                    <span className="text-sm font-medium">
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="border-t border-gray-200 p-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-600">
                        {user?.firstName?.charAt(0) ?? "U"}
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-900">
                            {user?.firstName} {user?.lastName}
                        </p>

                        <p className="truncate text-xs text-gray-500">
                            {user?.email}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile */}
            <div className="lg:hidden">
                <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-5">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/icons/logo.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                            priority
                        />

                        <span className="text-xl font-bold text-gray-900">
                            BankBuddy
                        </span>
                    </Link>

                    {!isOpen && (
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-gray-100"
                            aria-label="Open menu"
                        >
                            <Image
                                src="/icons/hamburger.svg"
                                alt="Menu"
                                width={22}
                                height={22}
                            />
                        </button>
                    )}
                </header>

                {isOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                <aside
                    className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-gray-200 bg-white shadow-xl transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <SidebarContent />
                </aside>
            </div>

            {/* Desktop */}
            <aside className="hidden h-screen w-[280px] shrink-0 flex-col border-r border-gray-200 bg-white lg:flex">
                <SidebarContent />
            </aside>
        </>
    );
};

export default Sidebar;