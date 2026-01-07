import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "أحمد محمود",
      role: "صاحب مشروع صغير",
      text: "خدمة متميزة وعمل احترافي. أمل متخصص حقيقي ويفهم احتياجات الأعمال الصغيرة بشكل عميق.",
      rating: 5,
    },
    {
      name: "فاطمة عبدالعزيز",
      role: "مديرة مالية - شركة تجارية",
      text: "دقة عالية جداً وسرعة في الإنجاز. استطعت الاعتماد على أمل بشكل كامل في إدارة شؤوننا المالية.",
      rating: 5,
    },
    {
      name: "محمد السيد",
      role: "رائد أعمال",
      text: "ساعدني أمل في تأسيس شركتي من الألف إلى الياء. خدمة ممتازة وأسعار عادلة جداً.",
      rating: 5,
    },
    {
      name: "سارة أحمد",
      role: "مالكة محل تجاري",
      text: "متابعة دقيقة لكل شيء. الحمد لله على وجود متخصص مثل أمل يمكن الاعتماد عليه.",
      rating: 5,
    },
    {
      name: "علي خليل",
      role: "مدير شركة استيراد وتصدير",
      text: "تعامل احترافي مع الاستشارات الضريبية المعقدة. أمل يستحق كل توصية وثقة.",
      rating: 5,
    },
    {
      name: "نهى محمد",
      role: "محاسبة - شركة كبيرة",
      text: "خبرة عميقة والتزام كامل. العمل معه كان تجربة تعليمية قيمة أيضاً.",
      rating: 5,
    },
    {
      name: "خالد إبراهيم",
      role: "صاحب مصنع صغير",
      text: "دقة في التفاصيل وسرعة في الإنجاز. أمل ساعدني في حل مشاكل ضريبية كانت معقدة.",
      rating: 5,
    },
    {
      name: "مريم علي",
      role: "صاحبة استديو تصوير",
      text: "عملية استخراج الرخص والتصاريح كانت سلسة وسهلة معه. شكراً على الاحترافية.",
      rating: 5,
    },
    {
      name: "ياسر محمود",
      role: "مستشار أعمال",
      text: "أوصي به للجميع. أمل متخصص حقيقي وينصحك بما هو صحيح حتى لو لم يدر له أرباحاً إضافية.",
      rating: 5,
    },
    {
      name: "ليلى محمد",
      role: "مدير موارد بشرية",
      text: "معالجة احترافية لشؤون التأمينات والرواتب. فريق متخصص وموثوق جداً.",
      rating: 5,
    },
    {
      name: "طارق السيد",
      role: "صاحب مكتبة استيراد",
      text: "أفضل من تعاملت معه في الشؤون الضريبية والمحاسبية. أنصح به بشدة.",
      rating: 5,
    },
    {
      name: "إسراء هاني",
      role: "صاحبة كافيه",
      text: "سهل الإجراءات وقلل التعقيدات. أمل متفهم ويساعدك بحقيقة في بناء عملك.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "100+", label: "عميل راضٍ" },
    { number: "5", label: "نجوم المتوسط" },
    { number: "500+", label: "مشروع معاون" },
    { number: "98%", label: "نسبة الرضا" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              آراء العملاء
            </h1>
            <p className="text-xl opacity-90">
              اطلع على تقييمات عملائنا الراضين والكلمات الطيبة التي يشاركونها
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل تريد أن تكون التالي؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              انضم إلى مئات العملاء الراضين الذين اختاروا أمل عبدالله المغواري
              لخدماتهم المحاسبية والضريبية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/201099582760"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity"
              >
                اتصل الآن
              </a>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold text-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                أرسل استفسار
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
