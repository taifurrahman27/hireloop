import Link from 'next/link';
import {
    FiBriefcase,
    FiMapPin,
    FiSearch,
    FiClock,
    FiArrowUpRight,
} from 'react-icons/fi';

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
    },
];

const jobTypes = [
    'All Jobs',
    'Full-time',
    'Part-time',
    'Contract',
    'Internship',
];

export default async function AllJobs({ searchParams }) {
    const params = await searchParams;

    const search = params.search?.trim().toLowerCase() || '';
    const location = params.location?.trim().toLowerCase() || '';
    const selectedType = params.type || 'All Jobs';

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            !search ||
            job.title.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search) ||
            job.category.toLowerCase().includes(search);

        const matchesLocation =
            !location || job.location.toLowerCase().includes(location);

        const matchesType =
            selectedType === 'All Jobs' || job.type === selectedType;

        return matchesSearch && matchesLocation && matchesType;
    });

    function getFilterUrl(type) {
        const query = new URLSearchParams();

        if (params.search) query.set('search', params.search);
        if (params.location) query.set('location', params.location);
        if (type !== 'All Jobs') query.set('type', type);

        const queryString = query.toString();

        return queryString ? `/jobs?${queryString}` : '/jobs';
    }

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <section className="bg-gray-950 px-4 py-16 text-white sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Your career starts here
                    </span>

                    <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Find a job that moves you forward.
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                        Discover opportunities, connect with employers, and take the next
                        step in your career with Hireloop.
                    </p>

                    {/* Search Form */}
                    <form
                        action="/jobs"
                        method="GET"
                        className="mt-8 grid gap-3 rounded-2xl bg-white p-3 shadow-xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]"
                    >
                        <label className="flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 px-4">
                            <FiSearch className="h-5 w-5 shrink-0 text-gray-400" />

                            <input
                                type="search"
                                name="search"
                                defaultValue={params.search || ''}
                                placeholder="Job title, company, or keyword"
                                aria-label="Search jobs"
                                className="min-w-0 flex-1 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                            />
                        </label>

                        <label className="flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 px-4">
                            <FiMapPin className="h-5 w-5 shrink-0 text-gray-400" />

                            <input
                                type="text"
                                name="location"
                                defaultValue={params.location || ''}
                                placeholder="City or remote"
                                aria-label="Job location"
                                className="min-w-0 flex-1 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                            />
                        </label>

                        {selectedType !== 'All Jobs' && (
                            <input type="hidden" name="type" value={selectedType} />
                        )}

                        <button
                            type="submit"
                            className="rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                        >
                            Search jobs
                        </button>
                    </form>
                </div>
            </section>

            {/* Job Listings */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            Explore opportunities
                        </h2>

                        <p className="mt-2 text-sm text-gray-500 sm:text-base">
                            Find the role that fits your skills and ambitions.
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-900">
                            {filteredJobs.length}
                        </span>{' '}
                        {filteredJobs.length === 1 ? 'job' : 'jobs'} found
                    </p>
                </div>

                {/* Employment Type Filters */}
                <nav
                    aria-label="Filter by employment type"
                    className="mt-7 flex gap-2 overflow-x-auto pb-2"
                >
                    {jobTypes.map((type) => {
                        const isActive = selectedType === type;

                        return (
                            <Link
                                key={type}
                                href={getFilterUrl(type)}
                                aria-current={isActive ? 'page' : undefined}
                                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${isActive
                                    ? 'border-blue-600 bg-blue-600 text-white'
                                    : 'border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-blue-600'
                                    }`}
                            >
                                {type}
                            </Link>
                        );
                    })}
                </nav>

                {/* Active Filters */}
                {(params.search || params.location) && (
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                        <span>Filters:</span>

                        {params.search && (
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                                Search: {params.search}
                            </span>
                        )}

                        {params.location && (
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                                Location: {params.location}
                            </span>
                        )}

                        <Link
                            href={getFilterUrl(selectedType)}
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Clear search
                        </Link>
                    </div>
                )}

                {/* Job Cards */}
                {filteredJobs.length > 0 ? (
                    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {filteredJobs.map((job) => (
                            <article
                                key={job.id}
                                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <FiBriefcase className="h-6 w-6" />
                                    </div>

                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                        {job.type}
                                    </span>
                                </div>

                                <p className="mt-5 text-sm font-medium text-blue-600">
                                    {job.company}
                                </p>

                                <h3 className="mt-1 text-lg font-bold transition group-hover:text-blue-600">
                                    {job.title}
                                </h3>

                                <div className="mt-4 space-y-2 text-sm text-gray-500">
                                    <p className="flex items-center gap-2">
                                        <FiMapPin className="h-4 w-4 shrink-0" />
                                        {job.location}
                                    </p>

                                    <p className="flex items-center gap-2">
                                        <FiClock className="h-4 w-4 shrink-0" />
                                        Posted {job.posted}
                                    </p>
                                </div>

                                <div className="mt-5 flex-1 border-t border-gray-100 pt-4">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {job.salary}
                                        <span className="font-normal text-gray-500">
                                            {' '}/ month
                                        </span>
                                    </p>

                                    <div className="mt-5 flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            {job.category}
                                        </span>

                                        <Link
                                            href={`/jobs/${job.id}`}
                                            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                                        >
                                            View details
                                            <FiArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                            <FiSearch className="h-6 w-6" />
                        </div>

                        <h3 className="mt-5 text-lg font-semibold">No jobs found</h3>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                            Try changing your keywords, location, or employment type to find
                            more opportunities.
                        </p>

                        <Link
                            href="/jobs"
                            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            View all jobs
                        </Link>
                    </div>
                )}
            </section>
        </main>
    );
}
