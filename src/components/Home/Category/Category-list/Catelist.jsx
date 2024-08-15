import React, { useState } from 'react';

const itemsList = [
    { id: 1, name: "อาหารและเครื่องดื่ม", image: "https://contents.mediadecathlon.com/p2426985/k$bbcddd9478ef14df6702955943051249/fold-down-fitness-bag-30l-black-domyos-8200579.jpg" },
    { id: 2, name: "ของใช้ส่วนตัว", image: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, name: "ของใช้ในบ้าน", image: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, name: "เสื้อผ้า", image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, name: "อุปกรณ์อิเล็กทรอนิกส์", image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, name: "กีฬาและนันทนาการ", image: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, name: "สินค้าสำหรับเด็ก", image: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, name: "ยาและเวชภัณฑ์", image: "https://contents.mediadecathlon.com/p2426985/k$bbcddd9478ef14df6702955943051249/fold-down-fitness-bag-30l-black-domyos-8200579.jpg" },
    { id: 9, name: "สินค้าอื่นๆ", image: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

function Catelist() {
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
            <div className='flex justify-between items-center sm:px-4 xl:px-0'>
                <h1 className='sm:text-[16px] lg:text-4xl font-semibold'>หมวดหมู่สินค้า</h1>
                <div className='flex gap-3'>
                    <button
                        className='btn btn-outline'
                        onClick={handlePrevious}
                        // disabled={currentPage === 0}
                    >
                        -
                    </button>
                    <button
                        className='btn btn-outline'
                        onClick={handleNext}
                        // disabled={currentPage === totalPages - 1}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className='mt-6'>
                <ul className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:w-[268] lg:h-[185px]  sm:px-4 xl:px-0 '>
                    {currentItems.map((item) => (
                        <li key={item.id} className='relative border rounded-lg shadow-2xl'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='sm:w-[183px] sm:h-[183px] lg:w-[268px] lg:h-[185px] xl:w-[333px] xl:h-[187px] object-cover rounded-lg'
                            />
                            <p className='absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white p-4 font-light'>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Catelist;
