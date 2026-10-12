import {
    FiMail,
    FiFileText,
    FiBarChart2,
    FiPauseCircle,
    FiClock,
    FiShield,
} from 'react-icons/fi';

const features = [
    {
        icon: FiMail,
        title: 'Automated Follow-Up Reminders',
        description:
            'Stay on top of every application with timely reminders that help you reconnect with recruiters and keep your job search moving.',
    },
    {
        icon: FiFileText,
        title: 'Professional Email Templates',
        description:
            'Create polished follow-up messages with reusable templates you can personalize for each recruiter, company, and role.',
    },
    {
        icon: FiBarChart2,
        title: 'Application Dashboard',
        description:
            'Bring your applications together in one workspace. Track statuses, review follow-up history, and identify what needs attention.',
    },
    {
        icon: FiPauseCircle,
        title: 'Flexible Follow-Up Management',
        description:
            'Received a response or landed an interview? Update your application and adjust your follow-up plan as your situation changes.',
    },
    {
        icon: FiClock,
        title: 'Timely Follow-Up Scheduling',
        description:
            'Plan when to reach out with a clear follow-up schedule instead of guessing. Keep recruiter communication consistent and professional.',
    },
    {
        icon: FiShield,
        title: 'You Stay in Control',
        description:
            'Manage your reminders, review your messages, and choose your follow-up pace. Your job search stays on your terms.',
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-28"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                        Features
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Everything you need.
                        <span className="block text-white/60">
                            A smarter way to job search.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        HireLoop helps you organize applications, plan recruiter follow-ups,
                        and manage your job search in one place — so you can focus on your
                        next opportunity.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/5 sm:p-8"
                            >
                                <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-white/5 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/20">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="relative z-10 mt-7 text-xl font-semibold text-white">
                                    {feature.title}
                                </h3>

                                <p className="relative z-10 mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
