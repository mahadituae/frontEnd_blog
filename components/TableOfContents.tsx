import React, { useState, useEffect, useRef } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Find first heading to set as initial activeId
    if (headings.length > 0) {
      setActiveId(headings[0].id);
    }

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          // Stop after the first intersecting entry from the top
          return;
        }
      }
    };
    
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0px 0px -80% 0px', // Trigger when element enters the top 20% of the viewport
      threshold: 1.0,
    });

    const elements = headings.map(h => document.getElementById(h.id)).filter(el => el);
    elements.forEach(el => observer.current?.observe(el));
    
    return () => observer.current?.disconnect();
  }, [headings]);
  
  if (headings.length < 2) return null;

  return (
    <div className="hidden xl:block sticky top-28">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 font-sans">On this page</h3>
      <nav>
        <ul className="space-y-2 border-l-2 border-gray-200">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block border-l-2 -ml-0.5 transition-colors text-sm py-1 ${heading.level === 3 ? 'pl-8' : 'pl-4'} ${
                  activeId === heading.id
                    ? 'border-indigo-600 text-indigo-600 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
