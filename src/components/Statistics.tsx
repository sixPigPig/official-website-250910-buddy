'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Rocket, Building2, Users, Zap, TrendingUp, Database, Activity, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  {
    target: 500,
    suffix: "+",
    label: "AI项目交付",
    description: "智能化解决方案",
    icon: Rocket,
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    target: 300,
    suffix: "+",
    label: "企业客户",
    description: "信任我们的伙伴",
    icon: Building2,
    gradient: "from-purple-400 to-pink-400"
  },
  {
    target: 50,
    suffix: "+",
    label: "技术专家",
    description: "顶尖开发团队",
    icon: Users,
    gradient: "from-green-400 to-emerald-400"
  },
  {
    target: 99.9,
    suffix: "%",
    label: "系统稳定性",
    description: "7x24小时运行",
    icon: Zap,
    gradient: "from-orange-400 to-red-400"
  }
]

const AnimatedCounter = ({ 
  target, 
  suffix, 
  isVisible, 
  delay = 0 
}: { 
  target: number
  suffix: string
  isVisible: boolean
  delay?: number 
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let start = 0
        const end = target
        const duration = 2000
        const increment = end / (duration / 16)

        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(counter)
          }
          setCount(start)
        }, 16)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, target, delay])

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={isVisible ? { scale: 1 } : { scale: 0 }}
      transition={{ 
        delay: delay / 1000,
        type: "spring",
        stiffness: 200,
        damping: 10
      }}
    >
      {suffix === '%' ? count.toFixed(1) : Math.floor(count)}{suffix}
    </motion.span>
  )
}

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const IconComponent = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* 卡片背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500" />
      
      {/* 发光效果 */}
      <motion.div 
        className={cn("absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500", stat.gradient)}
        whileHover={{ scale: 1.02 }}
      />
      
      {/* 卡片内容 */}
      <div className="relative p-8 text-center">
        {/* 图标 */}
        <motion.div 
          className="flex justify-center mb-4"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5
          }}
        >
          <div className={cn("p-3 bg-gradient-to-r rounded-full", stat.gradient)}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </motion.div>
        
        {/* 数字显示 */}
        <div className="mb-4">
          <motion.div 
            className={cn("text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2", stat.gradient)}
            whileHover={{ scale: 1.1 }}
          >
            <AnimatedCounter 
              target={stat.target} 
              suffix={stat.suffix} 
              isVisible={isInView}
              delay={index * 200}
            />
          </motion.div>
          
          <motion.div 
            className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {stat.label}
          </motion.div>
          
          <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
            {stat.description}
          </div>
        </div>

        {/* 进度条效果 */}
        <div className="w-full bg-slate-700 rounded-full h-1 overflow-hidden">
          <motion.div 
            className={cn("h-full bg-gradient-to-r rounded-full", stat.gradient)}
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ 
              duration: 2,
              delay: index * 0.2,
              ease: "easeOut"
            }}
          />
        </div>
      </div>

      {/* 悬停光效 */}
      <motion.div 
        className={cn("absolute -inset-1 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm -z-10", stat.gradient)}
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>
  )
}

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-400 rounded-full"
    initial={{ 
      x: Math.random() * 1000,
      y: Math.random() * 800,
      opacity: 0 
    }}
    animate={{
      y: [null, -40, 40, -20],
      opacity: [0, 1, 0.2, 0],
      scale: [0, 1, 0.3, 0]
    }}
    transition={{
      duration: 6 + Math.random() * 4,
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

export default function Statistics() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* 科技网格背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* 动态背景渐变 */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"
        animate={{ 
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(15, 23, 42, 0.2))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(15, 23, 42, 0.2))",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(15, 23, 42, 0.2))"
          ]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 动态粒子背景 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
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
              <Database className="w-4 h-4" />
              实时数据
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              数据驱动成果
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            用科技实力和数据成果证明我们的专业能力
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* 底部状态栏 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full border border-slate-700/50 backdrop-blur-sm">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-gray-300 text-sm flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                实时更新
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
              <span className="text-gray-300 text-sm flex items-center gap-1">
                <Database className="w-3 h-3" />
                数据准确
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
              <span className="text-gray-300 text-sm flex items-center gap-1">
                <Activity className="w-3 h-3" />
                持续增长
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}