import React, { useMemo } from 'react';
import type { BlogPostType } from '../types';
import TableOfContents, { type Heading } from './TableOfContents';
import SocialShare from './SocialShare';

interface BlogPostProps {
  post: BlogPostType | null;
}

const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  
  const { headings, contentElements } = useMemo(() => {
    if (!post) return { headings: [], contentElements: [] };

    const generatedHeadings: Heading[] = [];
    const elements = post.content.split('\n').filter(Boolean).map((line, index) => {
      if (line.startsWith('### ')) {
        const text = line.substring(4);
        const id = slugify(`${text}-${index}`);
        generatedHeadings.push({ id, text, level: 3 });
        return <h3 key={index} id={id} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{text}</h3>;
      }
      if (line.startsWith('## ')) {
        const text = line.substring(3);
        const id = slugify(`${text}-${index}`);
        generatedHeadings.push({ id, text, level: 2 });
        return <h2 key={index} id={id} className="text-3xl font-bold text-gray-900 mt-12 mb-4 border-b pb-2">{text}</h2>;
      }
      return <p key={index} className="mb-6 leading-relaxed">{line}</p>;
    });
    
    return { headings: generatedHeadings, contentElements: elements };
  }, [post]);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-full bg-white p-8 rounded-xl shadow-lg border border-gray-200 min-h-[400px]">
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-900">No Posts Found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your filters or generating new posts.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-8 items-start">
        <article className="col-span-12 xl:col-span-9 bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
          <header className="mb-8">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto max-h-96 object-cover rounded-lg mb-8"
            />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
               <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">{post.category}</span>
               <div className="flex flex-wrap gap-2">
                 {post.tags.map(tag => (
                    <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">#{tag}</span>
                 ))}
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
              <span>By <strong>{post.author.name}</strong></span>
              <span className="h-1 w-1 bg-gray-400 rounded-full hidden sm:inline-block"></span>
              <span>{post.date}</span>
              <span className="h-1 w-1 bg-gray-400 rounded-full hidden sm:inline-block"></span>
              <span>{post.estimatedReadingTime} min read</span>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            {contentElements}
          </div>

          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex items-center space-x-4">
                    <div className="text-sm">
                        <p className="font-bold text-gray-800">{post.author.name}</p>
                        <p className="text-gray-600">{post.author.bio}</p>
                    </div>
                </div>
                <SocialShare postTitle={post.title} />
            </div>
          </footer>
        </article>
        
        <aside className="hidden xl:block col-span-3">
          <TableOfContents headings={headings} />
        </aside>
    </div>
  );
};

export default BlogPost;