import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  DollarSign,
  FileText,
  Building2,
  BarChart3,
  CheckCircle2,
  Briefcase,
  CreditCard,
  Users,
  TrendingUp,
  Lock,
  Phone,
  MapPin,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "الاستشارات الضريبية والحسابية المتكاملة",
      description:
        "تقديم استشارات شاملة حول جميع الأمور الضريبية والحسابية بما يتوافق مع القوانين الحالية",
      features: [
        "التخطيط الضريبي الفعال",
        "تحسين الأداء المالي",
        "دراسات الجدوى المالية",
        "استشارات للشركات والأفراد",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "الضرائب العامة",
      description:
        "متابعة كاملة لجميع الالتزامات الضريبية والإقرارات الضريبية السنوية والدورية",
      features: [
        "حساب الضرائب المستحقة",
        "إعداد الإقرارات الضريبية",
        "متابعة التعديلات الضريبية",
        "الدفاع عن حقوقك أمام الجهات الضريبية",
      ],
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "السجل التجاري",
      description:
        "تسهيل إجراءات تسجيل وتجديد السجل التجاري مع المتابعة الكاملة للمتطلبات",
      features: [
        "تسجيل سجل تجاري جديد",
        "تجديد السجلات التجارية",
        "تعديل بيانات السجل",
        "الاستشارات المتعلقة بالتسجيل",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "التأمينات الاجتماعية",
      description:
        "متابعة شاملة لالتزامات التأمينات الاجتماعية والرعاية الطبية للعاملين",
      features: [
        "تسجيل العاملين بالتأمين",
        "حساب الاشتراكات",
        "تقديم الإقرارات الدورية",
        "معالجة المستحقات والمزايا",
      ],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "استخراج رخص المحلات",
      description:
        "تيسير إجراءات استخراج وتجديد رخص المحلات والأنشطة التجارية المختلفة",
      features: [
        "استخراج رخصة تجارية جديدة",
        "تجديد الرخص",
        "تعديل بيانات الرخصة",
        "المتابعة مع الجهات الحكومية",
      ],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "خدمات المرور",
      description:
        "تقديم خدمات استشارية وتطبيقية في كل ما يتعلق بخدمات المرور والمركبات",
      features: [
        "استشارات قانونية في المخالفات",
        "متابعة التراخيص",
        "التعامل مع الجهات الحكومية",
        "حل المشاكل والنزاعات",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "إعداد الميزانيات",
      description:
        "إعداد ميزانيات سنوية وتنبؤات مالية دقيقة لضمان التخطيط المالي السليم",
      features: [
        "إعداد ميزانيات سنوية",
        "تحليل التنبؤات المالية",
        "مراقبة الأداء المالي",
        "اقتراح التحسينات والحلول",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "المراجعة المالية",
      description:
        "فحص دقيق للحسابات والدفاتر المحاسبية وإصدار تقارير مراجعة موثوقة",
      features: [
        "تدقيق الحسابات المالية",
        "فحص الوثائق والسجلات",
        "إصدار تقارير المراجعة",
        "تقديم التوصيات والملاحظات",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "تأسيس الشركات",
      description:
        "مساعدة كاملة في تأسيس الشركات والمنشآت التجارية من البداية حتى الانطلاق",
      features: [
        "دراسة الجدوى الأولية",
        "معالجة الإجراءات القانونية",
        "التسجيل لدى الجهات المختصة",
        "تنظيم الأمور المحاسبية الأولية",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "مسك الدفاتر المحاسبية",
      description:
        "تنظيم ومسك دفاتر محاسبية صحيحة وفقاً للقوانين المحاسبية المعتمدة",
      features: [
        "تسجيل الحركات المالية",
        "إعداد القيود المحاسبية",
        "تنظيم الملفات المالية",
        "إعداد الكشوفات الدورية",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "الإقرارات الضريبية",
      description:
        "إعداد وتقديم الإقرارات الضريبية بدقة عالية مع ضمان الامتثال للقوانين",
      features: [
        "إعداد الإقرارات السنوية",
        "حساب الضرائب المستحقة",
        "تقديم الإقرارات في الموعد",
        "متابعة الاستجابات الحكومية",
      ],
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "الاستشارات المالية للشركات والأفراد",
      description:
        "تقديم استشارات متخصصة تساعد في اتخاذ القرارات المالية الصحيحة",
      features: [
        "تقييم الأداء المالي",
        "استشارات الاستثمار",
        "تخطيط مالي استراتيجي",
        "حلول مالية مخصصة",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الخدمات</h1>
            <p className="text-xl opacity-90">
              مجموعة شاملة من الخدمات المحاسبية والضريبية المتخصصة لتلبية جميع احتياجاتك
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-secondary bg-opacity-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              هل تحتاج لخدمة غير موجودة في القائمة؟
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              نحن مرنون ومستعدون لتقديم خدمات مخصصة تناسب احتياجاتك الخاصة
            </p>
            <a
              href="https://wa.me/201099582760"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              تواصل معنا للاستفسار
            </a>
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            لماذا تختار خدماتنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="text-accent flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">احترافية عالية</h3>
                <p className="text-muted-foreground">
                  فريق متخصص وذو خبرة عميقة في كل جانب من جوانب العمل المحاسبي
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">دقة وموثوقية</h3>
                <p className="text-muted-foreground">
                  معايير عالية من الدقة والالتزام بجميع القوانين والتشريعات
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">سرية وأمان</h3>
                <p className="text-muted-foreground">
                  الحفاظ التام على سرية بيانات وملفات عملائنا بدون استثناء
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">أسعار عادلة</h3>
                <p className="text-muted-foreground">
                  تقديم خدمات بجودة عالية بأسعار منافسة وشفافة
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
            جاهز لاستخدام خدماتنا؟
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية حول احتياجاتك
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
              أرسل رسالة
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
