import React from 'react'

function CartSum() {
    return (
        <div className='flex justify-center sm:mt-4'>
            <div className='border w-[318px] h-[361px] p-4 rounded-xl'>
                <h1 className='font-semibold'>สรุปคำสั่งซื้อ</h1>
                <div className='flex pb-4 border-b mt-4 justify-between '>
                    <p>ราคา</p>
                    <p>$178</p>
                </div>
                <div className='font-semibold mt-4 flex justify-between'>
                    <h1>ยอดสุทธิ</h1>
                    <p>$178</p>
                </div>
                <p className='text-xs'>ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว</p>
                <div className='flex flex-col gap-3 mt-20'>
                    <button className='btn btn-warning w-full rounded-3xl'>ชำระเงิน</button>
                    <button className='btn btn-outline w-full rounded-3xl'>เลือกสินค้าต่อ</button>
                </div>
            </div>
        </div>
    )
}

export default CartSum
