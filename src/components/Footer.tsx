'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Bot, Cloud, BarChart3, Shield, Building2, Users, 
  FlaskConical, Briefcase, BookOpen, Zap, MessageCircle, 
  Headphones, Twitter, Linkedin, Mail, Smartphone, 
  Activity, Heart, Sparkles 
} from 'lucide-react'
import { cn } from '@/lib/utils'

const footerLinks = {
  services: [
    { name: "AI智能开发", href: "#", icon: Bot },
    { name: "云端部署", href: "#", icon: Cloud },
    { name: "数据分析", href: "#", icon: BarChart3 },
    { name: "安全防护", href: "#", icon: Shield }
  ],
  company: [
    { name: "关于我们", href: "#", icon: Building2 },
    { name: "技术团队", href: "#", icon: Users },
    { name: "创新实验室", href: "#", icon: FlaskConical },
    { name: "人才招聘", href: "#", icon: Briefcase }
  ],
  support: [
    { name: "技术文档", href: "#", icon: BookOpen },
    { name: "API接口", href: "#", icon: Zap },
    { name: "开发者社区", href: "#", icon: MessageCircle },
    { name: "在线支持", href: "#", icon: Headphones }
  ]
}

const socialLinks = [
  { icon: Twitter, label: "Twitter", gradient: "from-blue-400 to-blue-600", href: "#" },
  { icon: Linkedin, label: "LinkedIn", gradient: "from-blue-600 to-blue-800", href: "#" },
  { icon: Smartphone, label: "WeChat", gradient: "from-green-400 to-green-600", href: "#" },
  { icon: Mail, label: "Email", gradient: "from-purple-400 to-purple-600", href: "#" }
]

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-400 rounded-full"
    initial={{ 
      x: Math.random() * 1000,
      y: Math.random() * 600,
      opacity: 0 
    }}
    animate={{
      y: [null, -20, 20, -10],
      opacity: [0, 1, 0.3, 0],
      scale: [0, 1, 0.5, 0]
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

const LinkSection = ({ 
  title, 
  links, 
  color, 
  index 
}: { 
  title: string
  links: typeof footerLinks.services
  color: string
  index: number 
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <motion.span 
          className={cn("w-2 h-2 rounded-full", color)}
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, linkIndex) => {
          const IconComponent = link.icon
          return (
            <motion.li 
              key={linkIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 + linkIndex * 0.05 }}
            >
              <motion.a 
                href={link.href} 
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-4 h-4" />
                </motion.div>
                <span className="group-hover:text-blue-300 transition-colors">
                  {link.name}
                </span>
              </motion.a>
            </motion.li>
          )
        })}
      </ul>
    </motion.div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* 科技网格背景 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* 顶部渐变线 */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* 浮动粒子 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.4} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            ref={ref}
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-sm"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                TechApp
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              融合AI技术与创新设计，打造下一代智能移动应用解决方案。
              <span className="text-blue-400 font-semibold block mt-2 flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                让科技赋能未来
              </span>
            </motion.p>
            
            {/* 社交媒体 */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className={cn("w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center group", social.gradient)}
                    title={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Services */}
          <LinkSection 
            title="核心服务" 
            links={footerLinks.services} 
            color="bg-blue-400" 
            index={1}
          />

          {/* Company */}
          <LinkSection 
            title="公司信息" 
            links={footerLinks.company} 
            color="bg-purple-400" 
            index={2}
          />

          {/* Support */}
          <LinkSection 
            title="开发者支持" 
            links={footerLinks.support} 
            color="bg-green-400" 
            index={3}
          />
        </div>

        {/* 分割线 */}
        <motion.div 
          className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        />

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} TechApp. 
              <span className="text-blue-400 font-semibold ml-1 flex items-center gap-1">
                <Bot className="w-3 h-3" />
                Powered by AI
              </span>
            </p>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Activity className="w-3 h-3" />
                系统运行正常
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {['服务条款', '隐私政策', 'Cookie政策'].map((item, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-blue-400 to-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 底部装饰 */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full border border-slate-700/50 backdrop-blur-sm">
            <span className="text-xs text-gray-400">Built with</span>
            <span className="text-xs text-blue-400 font-semibold">Next.js</span>
            <span className="text-xs text-gray-400">+</span>
            <span className="text-xs text-purple-400 font-semibold">AI</span>
            <span className="text-xs text-gray-400">+</span>
            <motion.span 
              className="text-xs text-red-400 font-semibold flex items-center gap-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 fill-current" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}