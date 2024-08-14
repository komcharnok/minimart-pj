import React from 'react'

function Pay() {
  return (
    <div className='mt-6 flex justify-end '>
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
  )
}

export default Pay
