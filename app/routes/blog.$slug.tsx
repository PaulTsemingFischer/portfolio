// app/routes/blog.$slug.tsx
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const post = await getBlogPost(params.slug!);
  if (!post) throw new Response("Not Found", { status: 404 });
  return json({ post });
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <span>•</span>
              <time className="text-gray-500">{post.publishDate}</time>
              <span>•</span>
              <span className="text-gray-500">{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg mb-12"
          />
        )}

        <div className="prose prose-lg prose-blue max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-gray-100 rounded-xl">
          <div className="flex items-start space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {post.author.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.author.bio}
              </p>
              <div className="flex space-x-4">
                <a href={post.author.twitter} className="text-blue-600 hover:text-blue-800">
                  Twitter
                </a>
                <a href={post.author.linkedin} className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
