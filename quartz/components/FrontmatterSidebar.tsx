import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// Explicitly specify that opts = Record<string, never>
export const FrontmatterSidebar: QuartzComponentConstructor<Record<string, never>> = (_opts) => {
  const Component = ({ fileData }: QuartzComponentProps) => {
    const fm = fileData?.frontmatter
    if (!fm) return null

    const exclude = ["tags", "title"]
    const entries = Object.entries(fm).filter(([k]) => !exclude.includes(k))

    return (
      <div className="frontmatter-sidebar">
        {entries.map(([key, value]) => {
          if (!value || (Array.isArray(value) && value.length === 0)) return null
          return (
            <p key={key}>
              <strong>{key}:</strong>{" "}
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