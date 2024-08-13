import React from 'react'

function Cartlist() {
    return (
        <div className='  flex items-center justify-between border rounded-xl shadow-md p-4 mt-4 mb-4'>
            <div className='flex items-center gap-4'>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                <div className='border rounded-xl'>
                    <img src="https://officework.co.th/upload/product/1041-0002-01.JPG" alt="ss" className='w-[100px] h-[100px]' />
                </div>
            </div>
            <div className='flex flex-col justify-between  h-[100px] py-2'>
                <p>น้ำยาล้างจาน ซันไลเลม่อน แบบถุง 500 มล.</p>
                <p className='flex gap-2 items-center'>
                    <span className='font-semibold'>$99.00</span>
                    <span className='font-semibold text-xl text-orange-500'>$89.00</span>
                </p>
            </div>
            <div className="flex items-center">
                <button className=" btn-outline w-[44px] h-[40px] border border-gray-300 rounded-l-lg">+</button>
                <input
                    className="text-center w-[49px] h-[40px] border-t border-b border-gray-300 outline-none"
                    type="text"
                    value="1"
                />
                <button className=" btn-outline w-[44px] h-[40px] border border-gray-300 rounded-r-lg">-</button>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>$99.00</h1>
            </div>
        </div>
    )
}

export default Cartlist
