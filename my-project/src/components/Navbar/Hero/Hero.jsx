import React from 'react'
import Slider from "react-slick";
import Button from '../Shared/Button';

const Hero = () => {

    const heroslide =[
        {
            id:1,
            img:"https://eshop-tcj.netlify.app/assets/headphone-M8ndZJ0u.png",
            subtitle:"Beats Solo",
            title:'Wireless',
            title2:"virtual",
            description:"lorem his life foreever be changes dolor sit amet, consecutor adispicing elit, sed do eiusmod tempor incidiunt"
        },
        {
            id:2,
            img:"https://eshop-tcj.netlify.app/assets/earphone-gTSt01f7.png",
            subtitle:"Beats Solo",
            title:'Wireless',
            title2:"virtual",
            description:"lorem his life foreever be changes dolor sit amet, consecutor adispicing elit, sed do eiusmod tempor incidiunt"
        },
        {
            id:3,
            img:"https://eshop-tcj.netlify.app/assets/macbook-MZGIbM5F.png",
            subtitle:"Beats Solo",
            title:'Wireless',
            title2:"virtual",
            description:"lorem his life foreever be changes dolor sit amet, consecutor adispicing elit, sed do eiusmod tempor incidiunt"
        },
        {
            id:4,
            img:"https://eshop-tcj.netlify.app/assets/gaming--Uk6eZy1.png",
            subtitle:"Beats Solo",
            title:'Wireless',
            title2:"virtual",
            description:"lorem his life foreever be changes dolor sit amet, consecutor adispicing elit, sed do eiusmod tempor incidiunt"
        },
        {
            id:5,
            img:"https://eshop-tcj.netlify.app/assets/speaker-X9yW-39F.png",
            subtitle:"Beats Solo",
            title:'Wireless',
            title2:"virtual",
            description:"lorem his life foreever be changes dolor sit amet, consecutor adispicing elit, sed do eiusmod tempor incidiunt"
        }
    ]

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autopaly true
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:"false",
        pauseOnFocus:"true",
      };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
          <div className='container pb-8 sm:pb-0'> 
         {/* hero section */}
         <Slider {...settings}>
{
    heroslide.map((data,index)=>(
        <div key={data.id}> 
        <div className='grid grid-cols-1 sm:grid-cols-2'>
             {/* text content section */}
<div className='flex flex-col justify-center gap-4 sm;pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>

    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>

    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px]  md:text-[100px] xl:text-[150px] font-bold' >{data.title2}</h1>
    <div>
      <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white"/>

    </div>
</div>
            {/* img section */}
            <div className='order-1 sm:order-2'>
                <div>
                    <img src={data.img} alt={data.title} className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'/>
                </div>
            </div>
        </div>
           
        </div>
    ))
}
         </Slider>
         </div> 
        </div>
    </div>
  )
}

export default Hero