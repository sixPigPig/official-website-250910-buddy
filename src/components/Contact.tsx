'use client'

import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Sparkles, Bot, Clock, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const contactInfo = [
  {
    icon: Phone,
    title: "智能客服",
    value: "400-AI-TECH",
    description: "7x24小时AI智能响应",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Mail,
    title: "邮箱联系",
    value: "ai@techapp.com",
    description: "专业技术团队响应",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "创新中心",
    value: "北京·中关村AI园区",
    description: "智能科技创新基地",
    gradient: "from-green-500 to-emerald-500"
  }
]

const ContactInfoCard = ({ info, index }: { info: typeof contactInfo[0], index: number }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const IconComponent = info.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ x: 10, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300" />
      
      <motion.div 
        className={cn("absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-300", info.gradient)}
        whileHover={{ scale: 1.02 }}
      />
      
      <div className="relative flex items-center p-6">
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={cn("w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300", info.gradient)}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </motion.div>
        
        <div className="ml-4">
          <motion.h4 
            className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {info.title}
          </motion.h4>
          <p className={cn("font-medium bg-gradient-to-r bg-clip-text text-transparent", info.gradient)}>
            {info.value}
          </p>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
            {info.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
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
        className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1.1, 1, 1.1]
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
              开启合作
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              联系我们
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            准备开启您的AI驱动项目了吗？让我们的技术专家为您提供专业咨询
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Bot className="w-6 h-6 text-blue-400" />
                智能化项目咨询
              </h3>
              <p className="text-gray-300 leading-relaxed">
                我们的AI技术专家团队将为您提供个性化的解决方案，
                <span className="text-blue-400 font-semibold">从概念到实现，全程护航您的创新之路。</span>
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} info={info} index={index} />
              ))}
            </div>

            {/* 额外信息 */}
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>快速响应</span>
                </div>
                <div className="w-px h-4 bg-slate-600" />
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>专业团队</span>
                </div>
                <div className="w-px h-4 bg-slate-600" />
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span>AI驱动</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/50" />
            
            <div className="relative p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Send className="w-5 h-5 text-blue-400" />
                  项目需求表单
                </h3>
                <p className="text-gray-400 text-sm">
                  填写详细信息，我们将为您量身定制解决方案
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="请输入您的姓名"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="请输入您的邮箱"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      电话
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="请输入您的电话"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      公司
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="请输入您的公司"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    项目描述 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="请详细描述您的项目需求、预期目标和技术要求..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                    initial={{ x: "-100%" }}
                    whileHover={isSubmitting ? {} : { x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        AI分析中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        启动AI分析
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}