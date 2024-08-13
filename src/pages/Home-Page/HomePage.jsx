import React from 'react'
import Banner from './../../components/Home/ฺฺBanner/Banner';
import Catelist from './../../components/Home/Category/Category-list/Catelist';
import ProductForyou from './../../components/Home/Product-foryou/ProductForyou';
import Catedropdown from '../../components/Home/Category/Category-dropdown/Catedropdown';

function HomePage() {
  return (
    <div>
      <Catedropdown />
      <div className='max-w-[1362px] mx-auto '>
        <Banner />
        <Catelist />
        <ProductForyou />
      </div>
    </div>
  )
}

export default HomePage
