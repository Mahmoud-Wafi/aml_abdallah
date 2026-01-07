import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, BookOpen, Briefcase } from "lucide-react";

export default function About() {
  const education = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      degree: "بكالوريوس تجارة",
      institution: "كلية التجارة - جامعة دمنهور",
      year: "2021",
      details: "تخرج بتقدير جيد جداً مع مرتبة شرف",
    },
    {
      icon: <Award className="w-6 h-6" />,
      degree: "دراسات عليا في المحاسبة المالية والمراجعة",
      institution: "جامعة الإسكندرية",
      year: "2023",
      details: "متخصص في المحاسبة المالية والمراجعة والاستشارات الضريبية",
    },
  ];

  const skills = [
    "الاستشارات الضريبية المتكاملة",
    "إعداد القوائم المالية",
    "مسك الدفاتر المحاسبية",
    "المراجعة المالية والتدقيق",
    "تأسيس الشركات والمنشآت",
    "الإقرارات الضريبية",
    "استخراج رخص المحلات",
    "خدمات التأمينات الاجتماعية",
    "خدمات السجل التجاري",
    "خدمات المرور",
    "الاستشارات المالية للشركات والأفراد",
    "إعداد الميزانيات والتنبؤات المالية",
  ];

  const achievements = [
    {
      number: "100+",
      label: "عميل راضٍ",
      description: "عملنا مع أكثر من 100 عميل من الأفراد والشركات",
    },
    {
      number: "15+",
      label: "سنة خبرة",
      description: "خبرة عميقة في المجال المحاسبي والضريبي",
    },
    {
      number: "500+",
      label: "ملف معالج",
      description: "معالجة أكثر من 500 ملف وإقرار ضريبي",
    },
    {
      number: "24/7",
      label: "دعم دائم",
      description: "توفر الدعم والاستشارة على مدار الساعة",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl opacity-90">
              تعرف على أمل عبدالله المغواري - محاسب قانوني متخصص في تقديم
              الاستشارات المالية والضريبية
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Profile Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-accent to-yellow-400 rounded-2xl p-1 inline-block">
                <div className="bg-background rounded-xl p-8 text-center">
                  <div className="text-7xl font-bold text-accent mb-2">أ</div>
                  <h2 className="text-2xl font-bold">أمل عبدالله المغواري</h2>
                  <p className="text-lg text-accent font-semibold mt-2">
                    محاسب قانوني
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">مرحباً بك</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                أنا أمل عبدالله المغواري، محاسب قانوني متخصص بخبرة عميقة في مجال
                المحاسبة والضرائب. أعمل على تقديم خدمات محاسبية وضريبية متكاملة
                بأعلى مستويات الاحترافية والدقة.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                منذ حصولي على درجة البكالوريوس في التجارة من جامعة دمنهور وحتى
                اليوم، عملت على تطوير خبراتي من خلال الدراسات العليا في المحاسبة
                المالية والمراجعة، مما مكنني من تقديم حلول فعالة وموثوقة
                لعملائي.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                أفخر بالعمل مع مئات العملاء من الأفراد والشركات، وتقديم خدمات
                تتسم بالدقة والثقة والسرية التامة.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-secondary bg-opacity-50 rounded-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{achievement.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            التعليم والشهادات
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 flex gap-6"
              >
                <div className="text-accent flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                  <p className="text-accent font-semibold mb-1">
                    {item.institution}
                  </p>
                  <p className="text-muted-foreground mb-3">{item.year}</p>
                  <p className="text-foreground">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            المجالات المتخصصة
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary bg-opacity-50 rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Approach */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            منهجي المهني
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">الاحترافية</h3>
              <p className="text-muted-foreground">
                التعامل الاحترافي مع جميع الأمور المحاسبية بدقة عالية وكفاءة
                متميزة
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">الموثوقية</h3>
              <p className="text-muted-foreground">
                الحفاظ الكامل على السرية والخصوصية مع ضمان أعلى مستويات الثقة
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">التطور المستمر</h3>
              <p className="text-muted-foreground">
                متابعة أحدث التطورات والقوانين الضريبية والمحاسبية بشكل مستمر
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
