import React, { useState } from 'react'
import Modal from './Modal'

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Modal Dialog</h1>
      <button
      onClick={openModal}
      className='px-4 py-3 bg-blue-500 text-white rounded-sm'
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onclose={closeModal} title="Modal Example">
        <p>This is example Modal</p>
      </Modal>
    </div>
  )
}

export default ModalPage