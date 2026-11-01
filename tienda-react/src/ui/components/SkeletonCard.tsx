export default function SkeletonCard() {
    return (
        <article
            className="w-64 animate-pulse motion-reduce:animate-none rounded-xl border p-4"
            aria-hidden="true"
        >
            <div className="mb-3 aspect-square rounded bg-gray-200" />
            <div className="mb-2 h-3 w-1/3 rounded bg-gray-200" />
            <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
            <div className="mb-3 h-4 w-1/2 rounded bg-gray-200" />
            <div className="mb-3 h-5 w-2/3 rounded bg-gray-200" />
            <div className="h-8 w-full rounded-full bg-gray-200" />
        </article>
    );
}