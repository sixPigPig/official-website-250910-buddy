'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, Globe, Heart, Activity, Eye, Cpu, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const advantages = [
  {
    icon: Zap,
    title: "AI驱动开发",
    description: "利用人工智能技术，自动化代码生成，提升开发效率300%",
    gradient: "from-blue-500 to-cyan-500",
    stats: "300%",
    metric: "效率提升"
  },
  {
    icon: Shield,
    title: "智能质检",
    description: "AI自动化测试系统，实时监控代码质量，确保99.9%稳定性",
    gradient: "from-purple-500 to-pink-500",
    stats: "99.9%",
    metric: "稳定性保障"
  },
  {
    icon: Globe,
    title: "云原生架构",
    description: "基于云原生技术栈，支持全球部署，毫秒级响应速度",
    gradient: "from-green-500 to-emerald-500",
    stats: "<100ms",
    metric: "响应时间"
  },
  {
    icon: Heart,
    title: "智能运维",
    description: "AI驱动的运维系统，7x24小时自动监控，预测性维护",
    gradient: "from-orange-500 to-red-500",
    stats: "24/7",
    metric: "智能监控"
  }
]

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-400 rounded-full"
    initial={{ 
      x: Math.random() * 1000,
      y: Math.random() * 800,
      opacity: 0 
    }}
    animate={{
      y: [null, -30, 30, -15],
      opacity: [0, 1, 0.3, 0],
      scale: [0, 1, 0.5, 0]
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
)

const AdvantageCard = ({ advantage, index }: { advantage: typeof advantages[0], index: number }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const IconComponent = advantage.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 45 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -15, rotateY: 5 }}
      className="group relative perspective-1000"
    >
      {/* 卡片背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500" />
      
      {/* 发光效果 */}
      <motion.div 
        className={cn("absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500", advantage.gradient)}
        whileHover={{ scale: 1.02 }}
      />
      
      {/* 内容 */}
      <div className="relative p-8 text-center">
        {/* 图标容器 */}
        <motion.div 
          className="relative mb-6"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={cn("w-16 h-16 bg-gradient-to-r rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500", advantage.gradient)}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          {/* 状态指示器 */}
          <motion.div 
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 rounded-full border-2 border-blue-500 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* 标题 */}
        <motion.h3 
          className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {advantage.title}
        </motion.h3>

        {/* 描述 */}
        <p className="text-gray-300 leading-relaxed mb-4 text-sm group-hover:text-gray-200 transition-colors">
          {advantage.description}
        </p>

        {/* 统计数据 */}
        <motion.div 
          className="pt-4 border-t border-slate-700/50 group-hover:border-blue-500/30 transition-colors"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.div 
            className={cn("text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent", advantage.gradient)}
            whileHover={{ scale: 1.1 }}
          >
            {advantage.stats}
          </motion.div>
          <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
            {advantage.metric}
          </div>
        </motion.div>

        {/* 悬停效果 */}
        <motion.div 
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Advantages() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* 科技网格背景 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* 动态光效 */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 200, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -200, 0],
          y: [0, 100, 0],
          scale: [1.3, 1, 1.3]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 浮动粒子 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              核心优势
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              AI赋能的技术优势
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            融合前沿AI技术与云原生架构，为您提供超越传统的智能化开发体验
          </motion.p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} index={index} />
          ))}
        </div>

        {/* 底部状态栏 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full border border-slate-700/50 backdrop-blur-sm">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-gray-300 flex items-center gap-1">
                <Activity className="w-3 h-3" />
                AI系统运行中
              </span>
            </motion.div>
            
            <div className="w-px h-4 bg-slate-600" />
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              <span className="text-sm text-gray-300 flex items-center gap-1">
                <Eye className="w-3 h-3" />
                实时性能监控
              </span>
            </motion.div>
            
            <div className="w-px h-4 bg-slate-600" />
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
              />
              <span className="text-sm text-gray-300 flex items-center gap-1">
                <Cpu className="w-3 h-3" />
                智能优化启用
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}