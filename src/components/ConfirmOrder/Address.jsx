import React from 'react'

function Address() {
  return (
    <div className='mt-6'>
      <h1 className='text-2xl font-semibold'>ที่อยู่จัดส่ง</h1>
      <div className='  flex items-center  border rounded-xl shadow-md p-4 mt-4 mb-4'>
        <div className='sm:flex-row lg:flex lg:justify-between  w-full'>

          {/* respon lg,xl */}
          <div className='sm:hidden lg:block'>
            <span>ชื่อผู้รับ</span> <span className='font-semibold'>นายทศกัณ มานะ</span>
          </div>
          <div className='sm:hidden lg:block'>
            <span className='ml-6'>ที่อยู่</span> <span className='font-semibold'>ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200</span>
          </div>
          <div className='sm:hidden lg:block'>
            <span>เบอร์โทร</span> <span className='font-semibold'>067-456-7894</span>
          </div>

          {/* respon sm */}
          <div className='lg:hidden flex  gap-4'>
            <p className='font-semibold  w-12'>ผู้รับ</p> 
            <p className='ml-1'>นายทศกัณ มานะ</p>
          </div>
          <div className='lg:hidden flex gap-4'>
            <p className='w-28 font-semibold '>ที่อยู่</p>
            <p className=''>ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200</p>
          </div>
          <div className='lg:hidden flex gap-3'>
            <span className='font-semibold'>เบอร์โทร</span> <span className=''>067-456-7894</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Address
