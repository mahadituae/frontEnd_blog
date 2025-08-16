import React from 'react';
import type { BlogPostType } from '../types';

interface BlogPostListProps {
  posts: BlogPostType[];
  selectedPost: BlogPostType | null;
  onSelectPost: (post: BlogPostType) => void;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, selectedPost, onSelectPost }) => {
  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li key={post.id}>
          <button
            onClick={() => onSelectPost(post)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${
              selectedPost?.id === post.id
                ? 'bg-indigo-50'
                : 'hover:bg-gray-100'
            }`}
             aria-current={selectedPost?.id === post.id ? 'page' : undefined}
          >
            <h3 className={`font-semibold ${selectedPost?.id === post.id ? 'text-indigo-700' : 'text-gray-800'}`}>
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="text-xs text-gray-400 mt-2">{post.estimatedReadingTime} min read</div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;
