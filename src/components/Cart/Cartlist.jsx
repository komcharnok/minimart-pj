import React from 'react'

function Cartlist() {
    return (
        <div className='  flex items-center sm:gap-2 lg:gap-0 justify-between border rounded-xl shadow-md p-4 mt-4 mb-4'>
            <div className='flex items-center gap-4'>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                <div className='border rounded-xl'>
                    <img src="https://officework.co.th/upload/product/1041-0002-01.JPG" alt="ss" className='lg:w-[100px] lg:h-[100px] sm:w-[130px]' />
                </div>
            </div>
            <div className='flex flex-col justify-between  h-[100px] py-2'>
                <p className='sm:text-xs lg:text-xl'>น้ำยาล้างจาน ซันไลเลม่อน แบบถุง 500 มล.</p>
                <p className='flex gap-2 items-center'>
                    <span className='font-semibold lg:text-xl'>$99.00</span>
                    <span className='font-semibold lg:text-xl text-orange-500'>$89.00</span>
                </p>
                <div className="lg:hidden flex items-center">
                    <button className=" btn-outline w-[30px] h-[30px] border border-gray-300 rounded-l-lg">+</button>
                    <input
                        className="text-center w-[39px] h-[30px] border-t border-b border-gray-300 outline-none"
                        type="text"
                        value="1"
                    />
                    <button className=" btn-outline w-[30px] h-[30px] border border-gray-300 rounded-r-lg">-</button>
                </div>
            </div>

            {/* respon lg xl */}
            <div className="sm:hidden lg:block flex items-center">
                <button className=" btn-outline w-[44px] h-[40px] border border-gray-300 rounded-l-lg">+</button>
                <input
                    className="text-center w-[49px] h-[40px] border-t border-b border-gray-300 outline-none"
                    type="text"
                    value="1"
                />
                <button className=" btn-outline w-[44px] h-[40px] border border-gray-300 rounded-r-lg">-</button>
            </div>


            {/* respon lg xl */}
            <div className='sm:hidden lg:block'>
                <h1 className='lg:text-2xl font-bold'>$99.00</h1>
            </div>
        </div>
    )
}

export default Cartlist
