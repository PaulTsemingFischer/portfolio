// app/routes/blog._index.tsx (Blog listing page)
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export async function loader() {
  const posts = await getBlogPosts();
  return json({ posts });
}

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Blog Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.slug}>
            <h2>
              <Link to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
            <time>{post.publishDate}</time>
          </article>
        ))}
      </div>
    </div>
  );
}

async function getBlogPosts() {
  // In a real app, this would fetch from a database or CMS
  return [
    {
      slug: "getting-started-with-remix",
      title: "Getting Started with Remix",
      excerpt: "Learn how to build modern web apps with Remix",
      publishDate: "2024-01-15",
      content: "Full blog post content here..."
    },
    {
      slug: "understanding-web-standards",
      title: "Understanding Web Standards",
      excerpt: "Why web standards matter in modern development",
      publishDate: "2024-01-10",
      content: "Full blog post content here..."
    }
  ];
}
