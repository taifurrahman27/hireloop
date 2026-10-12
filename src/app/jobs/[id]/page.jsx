import Link from 'next/link';
import {
    FiArrowLeft,
    FiArrowUpRight,
    FiBriefcase,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiDollarSign,
    FiMapPin,
    FiShare2,
} from 'react-icons/fi';
import ShareButton from './share-button';

const jobs = [
    {
        id: '1',
        title: 'Frontend Developer',
        company: 'TechNova',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        salary: '৳40,000 – ৳70,000',
        posted: '2 days ago',
        category: 'Engineering',
        experience: '1–3 years',
        workplace: 'Hybrid',
        description:
            'We are looking for a motivated Frontend Developer to build responsive, accessible, and user-friendly web applications. You will collaborate with designers and backend developers to deliver high-quality digital experiences.',
        responsibilities: [
            'Build responsive user interfaces using React and modern JavaScript.',
            'Collaborate with designers to implement UI/UX designs.',
            'Integrate frontend applications with REST APIs.',
            'Optimize application performance and accessibility.',
            'Write clean, maintainable, and reusable code.',
        ],
        requirements: [
            'Experience with JavaScript, React, HTML, and CSS.',
            'Understanding of responsive web design.',
            'Familiarity with Git and REST APIs.',
            'Good problem-solving and communication skills.',
            'Knowledge of Next.js is an advantage.',
        ],
        benefits: [
            'Competitive salary',
            'Flexible working arrangements',
            'Professional development opportunities',
            'Collaborative team environment',
        ],
    },
    {
        id: '2',
        title: 'Backend Developer',
        company: 'CloudCore',
        location: 'Remote',
        type: 'Full-time',
        salary: '৳50,000 – ৳90,000',
        posted: '1 day ago',
        category: 'Engineering',
        experience: '2–4 years',
        workplace: 'Remote',
        description:
            'Join our engineering team to develop secure, scalable backend services and APIs for modern web applications.',
        responsibilities: [
            'Develop and maintain backend APIs.',
            'Design and optimize database queries.',
            'Implement authentication and authorization.',
            'Monitor application performance and reliability.',
        ],
        requirements: [
            'Experience with backend development.',
            'Understanding of REST APIs and databases.',
            'Knowledge of security best practices.',
            'Experience with Git and collaborative development.',
        ],
        benefits: [
            'Remote working',
            'Competitive compensation',
            'Learning opportunities',
            'Flexible schedule',
        ],
    },
    {
        id: '3',
        title: 'UI/UX Designer',
        company: 'PixelCraft',
        location: 'Dhaka, Bangladesh',
        type: 'Part-time',
        salary: '৳25,000 – ৳45,000',
        posted: '3 days ago',
        category: 'Design',
        experience: '1–3 years',
        workplace: 'On-site',
        description:
            'Create intuitive, accessible, and visually appealing digital experiences by combining user research, interaction design, and prototyping.',
        responsibilities: [
            'Create wireframes, prototypes, and interface designs.',
            'Conduct user research and usability testing.',
            'Collaborate with developers and product managers.',
            'Maintain design systems and UI consistency.',
        ],
        requirements: [
            'Experience with Figma or similar design tools.',
            'Understanding of user-centered design.',
            'A strong portfolio of design projects.',
            'Good communication and collaboration skills.',
        ],
        benefits: [
            'Flexible schedule',
            'Creative work environment',
            'Portfolio development',
            'Professional growth',
        ],
    },
    {
        id: '4',
        title: 'Digital Marketing Executive',
        company: 'GrowthLab',
        location: 'Chattogram, Bangladesh',
        type: 'Full-time',
        salary: '৳25,000 – ৳40,000',
        posted: '4 days ago',
        category: 'Marketing',
        experience: '1–2 years',
        workplace: 'On-site',
        description:
            'Help grow our online presence through digital campaigns, content strategy, social media management, and performance analysis.',
        responsibilities: [
            'Plan and execute digital marketing campaigns.',
            'Manage social media channels and content.',
            'Analyze campaign performance and metrics.',
            'Optimize marketing activities for better results.',
        ],
        requirements: [
            'Knowledge of digital marketing fundamentals.',
            'Familiarity with social media platforms.',
            'Analytical and communication skills.',
            'Experience with analytics tools is an advantage.',
        ],
        benefits: [
            'Performance incentives',
            'Career development',
            'Supportive team',
            'Training opportunities',
        ],
    },
    {
        id: '5',
        title: 'Junior React Developer',
        company: 'InnovateX',
        location: 'Remote',
        type: 'Internship',
        salary: '৳15,000 – ৳25,000',
        posted: '5 days ago',
        category: 'Engineering',
        experience: 'Entry-level',
        workplace: 'Remote',
        description:
            'InnovateX is looking for an enthusiastic Junior React Developer who wants to learn, grow, and contribute to real-world web applications. You will work alongside experienced developers and gain practical experience with modern frontend technologies.',
        responsibilities: [
            'Build and maintain reusable React components.',
            'Create responsive pages using HTML, CSS, and JavaScript.',
            'Integrate APIs and display data in user interfaces.',
            'Fix bugs and improve existing features.',
            'Participate in code reviews and team discussions.',
        ],
        requirements: [
            'Basic knowledge of JavaScript, HTML, and CSS.',
            'Understanding of React components, props, and state.',
            'Familiarity with Git and GitHub.',
            'Willingness to learn and solve technical problems.',
            'Personal projects or a portfolio are a plus.',
        ],
        benefits: [
            'Monthly internship allowance',
            '100% remote working',
            'Mentorship from experienced developers',
            'Hands-on project experience',
            'Opportunity for full-time employment',
        ],
    },
    {
        id: '6',
        title: 'Product Manager',
        company: 'NextWave',
        location: 'Dhaka, Bangladesh',
        type: 'Contract',
        salary: '৳70,000 – ৳120,000',
        posted: '1 week ago',
        category: 'Management',
        experience: '3–5 years',
        workplace: 'Hybrid',
        description:
            'Lead product planning and execution, align cross-functional teams, and deliver product improvements that solve real customer problems.',
        responsibilities: [
            'Define product requirements and priorities.',
            'Coordinate with engineering, design, and business teams.',
            'Analyze user feedback and product metrics.',
            'Manage product roadmaps and releases.',
        ],
        requirements: [
            'Experience in product management or a related role.',
            'Strong communication and organizational skills.',
            'Understanding of agile development.',
            'Ability to use data to support decisions.',
        ],
        benefits: [
            'Competitive compensation',
            'Flexible working arrangements',
            'Professional development',
            'Collaborative work environment',
        ],
    },
];

export default async function JobDetails({ params }) {
    const { id } = await params;
    const job = jobs.find((item) => item.id === id);

    if (!job) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        <FiBriefcase className="h-8 w-8" />
                    </div>

                    <h1 className="mt-6 text-2xl font-bold text-gray-900">
                        Job not found
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        This job may have been removed or the link may be incorrect.
                        Explore other opportunities on Hireloop.
                    </p>

                    <Link
                        href="/jobs"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                        <FiArrowLeft />
                        Browse all jobs
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            {/* Back navigation */}
            <div className="mx-auto max-w-7xl px-4 pt-8">
                <Link
                    href="/jobs"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
                >
                    <FiArrowLeft className="h-4 w-4" />
                    Back to all jobs
                </Link>
            </div>

            {/* Job Header */}
            <section className="mx-auto max-w-7xl px-4 pb-8 pt-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                <FiBriefcase className="h-8 w-8" />
                            </div>

                            <div>
                                <p className="font-semibold text-blue-600">{job.company}</p>

                                <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                                    {job.title}
                                </h1>

                                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <FiMapPin className="h-4 w-4" />
                                        {job.location}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <FiBriefcase className="h-4 w-4" />
                                        {job.type}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <FiClock className="h-4 w-4" />
                                        {job.posted}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            {job.type}
                        </span>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Salary range</p>
                            <p className="mt-1 text-xl font-bold text-gray-900">
                                {job.salary}
                                <span className="ml-1 text-sm font-normal text-gray-500">
                                    / month
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <ShareButton title={job.title} company={job.company} />

                            <Link
                                href={`/jobs/${job.id}/apply`}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Apply Now
                                <FiArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Information */}
            <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-[1fr_340px]">
                <div className="space-y-6">
                    {/* Description */}
                    <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                        <h2 className="text-xl font-bold">Job description</h2>

                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            {job.description}
                        </p>
                    </article>

                    {/* Responsibilities */}
                    <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                        <h2 className="text-xl font-bold">Responsibilities</h2>

                        <ul className="mt-5 space-y-4">
                            {job.responsibilities.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                                    <span className="text-sm leading-6 text-gray-600">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    {/* Requirements */}
                    <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                        <h2 className="text-xl font-bold">Requirements</h2>

                        <ul className="mt-5 space-y-4">
                            {job.requirements.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                    <span className="text-sm leading-6 text-gray-600">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    {/* Benefits */}
                    <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                        <h2 className="text-xl font-bold">Benefits</h2>

                        <ul className="mt-5 space-y-4">
                            {job.benefits.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                                    <span className="text-sm leading-6 text-gray-600">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-bold">Job overview</h2>

                        <div className="mt-6 space-y-5">
                            <div className="flex items-start gap-3">
                                <FiBriefcase className="mt-1 h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Job category</p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {job.category}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FiMapPin className="mt-1 h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Workplace</p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {job.workplace}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FiCalendar className="mt-1 h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Posted</p>
                                    <p className="mt-1 text-sm font-semibold">{job.posted}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FiClock className="mt-1 h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Experience</p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {job.experience}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FiDollarSign className="mt-1 h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Salary</p>
                                    <p className="mt-1 text-sm font-semibold">{job.salary}</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            href={`/jobs/${job.id}/apply`}
                            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Apply for this job
                            <FiArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                        <h2 className="text-lg font-bold text-gray-900">
                            Interested in this role?
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Review the requirements and submit your application to take the
                            next step in your career.
                        </p>

                        <Link
                            href="/jobs"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Explore more jobs
                            <FiArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </aside>
            </section>
        </main>
    );
}
