import CartSum from '../../components/Cart/CartSum'
import Cartlist from '../../components/Cart/Cartlist'
import React from 'react'

function CartPage() {
  return (
    <div className=' mt-28  xl:w-[1368px] sm:w-[414px] lg:w-[1141px]     mx-auto '>
      <div className='sm:px-4 xl:px-0'>
        <h1 className='text-4xl font-bold'>ตะกร้าสินค้า</h1>
        <div className='xl:w-[1014px] lg:w-[790px] flex justify-between  mt-6 text-xl'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            <h1 className='sm:text-[16px] lg:text-xl'>เลือกรายการสินค้า</h1>
          </div>
          <btn className='hover:text-red-600 cursor-pointer sm:text-[16px] lg:text-xl'>ลบรายการสินค้า</btn>
        </div>
        <div className='lg:flex lg:justify-between mt-6'>
          <div className=' rounded-xl border lg:w-[1014px] h-auto  p-4 '>

            {/* สินค้าในตะกร้า */}
            {/* <Cartlist /> */}

            {/* ไม่มีสินค้า */}
            <div className='  flex items-center  justify-between border rounded-xl shadow-md  p-8 '>
              <h1 className='sm:text-xl lg:text-3xl '>ไม่มีสินค้าในตะกร้า</h1>              
            </div>
          </div>

          {/* สรุปคำสั่งซื้อ */}
          <CartSum />

        </div>
      </div>
    </div>
  )
}

export default CartPage
