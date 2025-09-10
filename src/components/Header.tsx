'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { Smartphone, Menu, X, Zap, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: '首页', href: '#' },
  { name: '服务', href: '#services' },
  { name: '优势', href: '#advantages' },
  { name: '案例', href: '#cases' },
  { name: '联系', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Disclosure as="header" className="fixed w-full top-0 z-50">
      {({ open }) => (
        <>
          <motion.div
            className={cn(
              "transition-all duration-300",
              scrolled 
                ? "bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-500/10" 
                : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-white" />
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
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    TechApp
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="relative text-gray-300 hover:text-white transition-colors group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.button
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  立即咨询
                </motion.button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Disclosure.Button className="relative p-2 text-gray-300 hover:text-white focus:outline-none">
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.div>
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {open && (
              <Disclosure.Panel static>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-4 space-y-2">
                      {navigation.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-lg transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <span className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-blue-400" />
                            {item.name}
                          </span>
                        </motion.a>
                      ))}
                      <motion.button
                        className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          立即咨询
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}