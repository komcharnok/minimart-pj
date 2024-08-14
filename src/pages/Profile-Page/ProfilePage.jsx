// components 
import PvData from '../../components/Profile/PrivateData/PvData';
import Money from '../../components/Profile/Money/Money';
import Listorder from '../../components/Profile/ListOrder/Listorder';
import Statustran from '../../components/Profile/StatusTran/Statustran';

import { useState } from 'react'

function ProfilePage() {
  const [opentap, setOpentap] = useState('money');
  return (
    <div className='mt-32 xl:w-[1368px]     mx-auto'>
      <div className='sm:flex-row xl:flex xl:justify-between xl:py-6'>
        <div className='sm:flex-row  '>
          <div className='flex justify-center'>
            <div className='flex flex-col items-center w-full mx-auto bg-white  gap-3 border-b pb-8 xl:flex-row xl:w-[380px]'>
              <div className="avatar">
                <div className="w-44 sm:w-44 lg:w-60 xl:w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className='flex flex-col justify-between my-2 sm:text-center xl:text-start'>
                <div>
                  <h1 className='sm:text-3xl text-xl font-semibold'>ร้านทศกัณ</h1>
                  <p className='mt-2'>นายทศกัณ มานะ</p>
                </div>
                <p className='text-black text-xs font-light'>สมัครวันที่: 16/07/2567</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center mt-4 sm:flex sm:flex-col sm:items-center sm:px-4 xl:w-[380px] xl:flex xl:flex-col xl:items-start gap-2'>
            <btn onClick={() => setOpentap('money')} className={`sm:btn sm:btn-active sm:w-[300px] btn btn-active w-[300px] sm:rounded-3xl rounded-3xl xl:w-full  cursor-pointer   h-[54px]  flex items-center text-xl `}>ยอดเงินคงเหลือ</btn>
            <btn onClick={() => setOpentap('datapv')} className={`sm:btn sm:btn-active sm:w-[300px] btn btn-active w-[300px] sm:rounded-3xl rounded-3xl xl:w-full  cursor-pointer   h-[54px]  flex items-center text-xl `}>ข้อมูลส่วนตัว</btn>
            <btn onClick={() => setOpentap('order')} className={`sm:btn sm:btn-active sm:w-[300px] btn btn-active w-[300px] sm:rounded-3xl rounded-3xl xl:w-full  cursor-pointer   h-[54px]  flex items-center text-xl `}>รายการคำสั่งซื้อ</btn>
            <btn onClick={() => setOpentap('checkstatus')} className={`sm:btn sm:btn-active sm:w-[300px] btn btn-active w-[300px] sm:rounded-3xl rounded-3xl xl:w-full  cursor-pointer   h-[54px]  flex items-center text-xl  `}>ตรวจสอบสถานะการจัดส่ง</btn>
            <btn className={`sm:btn sm:btn-warning sm:w-[300px] btn btn-warning w-[300px] sm:rounded-3xl rounded-3xl xl:w-full  cursor-pointer   h-[54px]  flex items-center text-xl `}>ออกจากระบบ</btn>
          </div>

        </div>
        <div className='flex justify-center'>
          <div className='w-full sm:w-[400px] lg:w-[900px] xl:w-[973px] h-[439px]  mt-4 bg-white rounded-2xl shadow-xl border'>
            {/* ยอดดเงินคงเหลือ */}
            <Money opentap={opentap} />

            {/* ข้อมูลส่วนตัว */}
            <PvData opentap={opentap} />

            {/* รายการคำสั่งซื้อ */}
            <Listorder opentap={opentap} />

            {/* ตรวจสอบสถานะการจัดส่ง */}
            <Statustran opentap={opentap} />
          </div>
        </div>



      </div>
    </div>
  )
}

export default ProfilePage
