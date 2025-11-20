
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, Activity, Construction, Wifi, Server, ArrowUpRight } from 'lucide-react';

interface DashboardProps {
    lang: 'en' | 'ar';
}

export const DevelopmentDashboard: React.FC<DashboardProps> = ({ lang }) => {
    const isRTL = lang === 'ar';

    // Simulated "Live" data - focusing on Infrastructure (High %) to build trust
    // even if construction (Medium %) is still ongoing.
    const metrics = {
        overall: 38,
        infrastructure: [
            { labelEn: "Power Grid Setup", labelAr: "شبكة الطاقة الكهربائية", val: 92, icon: <Zap size={16} /> },
            { labelEn: "Water Treatment", labelAr: "معالجة المياه", val: 85, icon: <Droplets size={16} /> },
            { labelEn: "Road Network", labelAr: "شبكة الطرق", val: 64, icon: <Construction size={16} /> },
            { labelEn: "Fiber Optics", labelAr: "الألياف البصرية", val: 78, icon: <Wifi size={16} /> },
        ]
    };

    // Simulated "Zone Allocation" Grid
    // Shows "Available" vs "Allocated" to create a sense of scarcity/opportunity without looking empty.
    const totalPlots = 48;
    const allocatedPlots = [0, 1, 2, 5, 6, 10, 11, 12, 15, 20, 21, 22, 30, 31, 40]; // Specific IDs to light up

    return (
        <section className="relative py-20 overflow-hidden bg-slate-900">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-everwin-teal/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className={isRTL ? 'text-right ml-auto' : 'text-left'}>
                        <div className="inline-flex items-center gap-2 mb-2 text-everwin-teal text-xs font-mono tracking-widest uppercase">
                            <Activity size={14} className="animate-pulse" />
                            {lang === 'en' ? 'Live Project Status' : 'حالة المشروع الحية'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            {lang === 'en' ? 'Development Dashboard' : 'لوحة مؤشرات التطوير'}
                        </h2>
                        <p className="text-slate-400 mt-2 max-w-xl">
                            {lang === 'en' 
                                ? 'Real-time insights into infrastructure readiness and zone allocation. We prioritize foundation to ensure rapid scaling.' 
                                : 'رؤى في الوقت الفعلي حول جاهزية البنية التحتية وتخصيص المناطق. نعطي الأولوية للأساس لضمان التوسع السريع.'}
                        </p>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-emerald-400 text-sm font-bold backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {lang === 'en' ? 'Construction Active' : 'أعمال الإنشاء جارية'}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* LEFT: Circular Progress (The "Hero" Metric) */}
                    <div className="lg:col-span-4">
                        <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative group overflow-hidden flex flex-col items-center justify-center text-center">
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-everwin-teal/0 via-everwin-teal/0 to-everwin-teal/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            
                            <div className="relative w-56 h-56 mb-6">
                                <svg className="w-full h-full -rotate-90">
                                    {/* Background Circle */}
                                    <circle cx="112" cy="112" r="100" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
                                    {/* Progress Circle */}
                                    <motion.circle 
                                        cx="112" cy="112" r="100" 
                                        stroke="#0D9488" 
                                        strokeWidth="12" 
                                        fill="none" 
                                        strokeLinecap="round"
                                        initial={{ strokeDasharray: 628, strokeDashoffset: 628 }}
                                        whileInView={{ strokeDashoffset: 628 - (628 * metrics.overall) / 100 }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-bold text-white">{metrics.overall}%</span>
                                    <span className="text-xs text-slate-400 uppercase tracking-widest mt-2">
                                        {lang === 'en' ? 'Phase 1 Readiness' : 'جاهزية المرحلة 1'}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 w-full border-t border-white/10 pt-6 mt-2">
                                <div>
                                    <div className="text-2xl font-bold text-white">2025</div>
                                    <div className="text-xs text-slate-500">{lang === 'en' ? 'Completion Target' : 'هدف الاكتمال'}</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-everwin-sand">Q4</div>
                                    <div className="text-xs text-slate-500">{lang === 'en' ? 'Next Milestone' : 'المعلم القادم'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CENTER: Infrastructure Bars (The "Trust" Metrics) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {metrics.infrastructure.map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <div className="p-2 rounded-lg bg-white/5 text-everwin-teal group-hover:text-white group-hover:bg-everwin-teal transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium">{lang === 'en' ? item.labelEn : item.labelAr}</span>
                                    </div>
                                    <span className="font-bold text-white font-mono">{item.val}%</span>
                                </div>
                                {/* Progress Bar */}
                                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-gradient-to-r from-everwin-teal to-emerald-400 relative"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.val}%` }}
                                        transition={{ duration: 1.5, delay: idx * 0.2 }}
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50 shadow-[0_0_10px_white]"></div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Zone Allocation Grid (The "Opportunity" Visual) */}
                    <div className="lg:col-span-4">
                        <div className="h-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 flex flex-col">
                             <div className="flex justify-between items-center mb-6">
                                <h3 className="text-white font-bold flex items-center gap-2">
                                    <Server size={18} className="text-everwin-sand" />
                                    {lang === 'en' ? 'Zone Allocation' : 'تخصيص المناطق'}
                                </h3>
                                <div className="flex gap-3 text-[10px] uppercase tracking-wider font-bold">
                                    <div className="flex items-center gap-1 text-slate-400">
                                        <div className="w-2 h-2 bg-slate-600 rounded-sm"></div> 
                                        {lang === 'en' ? 'Avail' : 'متاح'}
                                    </div>
                                    <div className="flex items-center gap-1 text-everwin-teal">
                                        <div className="w-2 h-2 bg-everwin-teal rounded-sm shadow-[0_0_5px_#0D9488]"></div> 
                                        {lang === 'en' ? 'Taken' : 'محجوز'}
                                    </div>
                                </div>
                             </div>

                             {/* The Grid Map */}
                             <div className="grid grid-cols-8 gap-1.5 auto-rows-fr grow content-start">
                                 {Array.from({ length: totalPlots }).map((_, i) => {
                                     const isAllocated = allocatedPlots.includes(i);
                                     return (
                                         <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.01 }}
                                            className={`aspect-square rounded-sm transition-all duration-300 hover:scale-125 cursor-crosshair relative group
                                                ${isAllocated 
                                                    ? 'bg-everwin-teal shadow-[0_0_5px_rgba(13,148,136,0.5)]' 
                                                    : 'bg-slate-700/30 hover:bg-white/20'
                                                }`}
                                         >
                                             {isAllocated && (
                                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 animate-pulse"></div>
                                             )}
                                         </motion.div>
                                     )
                                 })}
                             </div>
                             
                             <div className="mt-6 pt-4 border-t border-white/10">
                                 <a href="#contact" className="flex items-center justify-between w-full text-sm text-slate-300 hover:text-white group transition-colors">
                                     <span>{lang === 'en' ? 'View Master Plan Details' : 'عرض تفاصيل المخطط الرئيسي'}</span>
                                     <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                 </a>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
