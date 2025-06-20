import { Section } from 'lucide-react'
import React from 'react'
import HeroSectionTextHover from './mage-ui/hero/hero-section-text-hover'
import GenerateInput from './GenerateInput'
import { Button } from './ui/button';

type SuggestionText = {
  label: string;
  text: string;
};

const suggestionBtnText: SuggestionText[] = [
  {
    label: "Job Application",
    text: "Develop a basic job application form that serves as a one-page solution form collecting essential information from applicants.",
  },
  {
    label: "Registration Form",
    text: "Create a course registration form suitable form any scheool or instituition.",
  },
  {
    label: "Feedback Form",
    text: "Create a client feedback form to gather valuable insights from any clients.",
  },
];

const HeroSection = () => {
  return (
    <section className="py-12 px-4">
      <div className='relative'>
        <div className="absolute inset-0 blur-2xl opacity-50 z-[-1] bg-gradient-to-tr from-stone-100 via-amber-100 to-yellow-400" />
        <div className='container mx-auto text-center relative z-10 px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>Build Beautiful, Intelligent Forms in a Click</h1>
          <HeroSectionTextHover />
        </div>
      </div>
      
      <div className="container mx-auto mt-12 max-w-4xl">
        <GenerateInput/>
        
        <div className='flex flex-wrap justify-center gap-3 mt-6'>
          {suggestionBtnText.map((item: SuggestionText, index: number) => (
            <Button 
              className='rounded-full h-10 px-6 whitespace-nowrap' 
              variant="outline" 
              key={index}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection