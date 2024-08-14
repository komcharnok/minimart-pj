import React from 'react'

function Money({ opentap }) {
    return (
        <>
            {opentap === 'money' && (
                <div className='flex justify-center '>
                    <div className='w-full sm:w-[400px] lg:w-[900px] xl:w-[973px] h-[439px]  mt-4 bg-white rounded-2xl shadow-xl'>
                        <div className='p-6'>
                            <div className='flex justify-between xl:hidden'>
                                <h1>ยอดเงินคงเหลือ</h1>
                                <h1 className='xl:hidden font-semibold'>$99999</h1>
                            </div>
                            <div className='flex items-center justify-between '>
                                <h1 className='hidden xl:block xl:w-[150px]'>ยอดเงินคงเหลือ</h1>
                                <div className='flex justify-between  mt-4  gap-2 sm:flex sm:justify-center sm:w-full sm:mt-4 lg:justify-end xs:flex xs:justify-center xs:w-full '>

                                    {/* dialogถอนเงิน  บัญชี */}
                                    <a href="#my_modal_8" className="btn btn-outline">ถอนเงิน</a>
                                    <div className="modal" role="dialog" id="my_modal_8">
                                        <div className="modal-box">
                                            <h3 className="text-lg font-bold">ถอนเงินออกจากบัญชี!</h3>
                                            <p className="py-4">ช่องทางการโอนเงิน</p>

                                            {/* button เลือกวิธีถอนเงิน  */}
                                            <div className='flex gap-4 justify-center'>
                                                <div className='flex '>
                                                    <a href="#my_modal_8" className="btn btn-sm">บัญชี</a>
                                                </div>
                                                <div className='flex '>
                                                    <a href="#my_modal_9" className="btn btn-sm">พร้อมเพย์</a>
                                                </div>
                                            </div>
                                            <div className='mt-6'>
                                                <p>ธนาคาร</p>
                                                <select className="select select-bordered w-full  mt-2 rounded-3xl ">
                                                    <option disabled selected>Who shot first?</option>
                                                    <option>Han Solo</option>
                                                    <option>Greedo</option>
                                                </select>
                                            </div>
                                            <div className='mt-6'>
                                                <p>หมายเลขบัญชี</p>
                                                <input type="text" placeholder="กรอกหมายเลขบัญชี" className="input input-bordered w-full rounded-3xl mt-2" />
                                            </div>
                                            <div className='mt-6'>
                                                <p>จำนวนเงิน</p>
                                                <input type="text" placeholder="กรอกจำนวนเงินที่ต้องการเติม" className="input input-bordered w-full rounded-3xl mt-2" />
                                            </div>

                                            {/* button ถอนเงิน ยกเลิก   */}
                                            <div className='flex sm:justify-center gap-2 mt-8'>
                                                <button href="#" className="btn btn-warning lg:w-[300px] w-[100px] rounded-3xl ">ถอนเงิน!</button>
                                                <div className="">
                                                    <a href="#" className="btn btn-error lg:w-[160px] w-[100px] rounded-3xl">ยกเลิก</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* dialog พร้อมเพย์ */}
                                    <div className="modal" role="dialog" id="my_modal_9">
                                        <div className="modal-box">
                                            <h3 className="text-lg font-bold">พร้อมเพย์!</h3>
                                            <p className="py-4">ช่องทางการโอนเงิน</p>

                                            {/* button เลือกวิธีถอนเงิน  */}
                                            <div className='flex gap-4 justify-center'>
                                                <div className='flex '>
                                                    <a href="#my_modal_8" className="btn btn-sm">บัญชี</a>
                                                </div>
                                                <div className='flex '>
                                                    <a href="#my_modal_9" className="btn btn-sm">พร้อมเพย์</a>
                                                </div>
                                            </div>
                                            <div className='mt-6'>
                                                <p>หมายเลขพร้อมเพย์</p>
                                                <input type="text" placeholder="กรอกหมายเลขบัญชี" className="input input-bordered w-full rounded-3xl mt-2" />
                                            </div>
                                            <div className='mt-6'>
                                                <p>จำนวนเงิน</p>
                                                <input type="text" placeholder="กรอกจำนวนเงินที่ต้องการเติม" className="input input-bordered w-full rounded-3xl mt-2" />
                                            </div>

                                            {/* button ถอนเงิน ยกเลิก   */}
                                            <div className='flex sm:justify-center gap-2 mt-8'>
                                                <button href="#" className="btn btn-warning lg:w-[300px] w-[100px] rounded-3xl ">ถอนเงิน!</button>
                                                <div className="">
                                                    <a href="#" className="btn btn-error lg:w-[160px] w-[100px] rounded-3xl">ยกเลิก</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dialog เติมเงิน */}
                                    <a href="#my_modal_10" className="btn btn-warning">เติมเงิน</a>
                                    <div className="modal" role="dialog" id="my_modal_10">
                                        <div className="modal-box">
                                            <h3 className="text-lg font-bold">เติมเงินเข้าสู่บัญชี!</h3>

                                            <div className='mt-6'>
                                                <p>ช่องทางการโอนเงิน</p>
                                                <input type="text" placeholder="กรอกหมายเลขบัญชี" className="input input-bordered w-full rounded-3xl mt-3" />
                                            </div>

                                            <div className='mt-6'>
                                                <p>ชำระเงินผ่าน</p>
                                                <div className=' flex p-2 justify-center w-[100px] h-[100px] mt-3 border rounded-2xl hover:bg-gray-200'>
                                                    <button className='flex flex-col items-center mt-2'>
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr57linU9xkNGdKulYaVJ5cMPINfSkd89OIg&s" alt="qr" className='w-[50px] h-[50px]' />
                                                        <p className='mt-1'>คิวอาร์โค๊ด</p>
                                                    </button>

                                                </div>
                                            </div>


                                            {/* button ถอนเงิน ยกเลิก   */}
                                            <div className='flex sm:justify-center gap-2 mt-8'>
                                                <button href="#" className="btn btn-warning lg:w-[300px] w-[100px] rounded-3xl ">ถอนเงิน!</button>
                                                <div className="">
                                                    <a href="#" className="btn btn-error lg:w-[160px] w-[100px] rounded-3xl">ยกเลิก</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className=' mt-4 text-3xl font-bold'>
                                <h1 className='hidden xl:block'>$99999</h1>
                            </div>
                            <div className="overflow-x-auto mt-6">
                                <table className="table table-xs">
                                    <thead>
                                        <tr className=' text-black'>
                                            <th></th>
                                            <th className='lg:text-xl font-normal'>ช่วงเวลา</th>
                                            <th className='lg:text-xl font-normal'>รายการ</th>
                                            <th className='lg:text-xl font-normal'>ยอดรายการ</th>
                                            <th className='lg:text-xl font-normal'>สถานะ</th>
                                            <th className='lg:text-xl font-normal hidden xl:block'>ยอดคงเหลือ</th>
                                            <th className='lg:text-xl font-normal xl:hidden'>ยอด</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td >25 ก.ค 2567</td>
                                            <td>เติมเงินเข้าบัญชี</td>
                                            <td className='text-green-600'>+ $99</td>
                                            <td>
                                                <span className="badge badge-xl bg-green-500 text-white">Sucess</span>
                                            </td>
                                            <td>$9999</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>24 ก.ค 2567</td>
                                            <td>ซื้อสินค้า</td>
                                            <td className='text-red-500'>- $99</td>
                                            <td>
                                                <span className="badge badge-xl bg-green-500 text-white">Sucess</span>
                                            </td>
                                            <td>$9999</td>

                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>16 ก.ค 2567</td>
                                            <td>เติมเงินเข้าบัญชี</td>
                                            <td className='text-green-600'>+ $99</td>
                                            <td>
                                                <span className="badge badge-xl bg-green-500 text-white">Sucess</span>
                                            </td>
                                            <td>$9999</td>

                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default Money
