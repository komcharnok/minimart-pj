import React from 'react'

function Money({opentap}) {
    return (
    <>
        { opentap === 'money' && (
            <div className='w-[973px] h-[439px] bg-white rounded-2xl shadow-xl'>
                <div className='p-6'>
                    <div className='flex items-center justify-between'>
                        <h1>ยอดดเงินคงเหลือ</h1>
                        <div className='flex gap-2'>

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
                                    <div className='flex gap-2 mt-8'>
                                        <button href="#" className="btn btn-warning w-[300px] rounded-3xl ">ถอนเงิน!</button>
                                        <div className="">
                                            <a href="#" className="btn btn-error w-[160px] rounded-3xl">ยกเลิก</a>
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
                                    <div className='flex gap-2 mt-8'>
                                        <button href="#" className="btn btn-warning w-[300px] rounded-3xl ">ถอนเงิน!</button>
                                        <div className="">
                                            <a href="#" className="btn btn-error w-[160px] rounded-3xl">ยกเลิก</a>
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
                                    <div className='flex gap-2 mt-8'>
                                        <button href="#" className="btn btn-warning w-[300px] rounded-3xl ">เติมเงิน!</button>
                                        <div className="">
                                            <a href="#" className="btn btn-error w-[160px] rounded-3xl">ยกเลิก</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' mt-4 text-3xl font-bold'>
                        <h1>$99999</h1>
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <table className="table table-xs">
                            <thead>
                                <tr className=' text-black'>
                                    <th></th>
                                    <th className='text-sm font-normal'>ช่วงเวลา</th>
                                    <th className='text-sm font-normal'>รายการ</th>
                                    <th className='text-sm font-normal'>ยอดรายการ</th>
                                    <th className='text-sm font-normal'>สถานะ</th>
                                    <th className='text-sm font-normal'>ยอดคงเหลือ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>25 ก.ค 2567</td>
                                    <td>เติมเงินเข้าบัญชี</td>
                                    <td className='text-green-600'>+ $99</td>
                                    <td>
                                        <span className="badge badge-sm bg-green-500 text-white">Sucess</span>
                                    </td>
                                    <td>$9999</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>24 ก.ค 2567</td>
                                    <td>ซื้อสินค้า</td>
                                    <td className='text-red-500'>- $99</td>
                                    <td>
                                        <span className="badge badge-sm bg-green-500 text-white">Sucess</span>
                                    </td>
                                    <td>$9999</td>

                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>16 ก.ค 2567</td>
                                    <td>เติมเงินเข้าบัญชี</td>
                                    <td className='text-green-600'>+ $99</td>
                                    <td>
                                        <span className="badge badge-sm bg-green-500 text-white">Sucess</span>
                                    </td>
                                    <td>$9999</td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        )}
    </>
  )
}

export default Money
