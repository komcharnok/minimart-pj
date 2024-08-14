import React from 'react'

function Listorder({ opentap }) {
    return (
        <>
            {opentap === 'order' && (
                <>
                    <div className='flex justify-center'>
                        <div className='sm:w-[400px] lg:w-[900px] xl:w-[973px] h-[439px]  mt-4 bg-white rounded-2xl shadow-xl'>
                            <div className=''>
                                <div className=''>
                                    <div className='pt-6 px-4 xs:hidden lg:block'>
                                        <div className="badge badge-secondary badge-outline badge-lg">รายการคำสั่งซื้อ</div>
                                    </div>
                                    <div className='pt-6 px-4 lg:hidden flex justify-center'>
                                        <div className="badge badge-secondary badge-outline badge-lg">รายการคำสั่งซื้อ</div>
                                    </div>
                                    <div className=' border-b pb-4'>
                                        <div className='flex justify-between mt-6 px-4'>
                                            <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center sm:text-xs  lg:text-xl  `}>ที่ต้องชำระ</btn>
                                            <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center sm:text-xs lg:text-xl  `}>กำลังเตรียมพัสดุ</btn>
                                            <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center sm:text-xs lg:text-xl  `}>กำลังจัดส่ง</btn>
                                            <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center sm:text-xs lg:text-xl  `}>จัดส่งสำเร็จ</btn>
                                            <btn className={`cursor-pointer  hover:text-yellow-600   flex items-center sm:text-xs lg:text-xl  `}>ประวัติการสั่งซื้อ</btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Listorder
