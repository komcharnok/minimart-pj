import Pay from '../../components/ConfirmOrder/Pay'
import Address from '../../components/ConfirmOrder/Address'
import ListProduct from '../../components/ConfirmOrder/ListProduct'
import React from 'react'

function ConfirmorderPage() {
  return (
    <div className='mt-28  xl:w-[1368px] sm:w-[414px] lg:w-[1141px]     mx-auto '>
      <h1 className='sm:text-2xl sm:text-center lg:text-4xl font-bold'>ยืนยันคำสั่งซื้อ</h1>
      <div className='sm:px-4 xl:px-0'>
        <ListProduct />
        <Address />
        <Pay />
      </div>

    </div>
  )
}

export default ConfirmorderPage
