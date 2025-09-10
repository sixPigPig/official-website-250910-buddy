'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Zap, Play, Rocket, Building2, Users, Star, ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { number: "500+", label: "成功项目", icon: Rocket },
  { number: "300+", label: "企业客户", icon: Building2 },
  { number: "50+", label: "技术专家", icon: Users },
  { number: "98%", label: "客户满意度", icon: Star }
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
      y: [null, -20, 20, -10],
      opacity: [0, 1, 0.5, 0],
      scale: [0, 1, 0.5, 0]
    }}
    transition={{
      duration: 4 + Math.random() * 2,
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

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section 
      ref={ref}
      id="home" 
      className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
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
      
      {/* 动态粒子效果 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* 鼠标跟踪光效 */}
      <motion.div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* AI标签 */}
          <motion.div 
            className="mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              AI驱动的移动应用开发
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              打造卓越的
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "100% 50%" }}
              animate={{ backgroundPosition: "0% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              移动应用体验
            </motion.span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            利用前沿AI技术与云原生架构，为您的创意注入智能化的生命力，
            <motion.span 
              className="text-blue-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              让每一次触碰都成为惊喜
            </motion.span>
          </motion.p>

          {/* CTA按钮 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.button 
              className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
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
                开始AI项目
              </span>
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 text-white font-semibold rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm bg-slate-800/50 hover:bg-slate-700/50 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                查看案例
              </span>
            </motion.button>
          </motion.div>

          {/* 统计数据 */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative group">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                      <motion.div 
                        className="flex justify-center mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </motion.div>
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      
      {/* 滚动指示器 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs">向下滚动</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}