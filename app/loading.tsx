import Wrapper from '@/components/global/Wrapper'
import React from 'react'

const loading = (): React.ReactElement => {
  return (
    <Wrapper title="Loading...">
        <div className='flex justify-center items center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    
    </Wrapper>
  )
}

export default loading