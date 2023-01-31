import React, { useState , useRef } from 'react';
import GalleryProduct from './gallery-products'
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from "@components/ui/carousel/carousel";
import classNames from 'classnames/bind';
let lengthSlide = 0
function ImageSlider() {
  const ref = useRef(null)
  const imgs=[
    {id:0,value:"https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"},
    {id:1,value:"https://cdn.pnj.io/images/thumbnails/485/485/detailed/123/gb0000w001550-bong-tai-kim-tien-vang-trang-y-18k-pnj-khoen-tron-01.png"},
    {id:2,value:"https://cdn.pnj.io/images/thumbnails/485/485/detailed/146/GCXMXMY000535-Day-co-Vang-14K-dinh-da-ECZ-Disney-PNJ-Ariel-_1.png"},


  ]
  const [wordData,setWordData]=useState(imgs[0])
  const [show , setShow] = useState(false)
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handleShow = () => {
    setShow(!show)
  }
  const handleNext = () => {
    
      lengthSlide = lengthSlide -78
      if(lengthSlide < -(imgs.length-5)*78) {
        lengthSlide = 0;
      }
      ref.current.style.marginTop = `${lengthSlide}px`
      ref.current.style.transition = '  margin-top .5s'
      console.log(lengthSlide)

  }
  const handlePrev = () => {
 
      lengthSlide = lengthSlide +78
    if(lengthSlide <= 0) {

      ref.current.style.marginTop = `${lengthSlide}px`
      ref.current.style.transition = '  margin-top .5s'
    }
    else if(lengthSlide > 0) {
      lengthSlide = -(imgs.length-5)*78
      ref.current.style.marginTop = `${lengthSlide}px`
      ref.current.style.transition = '  margin-top .5s'
    }
    console.log(lengthSlide)
    
    }
  return (
    <div className="main ">
       {show && <GalleryProduct handleShow={handleShow}/>}
      {/* <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
        "w-[76px] h-[76px] mb-2 border-2"
      </div> */}

     <div className="relative">
    {imgs.length > 5 && (
       <>
       <p className="absolute top-[20px] left-[37px] z-10" onClick={handlePrev}>
       <button aria-label="next-button" className="-mt-8 md:-mt-10 w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:right-0 rtl:left-0 transform shadow-navigation translate-x-1/2 -rotate-90"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></button>
       </p>
       <p className="absolute top-[520px] left-[37px] z-10" onClick={handleNext}>
       <button aria-label="next-button" className="-mt-8 md:-mt-10 w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:right-0 rtl:left-0 transform shadow-navigation translate-x-1/2 rotate-90"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></button>
 
       </p>
       </>
    )}
     <div className=" h-[430px] w-[100px] mr-2 mt-9 overflow-hidden relative">
      

 <div className="overflow-hidden">
 <div ref={ref}>
   {imgs.map((data , i) => (
      <img className={classNames(wordData.id==i?"clicked":"" , 'w-[76px] h-[76px] mb-2 border-2 bg-[#f7f7f7]' , 'rounded-lg')} src={data.value} onClick={() => handleClick(i)} />
            ))}    
    </div>  
       
      </div>
 </div>
     </div>
<div className="relative">
          <img className="bg-[#f7f7f7]" src={wordData.value} height="300" width="500" /> 
          <img className="w-9 h-9 absolute top-2 right-2" src="https://cdn.pnj.io/images/image-update/tag-product/new-icon-3-w29.svg"/>
             <div className="flex justify-center mt-2 cursor-pointer" onClick={handleShow}>
                <img src="https://cdn.pnj.io/images/p_detail/anh.svg"/>
              </div>
</div>  
     </div>
  );
}

export default ImageSlider;