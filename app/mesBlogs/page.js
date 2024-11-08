import Link from 'next/link';
import { getPosts } from '../../lib/getPosts';

export default function MesBlogs() {
  const posts = getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mes Blogs</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="text-lg font-semibold text-blue-600 hover:underline">
            <Link href={`/mesBlogs/${post.slug}`}>
              {post.title} - <span className="text-gray-500">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
