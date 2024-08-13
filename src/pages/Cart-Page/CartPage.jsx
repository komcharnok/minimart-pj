import CartSum from '../../components/Cart/CartSum'
import Cartlist from '../../components/Cart/Cartlist'
import React from 'react'

function CartPage() {
  return (
    <div className=' mt-32  w-[1368px] h-auto mx-auto'>
      <h1 className='text-4xl font-bold'>ตะกร้าสินค้า</h1>
      <div className=''>
        <div className='w-[1014px] flex justify-between  mt-6 text-xl'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            <h1>เลือกรายการสินค้า</h1>
          </div>
          <btn className='hover:text-red-600 cursor-pointer'>ลบรายการสินค้า</btn>
        </div>
        <div className='flex justify-between mt-6'>
          <div className=' rounded-xl border w-[1014px] h-auto  px-4 '>

            {/* สินค้าในตะกร้า */}
            <Cartlist/>

            {/* ไม่มีสินค้า */}
            {/* <div className='  flex items-center justify-between border rounded-xl shadow-md  p-8 mt-4'>
              <h1 className='text-3xl'>ไม่มีสินค้าในตะกร้า</h1>              
            </div> */}

          </div>

          {/* สรุปคำสั่งซื้อ */}
          <CartSum/>

        </div>
      </div>
    </div>
  )
}

export default CartPage
