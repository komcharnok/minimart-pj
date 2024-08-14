import React from 'react'

function Footer() {
  return (
    <div className='bg-yellow-300 h-[293px] w-auto flex items-center mt-16'>
      <div className='w-[1804px] h-[165px]  mx-auto flex flex-col justify-center'>
        <div className='flex items-start justify-center gap-5 border-b-1 h-[82px] mt-2'>
         <ul className='flex gap-16 font-semibold'>
          <li>นโยบายการใช้คุ๊กกี้</li>
          <li>การตั้งค่าคุ๊กกี้</li>
          <li>ข้อกำหนดและเงื่อนไข</li>
          <li>เข้าร่วม M-minimart เป็นผู้ขาย</li>
         </ul>
        </div>
        <div className='border-gray-400 border-b'>
        </div>
        <div className='flex items-end justify-center h-[82px] mb-2'>
          <p className='texl-xs'>ลิขสิทธิ์ © 2024 M-minimart สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
