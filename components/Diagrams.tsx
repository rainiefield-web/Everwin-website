
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Warehouse, Hammer, Scroll, Ship, TrendingUp, MapPin, ExternalLink, Zap, ArrowRight, Settings, Users, Banknote } from 'lucide-react';

interface ContentProps {
    lang: 'en' | 'ar';
}

// --- FACTORY GRID (Industrial Blueprint Style) ---
export const SurfaceCodeDiagram: React.FC<ContentProps> = ({ lang }) => {
  const facilities = [
    { 
      en: "Aluminum Profile", 
      ar: "مقاطع الألمنيوم", 
      icon: <Building2 />, 
      url: "https://www.nkaluminum.sa",
      id: "01"
    },
    { en: "Steel Structure", ar: "الهياكل الفولاذية", icon: <Hammer />, id: "02" },
    { en: "Glass Processing", ar: "معالجة الزجاج والأثاث", icon: <Warehouse />, id: "03" },
    { en: "Aluminum Windows", ar: "نوافذ وأبواب الألمنيوم", icon: <Settings />, id: "04" },
    { en: "Sanitary Ware", ar: "الأدوات الصحية", icon: <Home />, id: "05" },
    { en: "Ceramic Frit", ar: "فريت السيراميك", icon: <Zap />, id: "06" },
    { en: "Tissue Paper", ar: "الورق الصحي والغذائي", icon: <Scroll />, id: "07" },
    { en: "Accommodation", ar: "سكن الموظفين والمكاتب", icon: <MapPin />, id: "08" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {facilities.map((item, idx) => {
        const isLink = !!item.url;
        
        return (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
            >
                {/* Card Container */}
                <a 
                    href={item.url || "#"} 
                    target={item.url ? "_blank" : "_self"}
                    rel={item.url ? "noopener noreferrer" : ""}
                    className={`block h-full relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-500 ${isLink ? 'cursor-pointer' : 'cursor-default'}`}
                >
                    {/* Tech Grid Background (Reveals on Hover) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(#0D9488 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    </div>
                    
                    {/* Corner Brackets (Tech Feel) */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-l-2 border-t-2 border-everwin-teal transition-all duration-300 group-hover:w-6 group-hover:h-6 opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute top-0 right-0 w-0 h-0 border-r-2 border-t-2 border-everwin-teal transition-all duration-300 group-hover:w-6 group-hover:h-6 opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-l-2 border-b-2 border-everwin-teal transition-all duration-300 group-hover:w-6 group-hover:h-6 opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-r-2 border-b-2 border-everwin-teal transition-all duration-300 group-hover:w-6 group-hover:h-6 opacity-0 group-hover:opacity-100"></div>

                    {/* Content - Increased padding to p-8 to avoid overlapping with corner brackets */}
                    <div className="p-8 relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 ${isLink ? 'bg-everwin-teal text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-everwin-teal group-hover:text-white'}`}>
                                {React.cloneElement(item.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
                            </div>
                            <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none font-sans">
                                {item.id}
                            </span>
                        </div>
                        
                        <div className="mt-auto">
                             <h3 className={`text-lg font-bold text-slate-800 mb-2 group-hover:text-everwin-teal transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                                {lang === 'en' ? item.en : item.ar}
                            </h3>
                            
                            {/* Animated Line */}
                            <div className="h-1 w-12 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-everwin-teal transition-all duration-500 ease-out"></div>
                        </div>
                    </div>
                </a>
            </motion.div>
        );
      })}
    </div>
  );
};

// --- TIMELINE (Industrial Process Flow) ---
export const TransformerDecoderDiagram: React.FC<ContentProps> = ({ lang }) => {
    const isRTL = lang === 'ar';
    
    const phases = [
        { year: "Q4 2025", en: "Construction Started", ar: "بدء أعمال الإنشاء", status: "done" },
        { year: "2027", en: "Phase 1 Completion", ar: "اكتمال المرحلة الأولى", status: "active" },
        { year: "2030", en: "Phase 2 Completion", ar: "اكتمال المرحلة الثانية", status: "future" },
    ];

    return (
        <div className="relative py-16">
            {/* Connecting Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 hidden md:block opacity-30"></div>
            
            {/* Animated Pulse Line */}
            <motion.div 
                className="absolute top-1/2 left-0 h-0.5 bg-everwin-teal -translate-y-1/2 hidden md:block shadow-[0_0_10px_#0D9488]"
                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            
            {/* Increased md:gap-4 to md:gap-24 to prevent text cards from overlapping */}
            <div className={`flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 relative z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {phases.map((phase, idx) => (
                    <motion.div 
                        key={idx} 
                        className="relative group cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Hexagon / Circle Shape */}
                        <div className={`w-32 h-32 flex items-center justify-center relative transition-all duration-300 ${phase.status === 'done' ? 'opacity-100' : phase.status === 'active' ? 'opacity-100' : 'opacity-60'}`}>
                            
                            {/* Outer Ring Animation */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-600 animate-spin-slow opacity-20 group-hover:opacity-40"></div>
                            
                            {/* Main Circle */}
                            <div className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-sm border-4 shadow-2xl z-20 relative overflow-hidden
                                ${phase.status === 'active' 
                                    ? 'bg-everwin-teal border-white text-white shadow-[0_0_20px_rgba(13,148,136,0.4)]' 
                                    : 'bg-slate-800 border-slate-600 text-slate-300 group-hover:border-everwin-sand group-hover:text-white'
                                }`}>
                                
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative z-10">{phase.year}</span>
                            </div>

                            {/* Pulse Effect for Active Node */}
                            {phase.status === 'active' && (
                                <div className="absolute inset-0 rounded-full bg-everwin-teal/30 animate-ping"></div>
                            )}
                        </div>

                        {/* Label Card - Reduced width to md:w-52 to fit better */}
                        <motion.div 
                            className={`mt-6 text-center bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 md:w-52 md:absolute md:left-1/2 md:-translate-x-1/2`}
                        >
                            <h4 className={`font-bold text-white text-lg ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                                {isRTL ? phase.ar : phase.en}
                            </h4>
                            <div className="h-0.5 w-0 bg-everwin-sand mx-auto mt-2 group-hover:w-1/2 transition-all duration-300"></div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// --- STATS (Dark Industrial Control Panel) ---
export const PerformanceMetricDiagram: React.FC<ContentProps> = ({ lang }) => {
    const stats = [
        { val: "2M", unit: "m²", labelEn: "Total Area", labelAr: "المساحة الإجمالية", icon: <MapPin /> },
        { val: "5B+", unit: "SAR", labelEn: "Total Investment", labelAr: "إجمالي الاستثمار", icon: <TrendingUp /> },
        { val: "8B+", unit: "SAR", labelEn: "Annual Output", labelAr: "الإنتاج السنوي", icon: <Banknote /> },
        { val: "4000+", unit: "", labelEn: "Jobs Created", labelAr: "فرص وظيفية", icon: <Users /> },
        { val: "30%", unit: "+", labelEn: "Export Target", labelAr: "حجم التصدير المتوقع", icon: <Ship /> },
        { val: "7+", unit: "", labelEn: "Manufacturing Plants", labelAr: "مصانع إنتاجية", icon: <Building2 /> },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 my-8">
             {stats.map((stat, idx) => (
                 <motion.div 
                    key={idx} 
                    className="relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 group"
                    whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                    transition={{ duration: 0.3 }}
                 >
                     {/* Metallic Gradient Background */}
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-50"></div>
                     
                     {/* Hover Glow Gradient */}
                     <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:animate-shine pointer-events-none"></div>

                     <div className="relative p-6 z-10 flex flex-col h-full justify-between">
                         <div className="absolute top-4 right-4 text-slate-700 opacity-20 group-hover:opacity-40 group-hover:text-everwin-sand transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                             {React.cloneElement(stat.icon as React.ReactElement, { size: 60, strokeWidth: 1 })}
                         </div>
                         
                         <div>
                             <div className="flex items-baseline gap-1">
                                 <span className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-everwin-sand to-amber-700 group-hover:to-amber-500 transition-all">
                                    {stat.val}
                                 </span>
                                 <span className="text-sm font-medium text-slate-500">{stat.unit}</span>
                             </div>
                             <div className={`mt-3 text-sm font-medium text-slate-300 group-hover:text-white transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                                 {lang === 'en' ? stat.labelEn : stat.labelAr}
                             </div>
                         </div>

                         {/* Bottom Decorative Bar */}
                         <div className="w-full h-1 bg-slate-800 mt-4 rounded-full overflow-hidden">
                            <div className="h-full bg-everwin-teal w-1/3 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                         </div>
                     </div>
                 </motion.div>
             ))}
        </div>
    );
}
