import React from 'react';

interface FilterControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  tags: string[];
  activeTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ 
  searchQuery, onSearchChange,
  categories, activeCategory, onSelectCategory,
  tags, activeTag, onSelectTag 
}) => {
  return (
    <div className="space-y-8 mb-8">
      <div>
        <label htmlFor="search-posts" className="sr-only">Search Posts</label>
        <div className="relative">
           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input 
                id="search-posts"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
            <button 
                onClick={() => onSelectCategory(null)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    activeCategory === null 
                    ? 'bg-purple-600 text-white font-semibold' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                All Categories
            </button>
            {categories.map(category => (
                <button 
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    activeCategory === category
                    ? 'bg-purple-600 text-white font-semibold' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button 
              key={tag}
              onClick={() => onSelectTag(tag === activeTag ? null : tag)}
              className={`px-3 py-1 text-xs rounded-full transition-colors capitalize ${
                activeTag === tag 
                ? 'bg-indigo-600 text-white font-semibold' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterControls;