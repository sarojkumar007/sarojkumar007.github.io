import fs from 'fs';
import path from 'path';

import type { BlogPost } from './types';

// @ts-ignore
import matter from 'gray-matter';

import { slugify } from '@util';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    const readStats = readingTime(content);

    const blogPost: BlogPost = {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: data.tags,
      readTime: readStats.text,
    };

    // Combine the data with the slug
    return blogPost;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  const readStats = readingTime(content);

  const blogPostWithHTML: BlogPost & { content: string } = {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags,
    readTime: readStats.text,
    content,
  };

  // Combine the data with the slug
  return blogPostWithHTML;
}

export function getPostTopics() {
  const topics: string[] = [];

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  fileNames.forEach((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Combine the tags

    if (data.tags && data.tags.length) {
      data.tags.forEach((t: string) => {
        if (!topics.includes(t)) topics.push(t);
      });
    }
  });

  return topics;
}

export function getPostsByTopic(topic: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  const blogPosts = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    const readStats = readingTime(content);

    if (
      data.tags &&
      data.tags.some((_t: string) => slugify(_t)?.includes(topic))
    ) {
      const post: BlogPost = {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        tags: data.tags,
        readTime: readStats.text,
      };
      return post;
    }
  });

  return blogPosts.filter((_p) => _p);
}
