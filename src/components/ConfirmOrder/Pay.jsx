import React from 'react'

function Pay() {
  return (
    <>
      {/* respon lg xl */}
      <div className='flex justify-end'>
        <div className='sm:hidden lg:block mt-6'>
          <div className='w-[703px] h-[102px] border bg-white rounded-xl shadow-lg p-4 flex items-center'>
            <div className='flex items-center justify-between  w-full'>
              <div className=' justify-center'>
                <h1 className='font-semibold text-xl'>ยอดสุทธิ</h1>
                <p>ราคานี้รวมภาษีมูลค่าแล้ว</p>
              </div>
              <h1 className='text-xl font-semibold'>$178</h1>
              <button className='btn btn-warning rounded-3xl w-[200px]'>ชำระเงิน</button>
            </div>
          </div>
        </div>
      </div>

      {/* respon sm */}
      <div className=' lg:hidden flex flex-col gap-2'>
        <div className='mt-6 flex  justify-end '>
          <div className='w-[703px] h-[102px] border bg-white rounded-xl shadow-lg p-4 flex items-center'>
            <div className='flex items-center justify-between  w-full'>
              <div className=' justify-center'>
                <h1 className='font-semibold text-xl'>ยอดสุทธิ</h1>
                <p>ราคานี้รวมภาษีมูลค่าแล้ว</p>
              </div>
              <h1 className='text-xl font-semibold'>$178</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='btn btn-warning rounded-l-3xl w-[200px]'>ชำระเงิน</button>
        </div>
      </div>
    </>
  )
}

export default Pay
