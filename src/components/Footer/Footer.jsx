import React from 'react'

function Footer() {
  return (
    <div className='bg-yellow-300 lg:py-16 xs:py-8 w-full flex items-center mt-16'>
      <div className='mx-auto flex flex-col justify-center'>
        <div className='flex  items-start justify-center gap-5 border-b-1 h-[82px] mt-2'>
         <ul className='lg:flex lg:gap-16 font-semibold  border-b  border-black pb-6 text-center '>
          <li>นโยบายการใช้คุ๊กกี้</li>
          <li>การตั้งค่าคุ๊กกี้</li>
          <li>ข้อกำหนดและเงื่อนไข</li>
          <li>เข้าร่วม M-minimart เป็นผู้ขาย</li>
         </ul>
        </div>
        
        <div className='flex items-end justify-center h-[82px] mb-2'>
          <p className='texl-xs'>ลิขสิทธิ์ © 2024 M-minimart สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
