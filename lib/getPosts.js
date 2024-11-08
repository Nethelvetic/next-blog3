import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    // Le slug est dérivé du nom du fichier sans l'extension .md
    const slug = filename.replace(/\.md$/, '');

    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });
}
