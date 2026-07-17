"use client";

import Image from "next/image";
import Link from "next/link";
import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub,
} from "@gravity-ui/icons";

const productLinks = [
    { name: "Job Discovery", href: "/jobs" },
    { name: "Worker AI", href: "/ai" },
    { name: "Companies", href: "/companies" },
    { name: "Salary Data", href: "/salary" },
];

const navigationLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Career Library", href: "/career-library" },
    { name: "Contact", href: "/contact" },
];

const resourceLinks = [
    { name: "Brand Guideline", href: "/brand" },
    { name: "Newsroom", href: "/newsroom" },
];

const socialLinks = [
    {
        icon: LogoFacebook,
        href: "https://facebook.com",
        label: "Facebook",
    },
    {
        icon: LogoGithub,
        href: "https://github.com",
        label: "GitHub",
    },
    {
        icon: LogoLinkedin,
        href: "https://linkedin.com",
        label: "LinkedIn",
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-gray-400">
            <div className="mx-auto max-w-7xl px-6 py-20">

                {/* Top */}
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}
                    <div className="space-y-8">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="HireLoop"
                                width={180}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </Link>

                        <p className="max-w-sm text-base leading-8 text-gray-500">
                            The AI-native career platform. Built for people who
                            take their work seriously.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-8 text-xl font-semibold text-indigo-400">
                            Product
                        </h3>

                        <ul className="space-y-5">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-8 text-xl font-semibold text-indigo-400">
                            Navigations
                        </h3>

                        <ul className="space-y-5">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-8 text-xl font-semibold text-indigo-400">
                            Resources
                        </h3>

                        <ul className="space-y-5">
                            {resourceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 border-t border-neutral-800" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-500 md:flex-row">
                    <p>© {new Date().getFullYear()} HireLoop. All rights reserved.</p>

                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/terms" className="hover:text-white">
                            Terms &amp; Policy
                        </Link>

                        <Link href="/privacy" className="hover:text-white">
                            Privacy Policy
                        </Link>

                        <Link href="/cookies" className="hover:text-white">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}