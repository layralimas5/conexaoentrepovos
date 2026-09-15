import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Fronts } from '@/components/sections/Fronts'
import { Peoples } from '@/components/sections/Peoples'
import { Founder } from '@/components/sections/Founder'
import { Method } from '@/components/sections/Method'
import { Participate } from '@/components/sections/Participate'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-terra-400 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-night"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Fronts />
        <Peoples />
        <Founder />
        <Method />
        <Participate />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
