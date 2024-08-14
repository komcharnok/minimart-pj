import React from 'react'

function ListProduct() {
  return (
    <div className='mt-6'>
      <h1 className='text-2xl font-semibold'>รายการสินค้า</h1>
      <div className='  flex items-center justify-between border rounded-xl shadow-md p-4 mt-4 mb-4'>
        <div className='flex items-center gap-4'>
          <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
          <div className='border rounded-xl'>
            <img src="https://officework.co.th/upload/product/1041-0002-01.JPG" alt="ss" className='w-[100px] h-[100px]' />
          </div>
        </div>
        <div className='flex flex-col justify-between  h-[100px] py-2'>
          <p>น้ำยาล้างจาน ซันไลเลม่อน แบบถุง 500 มล.</p>
          <p className='flex gap-2 items-center'>
            <span className='font-semibold'>$99.00</span>
            <span className='font-semibold text-xl text-orange-500'>$89.00</span>
          </p>
        </div>
        <div className="flex items-center">
          x 1
        </div>
        <div>
          <h1 className='text-2xl font-bold'>$99.00</h1>
        </div>
      </div>
    </div>
  )
}

export default ListProduct
