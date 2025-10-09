export default function YoutubeLink({ url }: { url?: string }) {
    if (!url) return null
    return (
        <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
            </a>
        </p>
    )
}