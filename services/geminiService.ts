import { GoogleGenAI, Type } from "@google/genai";
import type { BlogPostType } from '../types';

const fetchBlogPosts = async (): Promise<BlogPostType[]> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    Generate 3 fictional, professional-grade blog posts about the future of frontend web development.
    For each post, provide the following structured data:
    1.  "id": A unique string ID.
    2.  "title": A catchy, SEO-friendly title.
    3.  "author": An object with "name" and a short, one-sentence "bio".
    4.  "date": A publication date in "Month Day, Year" format.
    5.  "excerpt": A brief, one-sentence summary of the article.
    6.  "content": The full blog post content in markdown format. It MUST include at least three H2 headings (like '## Section Title') and some H3 headings ('### Subsection'). The content should be insightful, well-structured, and around 300 words long.
    7.  "imageUrl": A relevant placeholder image URL from picsum.photos with dimensions 1200x800.
    8.  "category": A single, relevant, title-cased category string (e.g., "Frameworks", "Performance", "Web Standards").
    9.  "tags": An array of 3-4 relevant lowercase string tags (e.g., "ai", "webassembly", "react").
    10. "metaDescription": A concise, compelling meta description for SEO (around 155 characters).
    11. "estimatedReadingTime": An integer representing the reading time in minutes (based on an average of 200 words per minute).

    Ensure the generated content is high-quality and reads as if written by an expert in the field.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            posts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  author: { 
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      bio: { type: Type.STRING },
                    },
                    required: ["name", "bio"],
                  },
                  date: { type: Type.STRING },
                  excerpt: { type: Type.STRING },
                  content: { type: Type.STRING },
                  imageUrl: { type: Type.STRING },
                  category: { type: Type.STRING },
                  tags: { 
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  metaDescription: { type: Type.STRING },
                  estimatedReadingTime: { type: Type.INTEGER },
                },
                required: ["id", "title", "author", "date", "excerpt", "content", "imageUrl", "category", "tags", "metaDescription", "estimatedReadingTime"],
              }
            }
          }
        },
      },
    });

    const jsonString = response.text.trim();
    const parsedResponse = JSON.parse(jsonString);

    if (parsedResponse && parsedResponse.posts) {
      return parsedResponse.posts;
    } else {
      console.error("Unexpected JSON structure:", parsedResponse);
      return [];
    }
  } catch (error) {
    console.error("Error fetching blog posts from Gemini API:", error);
    throw error;
  }
};

export { fetchBlogPosts };