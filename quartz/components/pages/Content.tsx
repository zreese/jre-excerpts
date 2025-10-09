import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import YoutubeLink from "../YoutubeLink"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{fileData.frontmatter?.youtube_url && <YoutubeLink url={fileData.frontmatter.youtube_url} />}{content}</article>
}

export default (() => Content) satisfies QuartzComponentConstructor
