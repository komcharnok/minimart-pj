import React from 'react'

function Address() {
  return (
    <div className='mt-6'>
      <h1 className='text-2xl font-semibold'>ที่อยู่จัดส่ง</h1>
      <div className='  flex items-center  border rounded-xl shadow-md p-4 mt-4 mb-4'>
        <div className='flex justify-between  w-full'>
          <div>
            <span>ชื่อผู้รับ</span> <span className='font-semibold'>นายทศกัณ มานะ</span>
          </div>
          <div>
            <span className='ml-6'>ที่อยู่</span> <span className='font-semibold'>ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200</span>
          </div>
          <div>
            <span>เบอร์โทร</span> <span className='font-semibold'>067-456-7894</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
