import React from 'react'

function PvData({ opentap }) {
    return (
        <>
            {opentap === 'datapv' && (
                <>
                    <div className='flex justify-center'>
                        <div className='sm:w-[400px] lg:w-[900px] xl:w-[973px] h-[439px]  mt-4 bg-white rounded-2xl shadow-xl'>
                            <div className='p-6'>
                                <div className='flex justify-between items-center text-xl  '>
                                    <div className="badge badge-secondary badge-outline badge-lg">ข้อมูลส่วนตัว</div>
                                    {/* <h1 className='font-semibold'>ข้อมูลส่วนตัว</h1> */}
                                    <button className=' text-xl hover:text-red-500 cursor-pointer font-bold'>ขอแก้ไขข้อมูล</button>
                                </div>
                                <div className='xl:w-[900px]   flex flex-col gap-3 mt-6 border-b-2 pb-8'>
                                    <div className='flex gap-6'>
                                        <p className='w-[100px]  text-end '>ชื่อร้าน</p>
                                        <p className='font-light'>ร้านทศกัณ</p>
                                    </div>
                                    <div className='flex gap-6'>
                                        <p className='w-[100px]  text-end '>ชื่อเจ้าของร้าน</p>
                                        <p className='font-light'>นายทศกัณ มานะ</p>
                                    </div>
                                    <div className='flex gap-6'>
                                        <p className='w-[100px]  text-end '>เบอร์โทร</p>
                                        <p className='font-light'>067-456-7894</p>
                                    </div>
                                    <div className='flex gap-6'>
                                        <p className='w-[100px]  text-end '>วันที่สมัคร</p>
                                        <p className='font-light'>16 ก.ค 2567</p>
                                    </div>

                                </div>

                                <div className='xl:w-[900px] flex flex-col gap-3 mt-6'>
                                    <div className='flex gap-6'>
                                        <div className="badge badge-accent  badge-outline badge-lg">ที่อยู่ร้าน</div>

                                        {/* ขนาดจอคอม++ */}
                                        <h1 className='text-xl hidden xl:block'>ที่อยู่ร้าน</h1>
                                    </div>

                                    {/* ขนาดจอคอม++ */}
                                    <p className='hidden  lg:block w-full text-start font-light'>ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200</p>

                                    {/* ขนาดจอมือถือ++ */}
                                    <p className='xl:hidden lg:hidden w-auto text-start font-light'>ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ </p>
                                    <p className='xl:hidden lg:hidden w-auto text-start font-light'>ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default PvData
