import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, Users, TrendingUp, Heart, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "خبرة ومؤهلات عالية",
      description:
        "حاصل على بكالوريوس تجارة مع دراسات عليا متخصصة في المحاسبة المالية والمراجعة من جامعات موثوقة",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "دقة واحترافية",
      description:
        "معايير عالية جداً من الدقة في جميع الأعمال المحاسبية والضريبية مع الالتزام الكامل بالقوانين",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "ثقة وسرية",
      description:
        "الحفاظ التام على سرية وخصوصية بيانات ومعلومات العملاء مع أعلى مستويات الأمان",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "خدمة عملاء متميزة",
      description:
        "فريق متفاني يقدم دعماً مستمراً وحلولاً سريعة لجميع استفسارات واحتياجات العملاء",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "كفاءة وسرعة",
      description:
        "إنجاز العمل بسرعة وكفاءة دون المساومة على الجودة والدقة في أي حال",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "أسعار عادلة ومنافسة",
      description:
        "تقديم خدمات بجودة متميزة بأسعار منافسة وعادلة مع شفافية كاملة في التسعير",
    },
  ];

  const testimonialHighlights = [
    {
      text: "متخصص حقيقي في مجاله",
      author: "عميل شركة كبرى",
    },
    {
      text: "دقة عالية جداً وخدمة ممتازة",
      author: "صاحب مشروع صغير",
    },
    {
      text: "يستحق كل ثقة وتوصية",
      author: "مدير مالي بشركة",
    },
  ];

  const comparisonPoints = [
    {
      point: "الخبرة والمؤهلات",
      us: "متخصص بدراسات عليا",
      competitors: "متفاوت",
    },
    {
      point: "الدقة والجودة",
      us: "معايير عالية جداً",
      competitors: "متوسطة",
    },
    {
      point: "السرية والأمان",
      us: "حفاظ تام",
      competitors: "متفاوت",
    },
    {
      point: "وقت الاستجابة",
      us: "سريع جداً",
      competitors: "متوسط",
    },
    {
      point: "الأسعار",
      us: "عادلة ومنافسة",
      competitors: "عالية أحياناً",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">لماذا تختارنا</h1>
            <p className="text-xl opacity-90">
              اكتشف الأسباب التي تجعلنا الخيار الأمثل للخدمات المحاسبية والضريبية
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ما يميزنا عن الآخرين
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ستة أسباب رئيسية تجعل عملاءنا يختارونا ويوصون بنا للآخرين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-accent mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            مقارنة مع الخدمات الأخرى
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-right py-4 px-4 font-bold">المعيار</th>
                  <th className="text-center py-4 px-4 font-bold text-accent">نحن</th>
                  <th className="text-center py-4 px-4 font-bold text-muted-foreground">
                    الآخرون
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-background transition-colors"
                  >
                    <td className="py-4 px-4 font-medium">{item.point}</td>
                    <td className="text-center py-4 px-4 text-accent font-semibold">
                      {item.us}
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">
                      {item.competitors}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Client Testimonials Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            ماذا يقول عملاؤنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonialHighlights.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="text-4xl text-accent mb-4">💬</div>
                <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-accent">{testimonial.author}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-block text-accent font-bold hover:underline"
            >
              اطلع على المزيد من التقييمات
            </Link>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            التزامنا تجاهك
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  الوفاء بالمواعيد دائماً
                </h3>
                <p className="text-muted-foreground">
                  نلتزم بتسليم جميع الأعمال في الموعد المحدد بدون تأخير
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">جودة عالية دائماً</h3>
                <p className="text-muted-foreground">
                  معايير عالية جداً في كل عمل ننجزه دون استثناء
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">متابعة شاملة</h3>
                <p className="text-muted-foreground">
                  متابعة كاملة لجميع عملك من البداية حتى النهاية
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">استجابة سريعة دائماً</h3>
                <p className="text-muted-foreground">
                  الرد السريع على كل استفسار وحل كل مشكلة في الحال
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">نصيحة أمينة دائماً</h3>
                <p className="text-muted-foreground">
                  تقديم النصيحة الأمينة والصادقة حتى لو لم تدر لك أرباحاً إضافية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            استعد للتجربة بنفسك
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن واكتشف الفرق الذي يمكن أن نصنعه في إدارتك المالية
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
              أرسل استفسار
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
