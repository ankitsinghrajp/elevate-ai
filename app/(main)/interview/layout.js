import React from 'react'
import { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const interviewLayout = ({children}) => {
  return (
    <div className='px-5'>
        <Suspense
          fallback={<BarLoader className="mt-4" width="100%" color="grey"/>}
        >

        {children}


        </Suspense>
    </div>
  )
}

export default interviewLayout