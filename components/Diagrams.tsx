
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Warehouse, Hammer, Scroll, Ship, TrendingUp, MapPin, ExternalLink } from 'lucide-react';

interface ContentProps {
    lang: 'en' | 'ar';
}

// --- FACTORY GRID ---
export const SurfaceCodeDiagram: React.FC<ContentProps> = ({ lang }) => {
  const facilities = [
    { 
      en: "Aluminum Profile", 
      ar: "مقاطع الألمنيوم", 
      icon: <Building2 />, 
      url: "https://www.nkaluminum.sa" 
    },
    { en: "Steel Structure", ar: "الهياكل الفولاذية", icon: <Hammer /> },
    { en: "Glass Processing", ar: "معالجة الزجاج والأثاث", icon: <Warehouse /> },
    { en: "Aluminum Windows", ar: "نوافذ وأبواب الألمنيوم", icon: <Building2 /> },
    { en: "Sanitary Ware", ar: "الأدوات الصحية", icon: <Home /> },
    { en: "Ceramic Frit", ar: "فريت السيراميك", icon: <Hammer /> },
    { en: "Tissue Paper", ar: "الورق الصحي والغذائي", icon: <Scroll /> },
    { en: "Accommodation", ar: "سكن الموظفين والمكاتب", icon: <Home /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {facilities.map((item, idx) => {
        const CardContent = (
           <>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${item.url ? 'bg-everwin-teal text-white' : 'bg-slate-50 text-everwin-teal group-hover:bg-everwin-teal group-hover:text-white'}`}>
                {item.icon}
            </div>
            <div className="flex items-start justify-between">
                <h3 className={`text-lg font-bold text-slate-800 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                    {lang === 'en' ? item.en : item.ar}
                </h3>
                {item.url && <ExternalLink size={16} className="text-slate-400 group-hover:text-everwin-teal" />}
            </div>
           </>
        );

        return (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
            >
                {item.url ? (
                    <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-everwin-teal transition-all group cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-everwin-teal/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                        {CardContent}
                    </a>
                ) : (
                    <div className="h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-everwin-teal transition-all group">
                        {CardContent}
                    </div>
                )}
            </motion.div>
        );
      })}
    </div>
  );
};

// --- TIMELINE ---
export const TransformerDecoderDiagram: React.FC<ContentProps> = ({ lang }) => {
    const isRTL = lang === 'ar';
    
    const phases = [
        { year: "Q4 2025", en: "Construction Started", ar: "بدء أعمال الإنشاء" },
        { year: "2027", en: "Phase 1 Completion", ar: "اكتمال المرحلة الأولى" },
        { year: "2030", en: "Phase 2 Completion", ar: "اكتمال المرحلة الثانية" },
    ];

    return (
        <div className="relative py-12">
            {/* Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block"></div>
            
            <div className={`flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {phases.map((phase, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm md:w-64">
                        {/* Updated text size to be smaller (text-sm) so 'Q4 2025' fits well inside the circle */}
                        <div className="w-24 h-24 rounded-full bg-everwin-sand text-white flex items-center justify-center font-bold text-sm mb-4 border-4 border-white shadow-lg z-20 whitespace-nowrap">
                            {phase.year}
                        </div>
                        <h4 className={`font-bold text-slate-900 text-center ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                            {isRTL ? phase.ar : phase.en}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- STATS ---
export const PerformanceMetricDiagram: React.FC<ContentProps> = ({ lang }) => {
    const stats = [
        { val: "2M", unit: "m²", labelEn: "Total Area", labelAr: "المساحة الإجمالية", icon: <MapPin /> },
        { val: "5B+", unit: "SAR", labelEn: "Total Investment", labelAr: "إجمالي الاستثمار", icon: <TrendingUp /> },
        { val: "30%", unit: "+", labelEn: "Export Target", labelAr: "حجم التصدير المتوقع", icon: <Ship /> },
        { val: "7+", unit: "", labelEn: "Manufacturing Plants", labelAr: "مصانع إنتاجية", icon: <Building2 /> },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8">
             {stats.map((stat, idx) => (
                 <div key={idx} className="bg-slate-900 text-white p-6 rounded-xl relative overflow-hidden group">
                     <div className="absolute -right-4 -bottom-4 text-slate-800 opacity-20 group-hover:scale-110 transition-transform">
                         {React.cloneElement(stat.icon as React.ReactElement, { size: 100 })}
                     </div>
                     <div className="relative z-10">
                         <div className="flex items-baseline gap-1">
                             <span className="text-4xl font-bold text-everwin-sand">{stat.val}</span>
                             <span className="text-sm font-medium text-slate-400">{stat.unit}</span>
                         </div>
                         <div className={`mt-2 text-sm font-medium text-slate-300 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                             {lang === 'en' ? stat.labelEn : stat.labelAr}
                         </div>
                     </div>
                 </div>
             ))}
        </div>
    );
}
