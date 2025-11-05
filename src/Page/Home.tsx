import { ChoseSection } from '@/components/LayOut/choseSection'
import { ContactUS } from '@/components/LayOut/ContactUs'
import { Faq } from '@/components/LayOut/Faq'
import { Hero } from '@/components/LayOut/Hero'

export default function Home() {
  return (
    <div>
        <Hero></Hero>   
        <ChoseSection></ChoseSection>
        <ContactUS></ContactUS>
        <Faq></Faq>
    </div>
  )
}
