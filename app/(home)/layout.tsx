import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div className='border-b'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto py-2'>
                <Logo/>
                <div className='flex items-center gap-2'>
                    <Button variant="link" className='text-sm'>Dashboard </Button>
                    <UserButton/>
                </div>
            </nav>
        </div>
    {children}
    </div>
    
  )
}

export default layout