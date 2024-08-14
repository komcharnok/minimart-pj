import React from 'react'

function Banner() {
    return (
        <div className='mt-52 flex justify-center mx-auto'>
            <div className="carousel w-[1362px] h-[506px] border rounded-xl ">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://images.pexels.com/photos/13099592/pexels-photo-13099592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full object-cover" />
                </div>
                {/* <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                </div> */}
            </div>
            {/* <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div> */}
        </div>
    )
}

export default Banner
