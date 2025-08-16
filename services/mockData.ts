import type { BlogPostType } from '../types';

export const mockPosts: BlogPostType[] = [
  {
    id: 'mock-1',
    title: 'The Rise of Server-Side Rendering in React Frameworks',
    author: {
      name: 'Jane Doe',
      bio: 'Lead Frontend Engineer at Tech Solutions Inc.',
    },
    date: 'August 16, 2024',
    excerpt: 'Explore how frameworks like Next.js are revolutionizing web performance and SEO by bringing rendering back to the server.',
    content: `## The Problem with Client-Side Rendering\nFor years, Single Page Applications (SPAs) have dominated the web. While they offer a fluid, app-like experience, they come with significant drawbacks, primarily slow initial load times and poor SEO performance. Search engine crawlers often struggle to index content that is only rendered after JavaScript execution.\n\n## Enter SSR and Static Site Generation\nServer-Side Rendering (SSR) and Static Site Generation (SSG) solve these problems. Frameworks like Next.js for React and Nuxt.js for Vue have made it incredibly easy to build applications that are rendered on the server before being sent to the client. This means the user receives a fully-rendered HTML page almost instantly.\n\n### Key Benefits\n- **Faster First Contentful Paint (FCP):** Users see content immediately, which dramatically improves perceived performance.\n- **Improved SEO:** Search engines can easily crawl and index the pre-rendered HTML content, boosting your site's visibility.\n- **Better User Experience:** Combining SSR with client-side hydration offers the best of both worlds: a fast initial load followed by a dynamic, interactive experience.`,
    imageUrl: 'https://picsum.photos/seed/react/1200/800',
    category: 'Frameworks',
    tags: ['react', 'ssr', 'nextjs', 'performance'],
    metaDescription: 'Learn about the advantages of Server-Side Rendering (SSR) in modern React frameworks like Next.js and how it improves performance and SEO.',
    estimatedReadingTime: 3,
  },
  {
    id: 'mock-2',
    title: 'WebAssembly: The Future of High-Performance Web Apps',
    author: {
      name: 'John Smith',
      bio: 'Core Developer and performance optimization enthusiast.',
    },
    date: 'August 12, 2024',
    excerpt: 'A look into how WebAssembly (Wasm) is enabling near-native speed for complex applications directly in the browser.',
    content: `## Beyond JavaScript\nJavaScript is the undisputed king of the web, but it has its limitations, especially when it comes to CPU-intensive tasks like video editing, 3D rendering, or complex data analysis. This is where WebAssembly comes in.\n\n## What is WebAssembly?\nWebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine. It's designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications. It allows you to run code written in languages like C++, Rust, and Go at near-native speed in the browser.\n\n### Use Cases\n- **Gaming:** High-performance 3D games that were once limited to desktop applications.\n- **Data Visualization:** Real-time processing and visualization of massive datasets.\n- **Creative Tools:** In-browser video and audio editors that can handle complex operations without lag.`,
    imageUrl: 'https://picsum.photos/seed/wasm/1200/800',
    category: 'Performance',
    tags: ['webassembly', 'performance', 'rust', 'future'],
    metaDescription: 'Discover how WebAssembly (Wasm) is changing the game for web development by enabling high-performance applications to run in the browser.',
    estimatedReadingTime: 2,
  },
  {
    id: 'mock-3',
    title: 'CSS is More Powerful Than Ever: A Look at Modern Features',
    author: {
      name: 'Alice Johnson',
      bio: 'UI/UX Designer with a passion for clean, modern CSS.',
    },
    date: 'August 5, 2024',
    excerpt: 'Forget JavaScript hacks. Modern CSS features like Grid, Container Queries, and :has() are making complex layouts more accessible than ever.',
    content: `## The Old Way\nFor years, developers relied on JavaScript libraries and complex CSS hacks (hello, floats!) to create responsive layouts. This often led to bloated codebases and brittle designs that were hard to maintain.\n\n## The Modern CSS Revolution\nRecent additions to the CSS specification have fundamentally changed how we build for the web.\n\n### Container Queries\nUnlike media queries, which only respond to the viewport size, container queries allow a component to adapt its styles based on the size of its parent container. This is a game-changer for creating truly modular and reusable components.\n\n### The :has() Selector\nThe :has() pseudo-class, often called the "parent selector," allows you to select an element based on what it contains. For example, you can style a <figure> element differently if it contains a <figcaption>. This opens up a world of possibilities for dynamic styling without needing a single line of JavaScript.`,
    imageUrl: 'https://picsum.photos/seed/css/1200/800',
    category: 'Web Standards',
    tags: ['css', 'frontend', 'design', 'webdev'],
    metaDescription: 'Explore powerful modern CSS features like Container Queries and the :has() selector that are revolutionizing web design and layout.',
    estimatedReadingTime: 3,
  }
];