import React from 'react'

function NameBox() {
  return (
    <div 
    className='flex-1 text-center bg-[#2F2C27] py-1 rounded-md border-2 border-gray-500'
    style = {{
        backgroundImage:`url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`,
        backgroundColor : "#18181B"
    }}
    >
        <p className='text-yellow-500 font-medium'>Salveyla</p>
    </div>
  )
}

export default NameBox