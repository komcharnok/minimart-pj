import React from 'react'

function ProfilePage() {
  return (
    <div className='mt-32  w-[1368px] mx-auto'>
      <div className='flex justify-between '>
        <div>
          <div className='flex gap-3 border-b-2 pb-8  w-[380px]'>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className='flex flex-col justify-between my-2'>
              <div>
                <h1 className='text-xl font-semibold'>ร้านทศกัณ</h1>
                <p className=''>นายทศกัณ มานะ</p>
              </div>
              <p className='text-xs'>สมัครวันที่: 16/07/2567</p>
            </div>
          </div>
          <div className='mt-8 w-[380px] text-start'>
            <btn value="money" className=' cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl'>ยอดดเงินคงเหลือ</btn>
            <btn value="datapv" className=' cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl'>ข้อมูลส่วนตัว</btn>
            <btn className=' cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl'>รายการคำสั่งซื้อ</btn>
            <btn className=' cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl'>ตรวจสอบสถานะการจัดส่ง</btn>
            <btn className=' cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl'>ออกจากระบบ</btn>
          </div>
        </div>
        <div value="money" className='w-[973px] h-[439px] bg-blue-300 rounded-2xl'>
          <h1></h1>
        </div>
        {/* <div value="datapv" className='w-[973px] h-[439px] bg-green-300 rounded-2xl'>
          <h1></h1>
        </div> */}
      </div>
    </div>
  )
}

export default ProfilePage
