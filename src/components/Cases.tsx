'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, GraduationCap, ShoppingCart, ExternalLink, ArrowRight, Sparkles, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

const cases = [
  {
    title: "智能健康管理",
    category: "健康医疗",
    description: "AI驱动的个性化健康管理方案，集成运动记录、饮食分析、健康预测等智能功能，为用户提供全方位的健康守护。",
    icon: Heart,
    gradient: "from-red-500 to-pink-500",
    tags: ["iOS", "Android", "AI健康", "数据分析"],
    stats: { users: "50万+", rating: "4.9" }
  },
  {
    title: "在线教育平台",
    category: "教育培训",
    description: "融合AR/VR技术的沉浸式学习平台，支持实时互动教学、智能作业批改、个性化学习路径推荐。",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    tags: ["跨平台", "AR/VR", "AI教学", "直播"],
    stats: { users: "100万+", rating: "4.8" }
  },
  {
    title: "智慧零售系统",
    category: "电商零售",
    description: "基于AI的新零售解决方案，整合线上线下体验，提供智能推荐、AR试穿、无人配送等创新功能。",
    icon: ShoppingCart,
    gradient: "from-purple-500 to-indigo-500",
    tags: ["电商", "AI推荐", "AR技术", "智能物流"],
    stats: { users: "200万+", rating: "4.7" }
  }
]

const CaseCard = ({ caseItem, index }: { caseItem: typeof cases[0], index: number }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const IconComponent = caseItem.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 45 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10, rotateY: -5 }}
      className="group relative perspective-1000"
    >
      {/* 卡片背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500" />
      
      {/* 发光效果 */}
      <motion.div 
        className={cn("absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500", caseItem.gradient)}
        whileHover={{ scale: 1.02 }}
      />

      <div className="relative overflow-hidden rounded-xl">
        {/* 案例预览区域 */}
        <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }} />
          </div>

          {/* 手机模型 */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1, rotateY: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-32 h-56 bg-gradient-to-b from-slate-700 to-slate-800 rounded-3xl p-2 shadow-2xl border border-slate-600">
              <div className="w-full h-full bg-slate-900 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                {/* 屏幕内容 */}
                <motion.div 
                  className={cn("w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center mb-3 shadow-lg", caseItem.gradient)}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="text-center px-2">
                  <div className="text-xs text-gray-300 font-medium mb-1">{caseItem.category}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full" />
                      ))}
                    </div>
                    <span>{caseItem.stats.rating}</span>
                  </div>
                </div>

                {/* 动态效果 */}
                <motion.div 
                  className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* 浮动元素 */}
          <motion.div 
            className="absolute top-4 left-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center"
            animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Smartphone className="w-4 h-4 text-blue-400" />
          </motion.div>
        </div>

        {/* 案例内容 */}
        <div className="relative p-6">
          <div className="mb-2">
            <span className={cn("text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent", caseItem.gradient)}>
              {caseItem.category}
            </span>
          </div>
          
          <motion.h3 
            className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            {caseItem.title}
          </motion.h3>
          
          <p className="text-gray-300 mb-4 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
            {caseItem.description}
          </p>

          {/* 统计数据 */}
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-gray-400">{caseItem.stats.users} 用户</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-gray-400">{caseItem.stats.rating} 评分</span>
            </div>
          </div>
          
          {/* 技术标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {caseItem.tags.map((tag, tagIndex) => (
              <motion.span 
                key={tag}
                className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/50 group-hover:border-blue-500/50 transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.2 + tagIndex * 0.05 + 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* 查看详情按钮 */}
          <motion.button 
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/btn"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium">查看详情</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Cases() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cases" className="py-20 bg-slate-950 relative overflow-hidden">
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

      {/* 动态光效 */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
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
              成功案例
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              创新作品展示
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            探索我们为客户打造的智能化移动应用解决方案
          </motion.p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <CaseCard key={index} caseItem={caseItem} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group shadow-lg shadow-blue-500/25"
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
              查看更多案例
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}