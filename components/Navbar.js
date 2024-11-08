import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Mon Blog
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white">
            Accueil
          </Link>
          <Link href="/mesBlogs" className="text-white">
            Mes Blogs
          </Link>
          <Link href="/about" className="text-white">
            À propos
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
