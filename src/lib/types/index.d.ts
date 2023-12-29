import type { IconType } from "@icons-pack/react-simple-icons/dist"
import type { FC } from "react"

declare module "*.{jpg,webp,png}"

type SkillIconType = {
  icon: IconType | FC
  skill: string
  level: string
  color?: string
}

type SkillGroupType = {
  cat: string
  s: SkillIconType[]
}

type SkillType = {
  Scripting: SkillIconType[]
  Web: SkillIconType[]
  Database: SkillIconType[]
  "DevOps and Others": SkillIconType[]
  IDEs: SkillIconType[]
  Design: SkillIconType[]
}

type Quotation = {
  quote: string
  author: string
}

type Experience = {
  role: string
  location: string
  duration: {
    from: string | null
    to: string | null
  }
  desc: string
}

type Education = {
  title: string
  location: string
  stream?: string
  duration: {
    from: string | number
    to: string | number
  }
  description: string
}

type ShortProject = {
  id: string
  name: string
  date: Date | string
  tags: string[]
  image?: string
  desc: string
  liveLink: string | null
  gitLink: string | null
}

type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  readTime?: string
}

type BlogPostGQL = {
  fields: {
    slug: string
    readingTime: {
      text: string
    }
  }
  frontmatter: {
    author: string
    date: string
    title: string
    description: string
    tags: string[]
  }
}

type BlogPostView = {
  id: string
  html: string
  frontmatter: {
    title: string
    date: string
    author: string
    description: string
    tags: string[]
  }
  fields: {
    slug?: string
    readingTime: {
      text: string
    }
  }
}

type Resource = {
  title: string
  description: string
  // "image": `/r/vscode.svg`,
  link: string
}
