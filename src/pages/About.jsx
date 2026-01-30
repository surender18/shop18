import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'} />
    </div>
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod suscipit maxime numquam beatae tempore. Harum nisi asperiores voluptatem explicabo rerum officia fugit provident dolor similique, neque repudiandae necessitatibus sit recusandae numquam nulla dolores labore blanditiis quasi beatae.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolore pariatur laborum sint asperiores nihil explicabo, commodi est non, nam autem ea nostrum voluptatibus consectetur reprehenderit, dolorem nemo doloribus temporibus!</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, porro! Labore, aliquid animi consequuntur temporibus nobis qui. Obcaecati, nobis earum?</p>
      </div>
    </div>
    <div className="text-xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance: </b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, velit culpa commodi corporis fugit sint?</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience: </b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, velit culpa commodi corporis fugit sint?</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service: </b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, velit culpa commodi corporis fugit sint?</p>
      </div>
    </div>
    <NewsLetterBox />
    </div>
  )
}

export default About
