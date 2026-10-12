import {
    FiArrowRight,
    FiCheckCircle,
    FiClock,
    FiMail,
    FiPauseCircle,
    FiUserPlus,
} from 'react-icons/fi';
import Link from 'next/link';

const steps = [
    {
        number: '01',
        icon: FiUserPlus,
        title: 'Add your application',
        description:
            'Save the recruiter’s name, email, company, and the role you applied for. Keep your job applications organized in one place.',
    },
    {
        number: '02',
        icon: FiMail,
        title: 'Choose your template and schedule',
        description:
            'Prepare a professional follow-up message using a reusable template, then decide when you want to follow up.',
    },
    {
        number: '03',
        icon: FiClock,
        title: 'Follow up at the right time',
        description:
            'Use your follow-up schedule and reminders to reconnect with recruiters without losing track of your next steps.',
    },
    {
        number: '04',
        icon: FiPauseCircle,
        title: 'Track, pause, or stop anytime',
        description:
            'Record recruiter responses, update application statuses, and adjust your follow-up plan whenever things change.',
    },
];

export default function HowItWork() {
    return (
        <section
            id="how-it-works"
            className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-28"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                        How It Works
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Your job search,
                        <span className="block text-white/60">
                            organized from start to follow-up.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        Four simple steps to manage applications, prepare thoughtful
                        follow-ups, and keep every opportunity on your radar.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.number}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/5 sm:p-8"
                            >
                                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-white/5 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/20">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <span className="text-3xl font-semibold tracking-tight text-white/20">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="relative z-10 mt-7 text-xl font-semibold text-white">
                                    {step.title}
                                </h3>

                                <p className="relative z-10 mt-4 text-sm leading-7 text-gray-400">
                                    {step.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/signup"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-600 px-6 py-3.5 font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-500"
                    >
                        Get started with HireLoop
                        <FiArrowRight className="h-5 w-5" />
                    </Link>

                    <p className="mt-4 text-sm text-gray-500">
                        Your applications. Your schedule. Your next opportunity.
                    </p>
                </div>
            </div>
        </section>
    );
}
