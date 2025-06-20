import { Section } from 'lucide-react'
import React from 'react'
import HeroSectionTextHover from './mage-ui/hero/hero-section-text-hover'

const HeroSection = () => {
  return (
    <section >
        <div className='container mx-auto text-center relative'>
            <h1 className='text-4xl font-bold'>Build Beautiful, Intelligent Forms in a Click</h1>
            <HeroSectionTextHover />
        </div>
    </section>
  )
}

export default HeroSection