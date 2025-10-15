import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// Explicitly specify that opts = Record<string, never>
export const FrontmatterSidebar: QuartzComponentConstructor<Record<string, never>> = (_opts) => {
  const Component = ({ fileData }: QuartzComponentProps) => {
    const fm = fileData?.frontmatter
    if (!fm) return null

    const exclude = ["tags", "title", "published_date", "youtube_url"]

    const displayNames: Record<string, string | null> = {
      media_episode_number: "Episode",
      publisher_notes: null,
    }

    const entries = Object.entries(fm).filter(([key]) => {
      // skip excluded keys and any with null labels
      return !exclude.includes(key) && displayNames[key] !== null
    })

    return (
      <div className="frontmatter-sidebar">
        {entries.map(([key, value]) => {
          if (!value || (Array.isArray(value) && value.length === 0)) return null

          const label = displayNames[key] ?? key // use custom label or fallback to key

          return (
            <p key={key}>
              {label ? <strong>{label}:</strong> : null}{" "}
              {Array.isArray(value) ? value.join(", ") : String(value)}
            </p>
          )
        })}
      </div>
    )
  }

  return Component
}

export default FrontmatterSidebar