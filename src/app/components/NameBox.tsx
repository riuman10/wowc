import React from 'react'

function NameBox() {
  return (
    <div 
    className='flex-1 text-center bg-[#2F2C27] py-1 rounded-[4px]'
    style = {{
        backgroundImage:`url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`,
        backgroundColor : "#18181B",
        borderTop : '2px groove #262626',
        borderLeft : '2px ridge #262626',
        borderRight : '2px ridge #262626',
        borderBottom : '2px ridge #262626',
    }}
    >
        <p className='text-yellow-500 font-medium'>Salveyla</p>
    </div>
  )
}

export default NameBox