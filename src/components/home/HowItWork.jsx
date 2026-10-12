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
            'Enter the recruiter’s name, email, company, and the role you applied for. Keep your job applications organized in one place.',
    },
    {
        number: '02',
        icon: FiMail,
        title: 'Choose your template and schedule',
        description:
            'Choose a professional follow-up template or write your own message. Set a follow-up schedule that works for you.',
    },
    {
        number: '03',
        icon: FiClock,
        title: 'Follow up at the right time',
        description:
            'Stay on top of your applications with timely follow-up reminders, helping you reconnect with recruiters without losing track of your next steps.',
    },
    {
        number: '04',
        icon: FiPauseCircle,
        title: 'Track, pause, or stop anytime',
        description:
            'Record recruiter responses, update application statuses, and pause or stop follow-ups whenever your situation changes. You stay in control.',
    },
];

export default function HowItWork() {
    return (
        <section
            id="how-it-works"
            className="bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                        How It Works
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Set it up once. Keep your job search moving.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        HireLoop helps you organize applications, follow up professionally,
                        and manage recruiter conversations so you can focus on finding your
                        next opportunity.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.number}
                                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <span className="text-3xl font-bold text-gray-200">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-gray-900">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
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
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Get started with HireLoop
                        <FiArrowRight className="h-5 w-5" />
                    </Link>

                    <p className="mt-3 text-sm text-gray-500">
                        Stay organized. Follow up confidently. Move forward.
                    </p>
                </div>
            </div>
        </section>
    );
}
