import React, { useState } from 'react';

const itemsList = [
    { id: 1, name: "น้ำยาล้างจาน ซันไลเลม่อน แบบถุง 500 มล.", image: "https://officework.co.th/upload/product/1041-0002-01.JPG" },
    { id: 2, name: "ของใช้ส่วนตัว", image: "https://officework.co.th/upload/product/1041-0002-01.JPG" },
    { id: 3, name: "ของใช้ส่วนตัว", image: "https://officework.co.th/upload/product/1041-0002-01.JPG" },
    { id: 4, name: "ของใช้ส่วนตัว", image: "https://officework.co.th/upload/product/1041-0002-01.JPG" },
    { id: 5, name: "ของใช้ส่วนตัว", image: "https://officework.co.th/upload/product/1041-0002-01.JPG" },
];

function ProductForyou() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPageSm = 2;
    const itemsPerPageLg = 4;
    const isSmallScreen = window.innerWidth < 1141;
    const itemsPerPage = isSmallScreen ? itemsPerPageSm : itemsPerPageLg;
    const totalItems = itemsList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const currentItems = itemsList.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='mt-8'>
            <div>
                <p className='sm:px-4 xl:px-0 font-semibold'>สินค้าพิเศษสำหรับคุณ</p>
                <div className='flex justify-between items-end sm:px-4 xl:px-0 sm:gap-2 sm:mt-2 xl:mt-0 lg:gap-0'>
                    <div>
                        <h1 className='text-black sm:text-[12px] lg:text-4xl font-semibold'>
                            คัดสรรมาเพื่อตอบโจทย์ <span className='text-orange-400'>"ทุกความต้องการ"</span> ของคุณ
                        </h1>
                    </div>
                    <div className='flex gap-3'>
                        <button className='btn btn-outline' onClick={handlePrevious}>
                            -
                        </button>
                        <button className='btn btn-outline' onClick={handleNext}>
                            +
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:px-4 xl:px-0'>
                        {currentItems.map((item) => (
                            <div key={item.id} className='bg-white rounded-xl border shadow-2xl'>
                                <figure className='border-b'>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='sm:w-[183px] sm:h-[218px] lg:w-[266px] lg:h-[250px] xl:w-[331px] xl:h-[318px]  rounded-t-xl object-cover'
                                    />
                                </figure>
                                <div className="p-3">
                                    <div className='h-[110px]'>
                                        <div className='h-[60px]'>
                                            <p className="text sm:text-[14px] lg:text-xl font-light">{item.name}</p>
                                        </div>
                                        <div className='text-end flex items-center sm:justify-center lg:justify-end gap-2 mt-6'>
                                            <p className='font-semibold '>$99.00</p>
                                            <p className='font-semibold text-xl'>$89.00</p>
                                        </div>
                                    </div>
                                    <div className="card-actions flex items-center sm:justify-center xl:justify-between mt-6">
                                        <div className="flex items-center">
                                            <button className="btn-outline w-[44px] h-[40px] border border-gray-300 rounded-l-lg">+</button>
                                            <input
                                                className="text-center w-[49px] h-[40px] border-t border-b border-gray-300 outline-none"
                                                type="text"
                                                value="1"
                                            />
                                            <button className="btn-outline w-[44px] h-[40px] border border-gray-300 rounded-r-lg">-</button>
                                        </div>
                                        <button className="btn btn-warning w-[141px] rounded-3xl">เพิ่มลงตะกร้า</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductForyou;
