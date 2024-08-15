import React from 'react'
import Banner from './../../components/Home/ฺฺBanner/Banner';
import Catelist from './../../components/Home/Category/Category-list/Catelist';
import ProductForyou from './../../components/Home/Product-foryou/ProductForyou';
import Catedropdown from '../../components/Home/Category/Category-dropdown/Catedropdown';

function HomePage() {
  return (
    <div className='mt-28  xl:w-[1368px] sm:w-[414px] lg:w-[1141px] mx-auto'>
      <Catedropdown />
      <div className=''>
        <Banner />
        <Catelist />
        <ProductForyou />
      </div>
    </div>
  )
}

export default HomePage
