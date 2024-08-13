// components 
import PvData from '../../components/Profile/PrivateData/PvData';
import Money from '../../components/Profile/Money/Money';
import Listorder from '../../components/Profile/ListOrder/Listorder';
import Statustran from '../../components/Profile/StatusTran/Statustran';

import { useState } from 'react'

function ProfilePage() {
  const [opentap, setOpentap] = useState('money');
  return (
    <div className='mt-32  w-[1368px] mx-auto'>
      <div className='flex justify-between py-6'>
        <div>
          <div className='flex gap-3 border-b-2 pb-8  w-[380px]'>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className='flex flex-col justify-between my-2'>
              <div>
                <h1 className='text-xl font-semibold'>ร้านทศกัณ</h1>
                <p className=''>นายทศกัณ มานะ</p>
              </div>
              <p className='text-xs'>สมัครวันที่: 16/07/2567</p>
            </div>
          </div>
          <div className='mt-4 w-[380px] text-start'>
            <btn onClick={() => setOpentap('money')} className={`cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl ${opentap === 'money' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>ยอดดเงินคงเหลือ</btn>
            <btn onClick={() => setOpentap('datapv')} className={`cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl first-line:${opentap === 'datapv' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>ข้อมูลส่วนตัว</btn>
            <btn onClick={() => setOpentap('order')} className={`cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl first-line:${opentap === 'order' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>รายการคำสั่งซื้อ</btn>
            <btn onClick={() => setOpentap('checkstatus')} className={`cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl first-line:${opentap === 'checkstatus' ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>ตรวจสอบสถานะการจัดส่ง</btn>
            <btn className={`cursor-pointer  hover:text-yellow-500 h-[54px]  flex items-center text-xl `}>ออกจากระบบ</btn>
          </div>
        </div>

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
  )
}

export default ProfilePage
