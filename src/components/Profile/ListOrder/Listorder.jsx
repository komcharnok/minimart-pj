import React from 'react'

function Listorder({ opentap }) {
    return (
        <>
            {opentap === 'order' && (
                <div className='w-[973px] h-[439px]  rounded-2xl shadow-xl'>
                    <div className=''>
                        <div className=''>
                            <div className='pt-6 px-6'>
                                <h1>รายการคำสั่งซื้อ</h1>
                            </div>
                            <div className=' border-b-2 pb-4'>
                                <div className='flex justify-between mt-6 px-4'>
                                    <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center  `}>ที่ต้องชำระ</btn>
                                    <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center  `}>กำลังเตรียมพัสดุ</btn>
                                    <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center  `}>กำลังจัดส่ง</btn>
                                    <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center  `}>จัดส่งสำเร็จ</btn>
                                    <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center  `}>ประวัติการสั่งซื้อ</btn>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Listorder
