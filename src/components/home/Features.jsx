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
            'Never lose track of an application. Set follow-up dates and let HireLoop remind you when it is time to reconnect with a recruiter.',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        icon: FiFileText,
        title: 'Professional Email Templates',
        description:
            'Write better follow-up messages with reusable templates. Personalize each email to match your experience, communication style, and target role.',
        color: 'bg-purple-50 text-purple-600',
    },
    {
        icon: FiBarChart2,
        title: 'Application Dashboard',
        description:
            'Manage your job search from one place. Track application statuses, review your follow-up history, and see which opportunities need attention.',
        color: 'bg-emerald-50 text-emerald-600',
    },
    {
        icon: FiPauseCircle,
        title: 'Flexible Follow-Up Management',
        description:
            'Received a response or secured an interview? Update your application and adjust your follow-up plan whenever your circumstances change.',
        color: 'bg-orange-50 text-orange-600',
    },
    {
        icon: FiClock,
        title: 'Timely Follow-Up Scheduling',
        description:
            'Plan follow-ups at appropriate intervals instead of guessing when to reach out. Keep your recruiter communication timely and professional.',
        color: 'bg-pink-50 text-pink-600',
    },
    {
        icon: FiShield,
        title: 'You Stay in Control',
        description:
            'Choose how and when you follow up. Review your messages, manage reminders, and keep your job search aligned with your own preferences.',
        color: 'bg-indigo-50 text-indigo-600',
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                        Features
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need for a more organized job search.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        From tracking applications to planning recruiter follow-ups,
                        HireLoop brings your job search essentials together in one simple
                        workspace.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.title}
                                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5"
                            >
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} transition-transform duration-300 group-hover:scale-105`}
                                >
                                    <Icon className="h-7 w-7" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
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
