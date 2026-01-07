import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "الخدمات" },
    { href: "/why-choose-us", label: "لماذا تختارنا" },
    { href: "/testimonials", label: "آراء العملاء" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary font-bold text-lg">أ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">أمل المغواري</h1>
              <p className="text-xs text-accent">محاسب قانوني</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/201099582760"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              اتصل الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-secondary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-3 px-4 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/201099582760"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-4 mt-2 text-center bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              اتصل الآن
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
