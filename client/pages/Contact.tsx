import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف / واتساب",
      info: "01099582760",
      href: "https://wa.me/201099582760",
      type: "link",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      info: "amlbdallhmghwary16@gmail.com",
      href: "mailto:amlbdallhmghwary16@gmail.com",
      type: "link",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "العنوان",
      info: "البحيرة – أبو المطامير",
      href: "#",
      type: "text",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات العمل",
      info: "9 صباحاً - 6 مساءً (السبت - الخميس)",
      href: "#",
      type: "text",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-xl opacity-90">
              نحن هنا للإجابة على جميع استفساراتك والمساعدة في احتياجاتك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="text-accent mb-4">{info.icon}</div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                {info.type === "link" ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-accent hover:underline"
                  >
                    {info.info}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.info}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-800">
                  ✓ تم استلام رسالتك بنجاح! سنرد عليك في أقرب وقت.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    الموضوع
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="استشارة">استشارة عامة</option>
                    <option value="ضريبي">استشارة ضريبية</option>
                    <option value="محاسبي">استشارة محاسبية</option>
                    <option value="تأسيس">تأسيس شركة</option>
                    <option value="مراجعة">مراجعة مالية</option>
                    <option value="اخرى">موضوع آخر</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                    placeholder="اكتب رسالتك هنا"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">معلومات إضافية</h2>
              
              <div className="bg-secondary bg-opacity-50 rounded-lg p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">سرعة الاستجابة</h3>
                  <p className="text-muted-foreground">
                    نحرص على الرد على جميع الاستفسارات في أقرب وقت ممكن، عادة في نفس اليوم.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">طرق الاتصال</h3>
                  <p className="text-muted-foreground mb-4">
                    يمكنك التواصل معنا من خلال:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• الهاتف / واتساب: 01099582760</li>
                    <li>• البريد الإلكتروني: amlbdallhmghwary16@gmail.com</li>
                    <li>• هذا النموذج</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">الاستشارة الأولى</h3>
                  <p className="text-muted-foreground">
                    الاستشارة الأولى مجانية! تحدث معنا عن احتياجاتك وسنساعدك في إيجاد الحل الأنسب.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">سرية البيانات</h3>
                  <p className="text-muted-foreground">
                    جميع المعلومات التي تشاركها معنا محمية وسرية بالكامل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Visual Section */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            تواصل معنا الآن
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="https://wa.me/201099582760"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground p-8 rounded-lg text-center hover:opacity-90 transition-opacity"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">واتساب / الهاتف</h3>
              <p className="text-lg">01099582760</p>
              <p className="text-sm mt-2 opacity-75">متاح الآن</p>
            </a>

            <a
              href="mailto:amlbdallhmghwary16@gmail.com"
              className="bg-card border-2 border-accent p-8 rounded-lg text-center hover:bg-secondary transition-colors"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-2">البريد الإلكتروني</h3>
              <p className="text-lg">amlbdallhmghwary16@gmail.com</p>
              <p className="text-sm mt-2 text-muted-foreground">سنرد في أقرب وقت</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
