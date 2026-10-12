import React from 'react';
import {
    FiDollarSign,
    FiLock,
    FiMail,
    FiShield,
    FiEye,
    FiUserCheck,
    FiDatabase,
    FiTrendingUp,
} from 'react-icons/fi';

const promises = [
    {
        icon: FiDollarSign,
        title: 'Always Free',
        description: "Charge you anything — HireLoop is free forever.",
    },
    {
        icon: FiLock,
        title: 'No Paywalls',
        description: 'Lock essential features behind paid plans or subscriptions.',
    },
    {
        icon: FiMail,
        title: 'No Recruiter Spam',
        description: 'Spam recruiters or contact them on your behalf without permission.',
    },
    {
        icon: FiShield,
        title: 'You Stay in Control',
        description: 'Send messages without your templates and approval.',
    },
    {
        icon: FiEye,
        title: 'No Hidden Surprises',
        description: 'Hide important limitations, unexpected charges, or unclear terms.',
    },
    {
        icon: FiUserCheck,
        title: 'No Fake Applications',
        description: 'Apply to jobs or make commitments on your behalf without your consent.',
    },
    {
        icon: FiDatabase,
        title: 'No Selling Your Data',
        description: 'Sell your personal information or job search data to advertisers.',
    },
    {
        icon: FiTrendingUp,
        title: 'No False Promises',
        description: 'Guarantee interviews, job offers, or career success we cannot promise.',
    },
];

const NeverDo = () => {
    return (
        <section className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-28">
            {/* Background glows */}
            <div className="pointer-events-none absolute left-1/4 top-0 -z-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                        Our Promise
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        What HireLoop will{' '}
                        <span className="text-violet-400">never</span> do
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        Your job search stays yours. No hidden costs, no unwanted messages,
                        and no compromises on your control.
                    </p>
                </div>

                {/* Promise cards */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {promises.map((promise) => {
                        const Icon = promise.icon;

                        return (
                            <article
                                key={promise.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/5 sm:p-8"
                            >
                                <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-violet-500/0 blur-3xl transition duration-300 group-hover:bg-violet-500/15" />

                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/20">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="relative z-10 mt-6 text-lg font-semibold text-white">
                                    {promise.title}
                                </h3>

                                <p className="relative z-10 mt-3 text-sm leading-7 text-gray-400">
                                    {promise.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default NeverDo;