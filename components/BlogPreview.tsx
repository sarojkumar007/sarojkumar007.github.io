import type { BlogPost } from '@util/types';
import type { FC, Key } from 'react';

import Link from 'next/link';

import { formatDate, slugify } from '@util';
import { BookOpen, Calendar, Tag } from 'react-feather';

const BlogPreview: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <>
      <Link
        href={`/blog/${post.slug}`}
        className="blog_card block relative w-full h-full rounded-xl overflow-hidden border-x border-b border-gray-300 dark:border-gray-700"
      >
        <div className="absolute top-0 left-0 w-full h-1 blog_card_back"></div>
        <div className="mt-1 w-full px-6 pt-5 pb-6 bg-gray-100/50 dark:bg-gray-700/50">
          <h3 className="text-xl font-medium tracking-wide">{post.title}</h3>
          <div className="my-4 flex items-center flex-wrap gap-2 text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-multi-c1 mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>
            {/* <div className="flex items-center">
              <User className="w-4 h-4 text-multi-c1 mr-1" />
              <span>{post.author}</span>
            </div> */}
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 text-multi-c1 mr-1" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex flex-wrap items-center text-sm space-x-1">
              <Tag className="w-4 h-4 text-multi-c1 mr-1" />
              {post.tags.map((t) => (
                <Link
                  href={`/blog/topic/${slugify(t)}`}
                  key={t as Key}
                  className="tag2"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-base font-sailec font-normal text-gray-600 dark:text-gray-100">
            {post.description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default BlogPreview;
