import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <section className="flex-1 flex items-center justify-center py-16 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            الصفحة غير موجودة
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون قد تم نقلها أو
            حذفها.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              العودة إلى الرئيسية
            </Link>
            <Link
              to="/services"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              اطلع على الخدمات
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
