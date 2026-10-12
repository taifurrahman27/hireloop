'use client';

import { FiShare2 } from 'react-icons/fi';

export default function ShareButton({ title, company }) {
    async function handleShare() {
        const shareData = {
            title,
            text: `${title} at ${company}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert('Job link copied to clipboard!');
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Unable to share job:', error);
            }
        }
    }

    return (
        <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
            <FiShare2 className="h-4 w-4" />
            Share
        </button>
    );
}
