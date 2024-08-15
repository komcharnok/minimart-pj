import React from 'react'

function LoginPage() {
  return (
    <div className='mt-28 xl:w-[1368px] lg:h-[620px] sm:w-[414px] lg:w-[1141px]     mx-auto  flex justify-center py-6 sm:px-4 xl:px-0'>
            <div className="card lg:card-side bg-base-100 border shadow-xl w-[1362px]  ">
                <div className="card-body  xl:w-[681px] p-16  flex  ">
                    <div className='lg:mt-16'>
                        <h2 className="card-title">เข้าสู่ระบบ</h2>
                        <label className="form-control w-full  mt-8">
                            <div className="label">
                                <span className="label-text">อีเมลล์หรือเบอร์โทรศัพท์</span>
                            </div>
                            <input type="text"  className="input input-bordered  rounded-3xl" />
                            <div className="label mt-4">
                                <span className="label-text">รหัสผ่านของคุณ</span>
                            </div>
                            <input type="password"  className="input input-bordered  rounded-3xl" />
                            <button className='btn btn-warning mt-4 rounded-3xl'>เข้าสู่ระบบ</button>
                        </label>
                    </div>
                </div>
                <figure className=''>
                    <img
                        src="https://images.pexels.com/photos/25731744/pexels-photo-25731744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Album"
                        className='w-[681px] sm:hidden lg:block' />

                </figure>
            </div>

        </div>
  )
}

export default LoginPage
