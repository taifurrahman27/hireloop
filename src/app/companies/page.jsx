import React from 'react';
import Link from 'next/link';
import {
    FiSearch,
    FiMapPin,
    FiBriefcase,
    FiArrowUpRight,
    FiCode,
    FiDollarSign,
    FiHeart,
    FiShoppingBag,
    FiLayers,
} from 'react-icons/fi';

const companies = [
    {
        id: 1,
        name: 'TechNova',
        industry: 'Technology',
        location: 'Remote',
        openJobs: 12,
        description:
            'Building modern digital products and technology that help businesses grow.',
        icon: FiCode,
        initials: 'TN',
    },
    {
        id: 2,
        name: 'FinEdge',
        industry: 'Finance',
        location: 'New York, USA',
        openJobs: 8,
        description:
            'Creating smarter financial experiences through data and innovation.',
        icon: FiDollarSign,
        initials: 'FE',
    },
    {
        id: 3,
        name: 'HealthBridge',
        industry: 'Healthcare',
        location: 'Remote',
        openJobs: 6,
        description:
            'Making healthcare services more accessible through thoughtful technology.',
        icon: FiHeart,
        initials: 'HB',
    },
    {
        id: 4,
        name: 'MarketNest',
        industry: 'E-commerce',
        location: 'London, UK',
        openJobs: 9,
        description:
            'Helping brands deliver better shopping experiences to customers worldwide.',
        icon: FiShoppingBag,
        initials: 'MN',
    },
    {
        id: 5,
        name: 'PixelCraft',
        industry: 'Design',
        location: 'Remote',
        openJobs: 5,
        description:
            'A creative team shaping meaningful digital products and user experiences.',
        icon: FiLayers,
        initials: 'PC',
    },
    {
        id: 6,
        name: 'CloudSphere',
        industry: 'Technology',
        location: 'Singapore',
        openJobs: 11,
        description:
            'Developing cloud infrastructure and tools for the next generation of teams.',
        icon: FiCode,
        initials: 'CS',
    },
];

const CompaniesList = () => {
    return (
        <main className="relative isolate min-h-screen overflow-hidden bg-black py-20 text-white sm:py-24">
            {/* Background glows */}
            <div className="pointer-events-none absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                        Explore Employers
                    </span>

                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Discover your next
                        <span className="block text-violet-400">great workplace.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        Explore companies, learn about their teams, and find opportunities
                        that align with your skills and career goals.
                    </p>
                </div>

                {/* Search bar — visual only until connected to client-side state */}
                <div className="mx-auto mt-10 max-w-2xl">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-2 backdrop-blur-xl transition focus-within:border-violet-500/40">
                        <FiSearch className="ml-3 h-5 w-5 shrink-0 text-gray-400" />

                        <input
                            type="search"
                            placeholder="Search companies or industries..."
                            aria-label="Search companies or industries"
                            className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                        />

                        <button
                            type="button"
                            className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Company count */}
                <div className="mt-14 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-white">
                            Explore companies
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">
                            Find teams where your next opportunity could begin.
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">
                        {companies.length} companies
                    </p>
                </div>

                {/* Company cards */}
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {companies.map((company) => {
                        const Icon = company.icon;

                        return (
                            <article
                                key={company.id}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/5 sm:p-7"
                            >
                                <div className="pointer-events-none absolute -bottom-16 -right-12 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition duration-300 group-hover:bg-violet-500/15" />

                                <div className="relative z-10 flex items-start justify-between gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-gray-300">
                                        {company.industry}
                                    </span>
                                </div>

                                <h3 className="relative z-10 mt-6 text-xl font-semibold text-white">
                                    {company.name}
                                </h3>

                                <p className="relative z-10 mt-3 min-h-14 text-sm leading-7 text-gray-400">
                                    {company.description}
                                </p>

                                <div className="relative z-10 mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <FiMapPin className="h-4 w-4 text-violet-300" />
                                        {company.location}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <FiBriefcase className="h-4 w-4 text-violet-300" />
                                        {company.openJobs} open jobs
                                    </span>
                                </div>

                                <div className="relative z-10 mt-6 border-t border-white/10 pt-5">
                                    <Link
                                        href={`/companies/${company.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
                                    >
                                        View company
                                        <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 rounded-3xl border border-white/10 bg-white/3 px-6 py-10 text-center backdrop-blur-xl sm:px-10">
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        Your next opportunity starts with a connection.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        Keep track of your applications and follow up with confidence as
                        you explore your next career move.
                    </p>

                    <Link
                        href="/jobs"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500"
                    >
                        Explore jobs
                        <FiArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default CompaniesList;