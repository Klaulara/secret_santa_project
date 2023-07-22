import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-800 rounded-md text-white'>{children}</div>
  )
}

export default Error