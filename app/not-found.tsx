import React from 'react'

type Props = {}

const PageNotFound= (props: Props) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
    </div>
  )
}

export default PageNotFound