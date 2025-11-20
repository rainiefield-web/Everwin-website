
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { Menu, X, Globe, Mail, MapPin, Scroll, ExternalLink } from 'lucide-react';

// --- CONTENT DICTIONARY ---
const content = {
  en: {
    nav: {
      about: "Overview",
      factories: "Factories",
      timeline: "Timeline",
      contact: "Contact",
    },
    hero: {
      group: "Part of Wangkang Group",
      title: "Everwin Industrial Park",
      subtitle: "A strategic manufacturing hub in Dammam 3rd Industrial City. Empowering local content, driving global exports.",
      cta: "Explore Facilities"
    },
    about: {
      title: "Strategic Investment",
      text1: "Everwin Industrial Park is a flagship project under the Wangkang Group ecosystem. Located in Dammam 3rd Industrial City, it spans nearly 2 million square meters, representing a direct contribution to Saudi Vision 2030 by localizing advanced manufacturing and boosting non-oil exports.",
      text2: "With a total investment exceeding 5 Billion SAR, the park integrates 7 specialized factories—including aluminum extrusion, steel structures, and glass processing—alongside modern accommodation and administrative facilities. We project over 30% of our output will be exported globally."
    },
    factories: {
      label: "The Master Plan",
      title: "Integrated Manufacturing Ecosystem",
      desc: "Our comprehensive layout includes specialized zones for heavy and light industries, fully interconnected for efficiency."
    },
    timeline: {
      title: "Construction Roadmap",
      desc: "We are moving swiftly from groundbreaking to full operational capacity."
    },
    contact: {
      title: "Get in Touch",
      desc: "For business inquiries and partnership opportunities."
    },
    footer: {
      company: "Everwin Property Company",
      address: "Dammam 3rd Industrial City, Saudi Arabia",
      cr: "CR: 2050164356241",
    }
  },
  ar: {
    nav: {
      about: "نبذة عامة",
      factories: "المصانع",
      timeline: "الجدول الزمني",
      contact: "تواصل معنا",
    },
    hero: {
      group: "إحدى شركات مجموعة وان كانغ",
      title: "مجمع إيفروين الصناعي",
      subtitle: "مركز صناعي استراتيجي في المدينة الصناعية الثالثة بالدمام. ندعم المحتوى المحلي ونقود الصادرات العالمية.",
      cta: "اكتشف المرافق"
    },
    about: {
      title: "استثمار استراتيجي",
      text1: "يعد مجمع إيفروين الصناعي مشروعاً رائداً تحت مظلة مجموعة وان كانغ. يقع المشروع في المدينة الصناعية الثالثة بالدمام على مساحة تقارب 2 مليون متر مربع، ويمثل مساهمة مباشرة في رؤية المملكة 2030 من خلال توطين الصناعات المتقدمة وتعزيز الصادرات غير النفطية.",
      text2: "بإجمالي استثمارات تتجاوز 5 مليارات ريال سعودي، يضم المجمع 7 مصانع متخصصة - تشمل سحب الألمنيوم والهياكل الفولاذية ومعالجة الزجاج - بالإضافة إلى مرافق سكنية وإدارية حديثة. نتوقع تصدير أكثر من 30% من إنتاجنا إلى الأسواق العالمية."
    },
    factories: {
      label: "المخطط العام",
      title: "نظام بيئي صناعي متكامل",
      desc: "يشمل مخططنا الشامل مناطق متخصصة للصناعات الثقيلة والخفيفة، مترابطة بالكامل لتحقيق الكفاءة."
    },
    timeline: {
      title: "خارطة الطريق",
      desc: "نتحرك بخطى ثابتة من وضع حجر الأساس إلى التشغيل الكامل."
    },
    contact: {
      title: "تواصل معنا",
      desc: "للاستفسارات التجارية وفرص الشراكة."
    },
    footer: {
      company: "شركة الازدهار الأبدي للعقارات",
      address: "المدينة الصناعية الثالثة، الدمام، المملكة العربية السعودية",
      cr: "سجل تجاري: 2050164356241",
    }
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = content[lang];
  const isRTL = lang === 'ar';

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-[#F8FAFC] text-slate-800 ${isRTL ? 'rtl font-arabic' : 'ltr font-sans'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
            <img 
                src="https://i.postimg.cc/C5Xz8WZt/2.png" 
                alt="Everwin Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
                <span className={`text-2xl font-bold leading-none font-serif tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                    EVERWIN
                </span>
                <span className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase mt-1 ${scrolled ? 'text-everwin-teal' : 'text-everwin-sand'}`}>
                    INDUSTRIAL PARK
                </span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-slate-600' : 'text-white drop-shadow-md'}`}>
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-everwin-sand transition-colors cursor-pointer uppercase">{t.nav.about}</a>
            <a href="#factories" onClick={scrollToSection('factories')} className="hover:text-everwin-sand transition-colors cursor-pointer uppercase">{t.nav.factories}</a>
            <a href="#timeline" onClick={scrollToSection('timeline')} className="hover:text-everwin-sand transition-colors cursor-pointer uppercase">{t.nav.timeline}</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-everwin-sand transition-colors cursor-pointer uppercase">{t.nav.contact}</a>
            <button 
                onClick={toggleLang}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-xs font-bold ${scrolled ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}
            >
                <Globe size={14} />
                {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-bold animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')}>{t.nav.about}</a>
            <a href="#factories" onClick={scrollToSection('factories')}>{t.nav.factories}</a>
            <a href="#timeline" onClick={scrollToSection('timeline')}>{t.nav.timeline}</a>
            <a href="#contact" onClick={scrollToSection('contact')}>{t.nav.contact}</a>
            <button onClick={toggleLang} className="px-6 py-2 bg-slate-100 rounded-full flex items-center gap-2">
                <Globe size={18} /> {lang === 'en' ? 'العربية' : 'English'}
            </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1621905251189-fc015302338d?q=80&w=2070&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover"
             />
             {/* Gradient Overlay for text readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 mt-20">
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
             <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/20 text-white text-xs tracking-wider uppercase font-bold rounded-full bg-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-everwin-sand animate-pulse"></span>
              {t.hero.group}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              {lang === 'en' ? 'Everwin' : 'إيفروين'} <br/>
              <span className="text-everwin-sand">{lang === 'en' ? 'Industrial Park' : 'المجمع الصناعي'}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-xl drop-shadow-md">
              {t.hero.subtitle}
            </p>
            
            <div className={`flex gap-4 ${isRTL ? 'lg:justify-start justify-center' : 'lg:justify-start justify-center'}`}>
               <a href="#factories" onClick={scrollToSection('factories')} className="px-8 py-4 bg-everwin-teal text-white rounded-lg font-bold shadow-lg hover:bg-white hover:text-everwin-teal transition-all hover:scale-105">
                  {t.hero.cta}
               </a>
               <a href="#contact" onClick={scrollToSection('contact')} className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold shadow-lg hover:bg-white hover:text-slate-900 transition-all">
                  {t.nav.contact}
               </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Stats Banner */}
        <section className="py-12 bg-white border-b border-slate-100 relative z-20 -mt-20 mx-4 rounded-xl shadow-xl lg:mx-20">
            <div className="container mx-auto px-6">
                <PerformanceMetricDiagram lang={lang} />
            </div>
        </section>

        {/* About / Overview */}
        <section id="about" className="py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                     {/* Interactive Map Preview */}
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57275.64788674543!2d49.9158!3d26.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5e6651a4981%3A0x7616576271825040!2sDammam%203rd%20Industrial%20City!5e0!3m2!1sen!2ssa!4v1709640000000!5m2!1sen!2ssa"
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale group-hover:grayscale-0 transition-all duration-700"
                     ></iframe>
                     <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 text-center">
                        <a href="https://maps.app.goo.gl/NZ6FPwnFx5qjTT3d9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-everwin-teal font-bold hover:underline">
                            <MapPin size={16} />
                            {lang === 'en' ? 'Open Location Map' : 'فتح الخريطة'}
                        </a>
                     </div>
                </div>
            </div>
            <div className="md:col-span-7">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-everwin-teal uppercase">{t.nav.about}</div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">{t.about.title}</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Factories Grid */}
        <section id="factories" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <div className="inline-block mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">{t.factories.label}</div>
                     <h2 className="text-4xl font-bold mb-4 text-slate-900">{t.factories.title}</h2>
                     <p className="text-slate-500 max-w-2xl mx-auto">{t.factories.desc}</p>
                </div>
                <SurfaceCodeDiagram lang={lang} />
            </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-24 bg-slate-900 text-white relative overflow-hidden">
             {/* Abstract Background */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-everwin-teal blur-[150px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-everwin-sand blur-[150px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{t.timeline.title}</h2>
                    <p className="text-slate-400">{t.timeline.desc}</p>
                </div>
                <TransformerDecoderDiagram lang={lang} />
            </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-white text-slate-600 py-16 border-t border-slate-200">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand Column */}
                <div>
                    <div className="mb-6">
                        {/* Text-based logo in footer */}
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold leading-none text-slate-900 tracking-tight font-serif">EVERWIN</span>
                            <span className="text-xs font-bold tracking-[0.2em] text-everwin-teal uppercase mt-1">Industrial Park</span>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-6 text-slate-500">
                    {t.footer.company}<br/>
                    {lang === 'en' ? 'Part of Wangkang Group' : 'إحدى شركات مجموعة وان كانغ'}
                    </p>
                    <div className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} Everwin Property Company. All rights reserved.
                    </div>
                </div>

                {/* Contact Column */}
                <div>
                     <h3 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">{t.contact.title}</h3>
                     <div className="flex flex-col gap-4 text-sm">
                        <a href="https://maps.app.goo.gl/NZ6FPwnFx5qjTT3d9" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-everwin-teal transition-colors">
                            <MapPin size={18} className="text-everwin-teal mt-0.5"/>
                            <span>{t.footer.address}</span>
                        </a>
                        <div className="flex items-center gap-3">
                            <Scroll size={18} className="text-everwin-teal"/>
                            <span>{t.footer.cr}</span>
                        </div>
                         <a href="mailto:Business@everwinpark.com" className="flex items-center gap-3 hover:text-everwin-teal transition-colors">
                            <Mail size={18} className="text-everwin-teal"/>
                            <span>Business@everwinpark.com</span>
                        </a>
                    </div>
                </div>
                
                {/* Map Column */}
                <div>
                    <h3 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">{lang === 'en' ? 'Location' : 'الموقع'}</h3>
                    <div className="rounded-lg overflow-hidden border border-slate-200 h-48 relative group">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57275.64788674543!2d49.9158!3d26.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5e6651a4981%3A0x7616576271825040!2sDammam%203rd%20Industrial%20City!5e0!3m2!1sen!2ssa!4v1709640000000!5m2!1sen!2ssa"
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                         ></iframe>
                         <a 
                            href="https://maps.app.goo.gl/NZ6FPwnFx5qjTT3d9" 
                            target="_blank" 
                            rel="noreferrer"
                            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                         >
                             <div className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 text-slate-900">
                                <ExternalLink size={12} /> {lang === 'en' ? 'Open Maps' : 'فتح الخرائط'}
                             </div>
                         </a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
