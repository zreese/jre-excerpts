export default function YoutubeLink({ url }: { url?: string }) {
    if (!url) return null
    return (
        <button style="border:1px solid;padding: 1rem; float:right;">
            <a href={url} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
            </a>
        </button>
    )
}