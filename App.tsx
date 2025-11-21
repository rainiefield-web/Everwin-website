
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { Menu, X, Globe, Mail, MapPin, Scroll, ExternalLink, ChevronRight } from 'lucide-react';

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
      cta: "Explore Facilities",
      locationLabel: "Strategic Partner",
      locationCity: "Dammam 3rd Industrial City",
      locationDesc: "Operated by MODON. Fully integrated infrastructure with direct access to logistic networks."
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
      cr: "CR: 2050213703",
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
      cta: "اكتشف المرافق",
      locationLabel: "شريك استراتيجي",
      locationCity: "المدينة الصناعية الثالثة بالدمام",
      locationDesc: "تحت إشراف مدن (MODON). بنية تحتية متكاملة مع وصول مباشر لشبكات الخدمات اللوجستية."
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
      cr: "سجل تجاري: 2050213703",
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2 border-b border-slate-100' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
            <div className="relative">
                <img 
                    src="https://i.postimg.cc/C5Xz8WZt/2.png" 
                    alt="Everwin Logo" 
                    className="h-10 w-auto transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                />
                {/* Glow behind logo */}
                <div className="absolute inset-0 bg-everwin-teal blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
            </div>
            <div className="flex flex-col">
                <span className={`text-2xl font-bold leading-none font-serif tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                    EVERWIN
                </span>
                <span className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-300 ${scrolled ? 'text-everwin-teal' : 'text-everwin-sand'}`}>
                    INDUSTRIAL PARK
                </span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-slate-600' : 'text-white drop-shadow-md'}`}>
            <a href="#about" onClick={scrollToSection('about')} className="relative hover:text-everwin-teal transition-colors cursor-pointer uppercase py-1 group">
                {t.nav.about}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-everwin-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#factories" onClick={scrollToSection('factories')} className="relative hover:text-everwin-teal transition-colors cursor-pointer uppercase py-1 group">
                {t.nav.factories}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-everwin-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#timeline" onClick={scrollToSection('timeline')} className="relative hover:text-everwin-teal transition-colors cursor-pointer uppercase py-1 group">
                {t.nav.timeline}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-everwin-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" onClick={scrollToSection('contact')} className="relative hover:text-everwin-teal transition-colors cursor-pointer uppercase py-1 group">
                {t.nav.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-everwin-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button 
                onClick={toggleLang}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-xs font-bold border ${scrolled ? 'bg-slate-100 text-slate-900 border-slate-200 hover:bg-slate-200 hover:shadow-inner' : 'bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm hover:scale-105'}`}
            >
                <Globe size={14} />
                {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/20'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-bold animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-everwin-teal transition-colors transform hover:scale-110">{t.nav.about}</a>
            <a href="#factories" onClick={scrollToSection('factories')} className="hover:text-everwin-teal transition-colors transform hover:scale-110">{t.nav.factories}</a>
            <a href="#timeline" onClick={scrollToSection('timeline')} className="hover:text-everwin-teal transition-colors transform hover:scale-110">{t.nav.timeline}</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-everwin-teal transition-colors transform hover:scale-110">{t.nav.contact}</a>
            <button onClick={toggleLang} className="px-6 py-3 bg-slate-100 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
                <Globe size={18} /> {lang === 'en' ? 'العربية' : 'English'}
            </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 pb-40 lg:pb-60 pt-32 lg:pt-40">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Advanced Robotic Manufacturing" 
                className="w-full h-full object-cover animate-slow-zoom object-right md:object-center"
             />
             {/* Multiple Overlay Layers for Text Readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-40"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 mt-0">
          {/* Grid Layout to balance Left Side with Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Modon Info / Strategic Partner - Fills the empty space */}
              <div className={`lg:col-span-3 order-2 lg:order-1 flex flex-col justify-end animate-fade-in-left`}>
                   <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group/modon">
                       <div className="flex items-center gap-2 mb-4">
                            <MapPin size={14} className="text-everwin-teal" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover/modon:text-white transition-colors">
                                {t.hero.locationLabel}
                            </span>
                       </div>
                       
                       {/* Modon Logo - Wrapped in white card for clean display */}
                       <a 
                            href="https://modon.gov.sa/en/Cities/IndustrialCities/Pages/IndustrialCity.aspx?CityId=f00da909-20dc-44ed-94f9-d7f645c7a6c0" 
                            target="_blank"
                            rel="noreferrer"
                            className="block mb-5 transform group-hover/modon:scale-105 transition-transform duration-300 bg-white rounded-lg p-4 w-fit shadow-lg"
                        >
                            <img 
                                src="https://modon.gov.sa/Style%20Library/Images/ModonLogo.jpg" 
                                alt="MODON Logo" 
                                className="h-12 w-auto object-contain"
                            />
                        </a>

                        <h3 className="text-white font-bold text-lg leading-tight mb-2">
                             {t.hero.locationCity}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                             {t.hero.locationDesc}
                        </p>
                        <a 
                             href="https://modon.gov.sa/en/Cities/IndustrialCities/Pages/IndustrialCity.aspx?CityId=f00da909-20dc-44ed-94f9-d7f645c7a6c0" 
                             target="_blank" 
                             rel="noreferrer"
                             className="text-everwin-teal text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:underline"
                        >
                             {lang === 'en' ? 'Visit Official Site' : 'زيارة الموقع الرسمي'} <ExternalLink size={12} />
                        </a>
                   </div>
              </div>

              {/* Main Content Column */}
              <div className={`lg:col-span-9 order-1 lg:order-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/20 text-white text-xs tracking-wider uppercase font-bold rounded-full bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-everwin-sand animate-pulse shadow-[0_0_8px_#C5A059]"></span>
                    {t.hero.group}
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-normal mb-6 text-white drop-shadow-lg">
                    {lang === 'en' ? 'Everwin' : 'إيفروين'} <br/>
                    <span className="text-[#E5C575] drop-shadow-md">{lang === 'en' ? 'Industrial Park' : 'المجمع الصناعي'}</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-100 leading-relaxed mb-10 max-w-2xl drop-shadow-md font-medium">
                    {t.hero.subtitle}
                </p>
                
                <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'justify-start' : 'justify-start'}`}>
                    <a href="#factories" onClick={scrollToSection('factories')} className="group relative px-8 py-4 bg-everwin-teal text-white rounded-lg font-bold shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-everwin-teal/40 text-center sm:text-left">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                        <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                            {t.hero.cta} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    
                    <a href="#contact" onClick={scrollToSection('contact')} className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-bold shadow-lg hover:bg-white hover:text-slate-900 hover:border-white transition-all backdrop-blur-sm text-center sm:text-left">
                        {t.nav.contact}
                    </a>
                </div>
              </div>
          </div>
        </div>
      </header>

      <main>
        {/* Stats Banner */}
        <section className="py-12 relative z-20 -mt-16 lg:-mt-24 mx-4 lg:mx-20 animate-slide-up">
            <div className="container mx-auto">
                {/* Wrapped in glass morphism container */}
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-6 lg:p-8">
                    <PerformanceMetricDiagram lang={lang} />
                </div>
            </div>
        </section>

        {/* About / Overview */}
        <section id="about" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -skew-x-12 opacity-50 pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            <div className="md:col-span-5 order-2 md:order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                     {/* Map Container - Tech Border Look */}
                     <div className="absolute inset-0 z-10 border-2 border-slate-900/10 pointer-events-none rounded-xl group-hover:border-everwin-teal/50 transition-colors duration-500"></div>
                     
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57275.64788674543!2d49.9158!3d26.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5e6651a4981%3A0x7616576271825040!2sDammam%203rd%20Industrial%20City!5e0!3m2!1sen!2ssa!4v1709640000000!5m2!1sen!2ssa"
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="transition-all duration-700 filter group-hover:brightness-110"
                     ></iframe>
                     
                     <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 text-center border-t border-slate-200 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <a href="https://maps.app.goo.gl/NZ6FPwnFx5qjTT3d9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-everwin-teal font-bold hover:underline">
                            <MapPin size={16} className="animate-bounce" />
                            {lang === 'en' ? 'Open Location Map' : 'فتح الخريطة'}
                        </a>
                     </div>
                </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-everwin-teal"></div>
                  <div className="text-xs font-bold tracking-widest text-everwin-teal uppercase">{t.nav.about}</div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">{t.about.title}</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed border-l-4 border-slate-200 pl-6">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Factories Grid */}
        <section id="factories" className="py-24 bg-white relative">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                     <div className="inline-block mb-3 px-3 py-1 bg-slate-100 rounded text-xs font-bold tracking-widest text-slate-500 uppercase">{t.factories.label}</div>
                     <h2 className="text-4xl font-bold mb-4 text-slate-900">{t.factories.title}</h2>
                     <p className="text-slate-500 max-w-2xl mx-auto text-lg">{t.factories.desc}</p>
                </div>
                <SurfaceCodeDiagram lang={lang} />
            </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-24 bg-slate-900 text-white relative overflow-hidden">
             {/* Abstract Background */}
             <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full bg-everwin-teal blur-[120px] opacity-10 absolute top-[-100px] left-[-100px] animate-pulse-slow"></div>
                <div className="w-[500px] h-[500px] rounded-full bg-everwin-sand blur-[120px] opacity-10 absolute bottom-[-100px] right-[-100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{t.timeline.title}</h2>
                    <p className="text-slate-400 text-lg">{t.timeline.desc}</p>
                </div>
                <TransformerDecoderDiagram lang={lang} />
            </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-50 text-slate-600 py-16 border-t border-slate-200">
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
                     <h3 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                        <span className="w-1 h-4 bg-everwin-teal rounded-full"></span>
                        {t.contact.title}
                     </h3>
                     <div className="flex flex-col gap-4 text-sm">
                        <a href="https://maps.app.goo.gl/NZ6FPwnFx5qjTT3d9" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-everwin-teal transition-colors group">
                            <div className="p-2 bg-white rounded shadow-sm group-hover:shadow group-hover:bg-everwin-teal group-hover:text-white transition-all">
                                <MapPin size={18}/>
                            </div>
                            <span className="mt-1.5">{t.footer.address}</span>
                        </a>
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 bg-white rounded shadow-sm transition-all">
                                <Scroll size={18} className="text-slate-400 group-hover:text-everwin-teal"/>
                            </div>
                            <span>{t.footer.cr}</span>
                        </div>
                         <a href="mailto:Business@everwinpark.com" className="flex items-center gap-3 hover:text-everwin-teal transition-colors group">
                            <div className="p-2 bg-white rounded shadow-sm group-hover:shadow group-hover:bg-everwin-teal group-hover:text-white transition-all">
                                <Mail size={18}/>
                            </div>
                            <span>Business@everwinpark.com</span>
                        </a>
                    </div>
                </div>
                
                {/* Map Column */}
                <div>
                    <h3 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                        <span className="w-1 h-4 bg-everwin-teal rounded-full"></span>
                        {lang === 'en' ? 'Location' : 'الموقع'}
                    </h3>
                    <div className="rounded-lg overflow-hidden border border-slate-200 h-48 relative group shadow-sm hover:shadow-lg transition-shadow">
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
                         <a 
                            href="https://maps.app.goo.gl/NZ6FPwnFx5qjTT3d9" 
                            target="_blank" 
                            rel="noreferrer"
                            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                         >
                             <div className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 text-slate-900 transform translate-y-4 group-hover:translate-y-0 transition-all">
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
