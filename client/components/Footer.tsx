import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "الخدمات" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  const services = [
    "استشارات ضريبية",
    "المراجعة المالية",
    "تأسيس الشركات",
    "مسك الدفاتر المحاسبية",
    "الإقرارات الضريبية",
    "الاستشارات المالية",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">أ</span>
              </div>
              <h3 className="text-lg font-bold">أمل المغواري</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              محاسب قانوني متخصص في الاستشارات الضريبية والمحاسبية المتكاملة
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">الخدمات</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-4">
              <a
                href="tel:01099582760"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>01099582760</span>
              </a>
              <a
                href="mailto:amlbdallhmghwary16@gmail.com"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>amlbdallhmghwary16@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>البحيرة – أبو المطامير</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-secondary my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} أمل عبدالله المغواري. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
