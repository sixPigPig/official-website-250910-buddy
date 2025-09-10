'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Bot, Zap, Palette, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Smartphone,
    title: "iOS 智能开发",
    description: "融合AI技术的iOS原生应用开发，智能化用户体验设计",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Swift 5.9", "SwiftUI", "Core ML", "ARKit"]
  },
  {
    icon: Bot,
    title: "Android 前沿技术",
    description: "基于最新Android架构，集成机器学习和云端智能服务",
    gradient: "from-green-500 to-emerald-500",
    features: ["Kotlin", "Jetpack Compose", "ML Kit", "TensorFlow Lite"]
  },
  {
    icon: Zap,
    title: "跨平台融合",
    description: "统一代码库，多端部署，AI驱动的性能优化和用户体验",
    gradient: "from-purple-500 to-pink-500",
    features: ["React Native", "Flutter", "Xamarin", "Ionic"]
  },
  {
    icon: Palette,
    title: "AI设计系统",
    description: "智能化UI/UX设计，数据驱动的用户体验优化方案",
    gradient: "from-orange-500 to-red-500",
    features: ["Figma", "Adobe XD", "Sketch", "Principle"]
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const IconComponent = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* 背景卡片 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500" />
      
      {/* 发光效果 */}
      <motion.div 
        className={cn("absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500", service.gradient)}
        whileHover={{ scale: 1.02 }}
      />
      
      {/* 卡片内容 */}
      <div className="relative p-8 text-center">
        {/* 图标容器 */}
        <motion.div 
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={cn("p-4 bg-gradient-to-br rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500", service.gradient)}>
            <IconComponent className="w-12 h-12 text-white" />
          </div>
        </motion.div>
        
        {/* 标题 */}
        <motion.h3 
          className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {service.title}
        </motion.h3>
        
        {/* 描述 */}
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
          {service.description}
        </p>

        {/* 技术标签 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {service.features.map((feature, idx) => (
            <motion.span
              key={feature}
              className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/50 group-hover:border-blue-500/50 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: index * 0.1 + idx * 0.05 + 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>

        {/* 悬停指示器 */}
        <motion.div 
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className={cn("w-2 h-2 bg-gradient-to-r rounded-full", service.gradient)} />
        </motion.div>
      </div>

      {/* 底部装饰线 */}
      <motion.div 
        className={cn("absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r rounded-full", service.gradient)}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

export default function Services() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* 浮动光效 */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
              核心服务
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              智能化移动开发
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            融合前沿AI技术，打造下一代移动应用解决方案
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* 底部CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg overflow-hidden group shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              探索更多服务
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}