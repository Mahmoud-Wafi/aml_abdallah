import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Briefcase, TrendingUp, Shield } from "lucide-react";

export default function Index() {
  const featuredServices = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "استشارات ضريبية",
      description: "استشارات متخصصة في الضرائب العامة والإقرارات الضريبية",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "المراجعة المالية",
      description: "فحص دقيق للحسابات والدفاتر المحاسبية وإعداد التقارير",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "الاستشارات المالية",
      description: "تقديم النصح والتوجيهات في الأمور المالية والاستثمارية",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "تأسيس الشركات",
      description: "مساعدة كاملة في تأسيس الشركات والمنشآت التجارية",
    },
  ];

  const whyChooseFeatures = [
    {
      title: "خبرة وكفاءة",
      description: "حاصل على بكالوريوس تجارة مع دراسات عليا متخصصة",
    },
    {
      title: "دقة واحترافية",
      description: "التعامل الدقيق مع جميع الأمور المحاسبية والضريبية",
    },
    {
      title: "ثقة وسرية",
      description: "الحفاظ الكامل على سرية البيانات والمعلومات",
    },
    {
      title: "أسعار عادلة",
      description: "تقديم خدمات بجودة عالية بأسعار منافسة",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent opacity-5 rounded-full"></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
                أمل عبدالله المغواري
              </h1>
              <p className="text-xl text-accent font-semibold">
                محاسب قانوني متخصص
              </p>
              <p className="text-lg text-primary-foreground opacity-90 leading-relaxed">
                متخصص في تقديم استشارات ضريبية وحسابية متكاملة بكفاءة واحترافية
                عالية. مع خبرة عميقة في المجال المحاسبي والضريبي، أقدم الحلول
                المالية الموثوقة لشركاتك وأفرادك.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/201099582760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity"
                >
                  احجز استشارة الآن
                </a>
                <Link
                  to="/services"
                  className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold text-center hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  اطلع على الخدمات
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 flex-wrap">
                <div>
                  <div className="text-3xl font-bold text-accent">100+</div>
                  <p className="text-sm text-primary-foreground opacity-75">
                    عميل راضٍ
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <p className="text-sm text-primary-foreground opacity-75">
                    سنة خبرة
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <p className="text-sm text-primary-foreground opacity-75">
                    دعم متاح
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-80 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-center text-primary">
                    <div className="text-6xl font-bold mb-2">أ</div>
                    <p className="text-lg font-semibold">أمل المغواري</p>
                    <p className="text-sm opacity-75">محاسب قانوني</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              خدماتنا الرئيسية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المحاسبية والضريبية المتخصصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              لماذا تختارنا
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ما يميزنا عن غيرنا في تقديم الخدمات المحاسبية والضريبية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل أنت مستعد لتحسين إدارتك المالية؟
          </h2>
          <p className="text-xl text-primary-foreground opacity-90 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية حول احتياجاتك المحاسبية
            والضريبية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/201099582760"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity"
            >
              اتصل الآن
            </a>
            <Link
              to="/contact"
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold text-center hover:bg-accent hover:text-accent-foreground transition-all"
            >
              أرسل لنا رسالة
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
