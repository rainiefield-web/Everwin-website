
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, Activity, Construction, Flame, Route, BedDouble, Users, ArrowUpRight, Server, Layers } from 'lucide-react';

interface DashboardProps {
    lang: 'en' | 'ar';
}

export const DevelopmentDashboard: React.FC<DashboardProps> = ({ lang }) => {
    const isRTL = lang === 'ar';

    // Data Configuration
    const timeline = {
        start: { en: "Start Q4 2025", ar: "البداية الربع الرابع 2025" },
        p1: { en: "Phase 1: 2027", ar: "المرحلة الأولى: 2027" },
        p2: { en: "Phase 2: 2030", ar: "المرحلة الثانية: 2030" }
    };

    const metrics = [
        { labelEn: "Land Leveling", labelAr: "تسوية الأراضي", val: 70, icon: <Layers size={16} /> },
        { labelEn: "Road Network", labelAr: "شبكة الطرق", val: 50, icon: <Route size={16} /> },
        { labelEn: "Power Grid", labelAr: "الكهرباء", val: 50, icon: <Zap size={16} /> },
        { labelEn: "Natural Gas", labelAr: "الغاز الطبيعي", val: 40, icon: <Flame size={16} /> },
        { labelEn: "Water Systems", labelAr: "المياه", val: 30, icon: <Droplets size={16} /> },
        { labelEn: "Tenant Occupancy", labelAr: "نسبة الإشغال", val: 35, icon: <Users size={16} /> },
        { labelEn: "Accommodation", labelAr: "السكن والمرافق", val: 25, icon: <BedDouble size={16} /> },
    ];

    // Zone Grid Logic
    const totalPlots = 42; // 6x7 Grid
    
    // Specific indices matching the user's selection
    const allocatedIndices = new Set([0, 1, 6, 7, 24, 25, 26, 27, 30, 31, 32, 33, 36, 37, 38, 39]);
    
    const isAllocated = (i: number) => allocatedIndices.has(i);

    return (
        <section className="relative py-24 overflow-hidden bg-slate-900">
            {/* Tech Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light pointer-events-none"></div>
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(13, 148, 136, 0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-everwin-teal/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
                    <div className={isRTL ? 'text-right ml-auto' : 'text-left'}>
                        <div className="inline-flex items-center gap-2 mb-3 text-everwin-teal text-xs font-mono tracking-[0.2em] uppercase">
                            <span className="relative flex h-2 w-2 mr-1">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-everwin-teal opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-everwin-teal"></span>
                            </span>
                            {lang === 'en' ? 'Live Construction Feed' : 'بث مباشر لحالة الإنشاء'}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                            {lang === 'en' ? 'Development Progress' : 'سير العمل في المشروع'}
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            {lang === 'en' 
                                ? 'Tracking real-time milestones from groundbreaking to full operational capacity.' 
                                : 'متابعة المعالم الرئيسية للمشروع في الوقت الفعلي من وضع حجر الأساس إلى التشغيل الكامل.'}
                        </p>
                    </div>
                    
                    {/* Timeline Badge */}
                    <div className="flex flex-col items-end gap-2">
                        <div className="px-4 py-2 rounded border border-white/10 bg-white/5 backdrop-blur text-slate-300 font-mono text-xs">
                            {lang === 'en' ? timeline.start.en : timeline.start.ar} 
                            <span className="mx-2 text-everwin-teal">→</span> 
                            {lang === 'en' ? timeline.p2.en : timeline.p2.ar}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* MAIN PROGRESS CIRCLE */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="flex-1 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative group overflow-hidden flex flex-col items-center justify-center">
                             {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-everwin-teal/30 rounded-tl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-everwin-teal/30 rounded-br-lg"></div>

                            <div className="relative w-64 h-64">
                                <svg className="w-full h-full -rotate-90 drop-shadow-2xl">
                                    {/* Track */}
                                    <circle cx="128" cy="128" r="110" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                                    {/* Indicator */}
                                    <motion.circle 
                                        cx="128" cy="128" r="110" 
                                        stroke="#0D9488" 
                                        strokeWidth="8" 
                                        fill="none" 
                                        strokeLinecap="round"
                                        initial={{ strokeDasharray: 691, strokeDashoffset: 691 }}
                                        whileInView={{ strokeDashoffset: 691 - (691 * 0.45) }} // Approx avg progress
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        className="drop-shadow-[0_0_10px_rgba(13,148,136,0.5)]"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                                    <div className="text-xs text-everwin-teal font-bold uppercase tracking-widest mb-1">
                                        {lang === 'en' ? 'Phase 1 Status' : 'حالة المرحلة 1'}
                                    </div>
                                    <span className="text-6xl font-bold text-white tracking-tighter">
                                        45<span className="text-3xl text-slate-500">%</span>
                                    </span>
                                    <div className="mt-4 px-3 py-1 bg-white/5 rounded text-[10px] text-slate-400 border border-white/5">
                                        {lang === 'en' ? 'On Track: Q4 2025 Launch' : 'حسب الجدول: الربع الرابع 2025'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INFRASTRUCTURE GRID */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-1 gap-3 h-full">
                            {metrics.map((item, idx) => (
                                <div key={idx} className="relative bg-slate-800/40 border border-white/5 rounded-lg p-4 flex items-center gap-4 group hover:bg-white/5 transition-colors overflow-hidden">
                                    {/* Icon */}
                                    <div className="p-2 rounded bg-slate-900 text-slate-400 group-hover:text-everwin-teal group-hover:scale-110 transition-all">
                                        {item.icon}
                                    </div>
                                    
                                    {/* Bar & Label */}
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-2 text-sm">
                                            <span className="text-slate-200 font-medium">{lang === 'en' ? item.labelEn : item.labelAr}</span>
                                            <span className="text-white font-mono font-bold">{item.val}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-gradient-to-r from-everwin-teal to-cyan-500 relative"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.val}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                            >
                                                {/* Shine effect on bar */}
                                                <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/40 blur-[4px]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ZONE ALLOCATION VISUAL */}
                    <div className="lg:col-span-3">
                        <div className="h-full bg-slate-900/80 backdrop-blur border border-slate-700 rounded-2xl p-6 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-everwin-teal to-transparent opacity-50"></div>
                            
                            <div className="mb-6 flex justify-between items-center">
                                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                    <Server size={16} className="text-everwin-teal" />
                                    {lang === 'en' ? 'Zone Allocation' : 'توزيع المناطق'}
                                </h3>
                                <div className="text-[10px] font-mono text-everwin-teal animate-pulse">
                                    LIVE
                                </div>
                            </div>

                            {/* The Grid */}
                            <div className="grid grid-cols-6 gap-2 flex-1 content-start">
                                {Array.from({ length: totalPlots }).map((_, i) => {
                                    const active = isAllocated(i);
                                    return (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.02 }}
                                            className={`aspect-square rounded-sm relative group transition-all duration-300
                                                ${active 
                                                    ? 'bg-everwin-teal/80 shadow-[0_0_8px_rgba(13,148,136,0.4)] border border-everwin-teal' 
                                                    : 'bg-slate-800/50 border border-slate-700 hover:border-slate-500'
                                                }`}
                                        >
                                            {active && <div className="absolute inset-0 bg-white/20 animate-pulse"></div>}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10 text-center">
                                <p className="text-xs text-slate-400 mb-2">
                                    {lang === 'en' ? '35% Capacity Secured' : 'تم تأمين 35% من السعة'}
                                </p>
                                <a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-everwin-teal transition-colors group">
                                    {lang === 'en' ? 'Reserve Your Spot' : 'احجز موقعك'} 
                                    <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
