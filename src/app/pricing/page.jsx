import React from 'react';
import Link from 'next/link';
import {
    FiCheck,
    FiShield,
    FiZap,
    FiHeart,
} from 'react-icons/fi';

const benefits = [
    'Unlimited job application tracking',
    'Recruiter follow-up reminders',
    'Professional email templates',
    'Application status management',
    'Follow-up planning and scheduling',
    'Full control over your messages',
    'No hidden fees or subscriptions',
    'No credit card required',
];

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-28"
        >
            {/* Background glows */}
            <div className="pointer-events-none absolute left-1/4 top-0 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                        <FiHeart className="h-4 w-4" />
                        Fair pricing, always
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Your next opportunity.
                        <span className="mt-2 block text-violet-400">
                            Absolutely free.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        Your job search is already challenging enough. HireLoop helps you
                        stay organized and follow up with confidence — without another
                        subscription to worry about.
                    </p>
                </div>

                {/* Pricing card */}
                <div className="mx-auto mt-14 max-w-2xl">
                    <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-white/4 p-7 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-10">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                                    <FiZap className="h-6 w-6" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        HireLoop Free
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Everything you need to organize your job search.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-end gap-2">
                                <span className="text-6xl font-bold tracking-tight text-white sm:text-7xl">
                                    $0
                                </span>
                                <span className="pb-2 text-gray-400">/ forever</span>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-gray-400">
                                No trial period. No subscription. No credit card. Just tools
                                to help you manage your next career move.
                            </p>

                            <Link
                                href="/signup"
                                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                Get Started for Free
                                <FiZap className="h-4 w-4" />
                            </Link>

                            <div className="my-8 h-px bg-white/10" />

                            <h4 className="text-sm font-semibold text-white">
                                Everything included
                            </h4>

                            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                                {benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
                                            <FiCheck className="h-3.5 w-3.5" />
                                        </span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4">
                                <FiShield className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                                <p className="text-sm leading-6 text-gray-400">
                                    <span className="font-medium text-white">
                                        Your career, your rules.
                                    </span>{' '}
                                    You stay in control of your recruiter communication and
                                    follow-up decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom reassurance */}
                <p className="mt-8 text-center text-sm text-gray-500">
                    No premium tier. No locked features. No surprises.
                </p>
            </div>
        </section>
    );
};

export default Pricing;