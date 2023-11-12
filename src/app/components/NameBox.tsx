import React from 'react'

function NameBox() {
  return (
    <div 
    className='flex-1 text-center rounded-[4px]'
    style = {{
        backgroundImage:`url('/namePanel.png')`,
        backgroundColor : "#18181B",
        objectFit : 'contain',
        width : "full",
        height : '32px',
        backgroundRepeat : 'no-repeat'
    }}
    >
        <p className='text-yellow-500 font-medium'>Salveyla</p>
    </div>
  )
}

export default NameBox