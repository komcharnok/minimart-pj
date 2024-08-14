import Pay from '../../components/ConfirmOrder/Pay'
import Address from '../../components/ConfirmOrder/Address'
import ListProduct from '../../components/ConfirmOrder/ListProduct'
import React from 'react'

function ConfirmorderPage() {
  return (
    <div className='mt-32  w-[1368px] h-auto mx-auto '>
      <h1 className='text-4xl font-bold'>ยืนยันคำสั่งซื้อ</h1>
      <ListProduct/>
      <Address/>
      <Pay/>
    </div>
  )
}

export default ConfirmorderPage
