import React from 'react'

function LoginPage() {
  return (
    <div className='mt-32 w-[1368px] h-[620px]  mx-auto  flex justify-center py-6'>
            <div className="card lg:card-side bg-base-100 border shadow-xl w-[1362px] ">
                <div className="card-body  w-[681px] p-16  flex  ">
                    <div className='mt-16'>
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
                <figure>
                    <img
                        src="https://images.pexels.com/photos/25731744/pexels-photo-25731744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Album"
                        className='w-[681px]' />

                </figure>
            </div>

        </div>
  )
}

export default LoginPage
