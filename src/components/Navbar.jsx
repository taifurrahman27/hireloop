"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { HiBars3, HiXMark } from "react-icons/hi2";


const navItems = [
    {
        name: "Browse Jobs",
        href: "/jobs",
    },
    {
        name: "Companies",
        href: "/companies",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#1f1f1f]/95 backdrop-blur-lg">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between rounded-2xl bg-[#262626] px-5 shadow-lg">

                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="HireLoop"
                            width={170}
                            height={45}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>

                    <div className="hidden items-center gap-10 lg:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 transition hover:text-white"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-5 lg:flex">
                        <Link
                            href="/signin"
                            className="font-medium text-indigo-400 transition hover:text-indigo-300"
                        >
                            Sign In
                        </Link>

                        <Button
                            as={Link}
                            href="/signup"
                            radius="lg"
                            color="primary"
                            className="bg-linear-to-r from-indigo-500 to-violet-600 px-6 font-semibold text-white shadow-lg"
                        >
                            Get Started
                        </Button>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white lg:hidden"
                    >
                        {menuOpen ? (
                            <HiXMark className="h-7 w-7" />
                        ) : (
                            <HiBars3 className="h-7 w-7" />
                        )}
                    </button>
                </div>

                {menuOpen && (
                    <div className="mt-3 rounded-2xl bg-[#262626] p-5 lg:hidden">
                        <div className="flex flex-col gap-5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-300 transition hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="mt-3 border-t border-gray-700 pt-4">
                                <Link
                                    href="/signin"
                                    className="block font-medium text-indigo-400"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Sign In
                                </Link>

                                <Button
                                    as={Link}
                                    href="/signup"
                                    color="primary"
                                    radius="lg"
                                    className="mt-4 w-full bg-linear-to-r from-indigo-500 to-violet-600 text-white"
                                    onPress={() => setMenuOpen(false)}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
