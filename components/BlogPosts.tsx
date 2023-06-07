import { getSortedPostsData } from '@util/blogs';
import { BlogPost } from '@util/types';
import BlogPreview from './BlogPreview';

const BlogPosts = () => {
  const posts = getSortedPostsData();

  return (
    <div className="flex-1">
      <div className="space-y-4">
        {posts.map((post: BlogPost) => (
          <BlogPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
