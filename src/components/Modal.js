import React from 'react'

function Modal({ isOpen, onclose, title, children}) {
  if (!isOpen) return null
  return (
    <div className='fixed inset-0 bg-gray-500  bg-opacity-50 flex justify-center items-center z-50 h-screen'>
      <div className='bg-white p-6  rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
        <div className='mb-4'>
          {children}
        </div>
        <button
        onClick={onclose}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal