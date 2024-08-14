import React, { useState } from 'react';

const category = [
    { id: 1, title: "อาหารและเครื่องดื่ม", items: ["อาหารสด", "อาหารแห้ง", "เครื่องดื่ม", "ขนม"] },
    { id: 2, title: "ของใช้ส่วนตัว", items: ["ผลิตภัณฑ์อาบน้ำ", "เครื่องสำอาง", "ผลิตภัณฑ์ดูแลเส้นผม", "ผลิตภัณฑ์ดูแลผิว"] },
    { id: 3, title: "ของใช้ในบ้าน", items: ["อุปกรณ์ทำความสะอาด", "อุปกรณ์ครัว", "อุปกรณ์ตกแต่งบ้าน", "เครื่องใช้ไฟฟ้า"] },
    { id: 4, title: "เสื้อผ้า", items: ["เสื้อ", "กางเกง", "ชุดชั้นใน", "ถุงเท้า", "รองเท้า", "เครื่องประดับ"] },
    { id: 5, title: "อุปกรณ์อิเล็กทรอนิกส์", items: ["คอมพิวเตอร์", "อุปกรณ์เสริม"] },
    { id: 6, title: "กีฬาและนันทนาการ", items: ["อุปกรณ์กีฬา", "อุปกรณ์ออกกำลังกาย", "ของเล่น"] },
    { id: 7, title: "สินค้าสำหรับเด็ก", items: ["เสื้อผ้าเด็ก", "ของเล่นเด็ก", "อุปกรณ์สำหรับเด็ก", "อาหารเด็ก"] },
    { id: 8, title: "ยาและเวชภัณฑ์", items: ["ยาสามัญประจำบ้าน", "ยาสมุนไพร", "อาหารเสริม"] },
    { id: 9, title: "สินค้าอื่นๆ", items: ["สินค้าเบ็ดเตล็ด", "เครื่องมือช่าง", "สินค้าสำหรับสัตว์เลี้ยง", "อุปกรณ์งาน DIY"] },
]

function Catedropdown() {
    const [subMenuVisible, setSubMenuVisible] = useState(null);

    const handleMouseEnter = (index) => setSubMenuVisible(index);
    const handleMouseLeave = () => setSubMenuVisible(null);

    return (
        <div className='fixed top-0 left-0 z-50 h-[74px] w-full flex items-center border-y  bg-white shadow-md mt-24'>
            <div className='w-[1362px] mx-auto '>
                <div className='relative'>
                    <div className="dropdown dropdown-right relative">
                        <h2
                            tabIndex={0}
                            role="button"
                            className="text-xl "
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                        >
                            หมวดหมู่สินค้า
                        </h2>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[281px] h-auto p-4 shadow ml-2"
                            onMouseEnter={() => handleMouseEnter(0)}
                        // onMouseLeave={handleMouseLeave}
                        >

                            <div className='mb-2'>
                                <p>หมวดหมู่ทั้งหมวด</p>
                            </div>
                            <div className=''>
                                {category.map(category => (
                                    <li
                                        key={category.id}
                                        tabIndex={category.id}
                                        role="button"
                                        className='border-b relative'
                                        onMouseEnter={() => handleMouseEnter(category.id)}
                                    // onMouseLeave={handleMouseLeave}
                                    >
                                        <a className='flex justify-between items-center'>
                                            <div className='flex items-center gap-2'>
                                                <img src="https://alphabetstu.weebly.com/uploads/5/4/6/5/54650517/9235940_orig.jpg" alt="food" className='w-[46px] h-[46px] rounded-md' />
                                                <p>{category.title}</p>
                                            </div>
                                            <p>3</p>
                                        </a>
                                        <ul
                                            className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ml-5 absolute top-0 left-full ${subMenuVisible === category.id ? 'block' : 'hidden'}`}
                                            onMouseEnter={() => handleMouseEnter(category.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {category.items.map((item, index) => (
                                                <li key={index}><a>{item}</a></li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catedropdown;
