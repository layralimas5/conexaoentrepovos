import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { WhyWeExist } from '@/components/sections/WhyWeExist'
import { Peoples } from '@/components/sections/Peoples'
import { Fronts } from '@/components/sections/Fronts'
import { Method } from '@/components/sections/Method'
import { Stage } from '@/components/sections/Stage'
import { Founder } from '@/components/sections/Founder'
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
        <WhyWeExist />
        <Peoples />
        <Fronts />
        <Method />
        <Stage />
        <Founder />
        <Participate />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
