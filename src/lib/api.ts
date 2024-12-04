import { BlogPost } from '../hooks/useBlog';

// Simulated blog posts data
const DUMMY_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Youth Development Program Success Stories',
    slug: 'youth-development-success-stories',
    excerpt: 'Discover how our youth development program is shaping the future of soccer talent.',
    content: 'Full content here...',
    date: '2024-03-01',
    featuredImage: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png',
    author: 'Coach Thompson',
    category: 'Youth Development',
    tags: ['youth', 'development', 'success']
  },
  {
    id: '2',
    title: 'Training Tips for Young Athletes',
    slug: 'training-tips-young-athletes',
    excerpt: 'Essential training tips to help young athletes improve their soccer skills.',
    content: 'Full content here...',
    date: '2024-02-28',
    featuredImage: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png',
    author: 'Coach Martinez',
    category: 'Training',
    tags: ['training', 'tips', 'youth']
  }
];

export async function getPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return DUMMY_POSTS;
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return DUMMY_POSTS.find(post => post.slug === slug) || null;
}