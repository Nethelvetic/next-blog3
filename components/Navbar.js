export default function Navbar() {
    return (
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">Mon Blog</a>
          <div className="space-x-4">
            <a href="/mesBlogs" className="text-white">Mes Blogs</a>
            <a href="/about" className="text-white">À propos</a>
            <a href="/contact" className="text-white">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  