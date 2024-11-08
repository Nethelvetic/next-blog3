import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return <div className="p-8">Article non trouvé</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <article className="mt-6 prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}

function getPostBySlug(slug) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Convertir le contenu markdown en HTML
  const contentHtml = marked(content);

  return {
    title: data.title,
    date: data.date,
    content: contentHtml,
  };
}
