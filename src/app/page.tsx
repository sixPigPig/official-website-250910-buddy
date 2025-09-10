import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Advantages from '@/components/Advantages'
import Cases from '@/components/Cases'
import Statistics from '@/components/Statistics'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Cases />
      <Statistics />
      <Contact />
      <Footer />
    </main>
  )
}