import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
        <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div >
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full  md:w-2/3'>
                Lorem ipsum dolor sit,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ab excepturi veniam ea sunt voluptates explicabo repellat similique laboriosam suscipit. amet consectetur adipisicing elit. A explicabo ratione ipsa blanditiis inventore sint. Natus nam itaque explicabo porro.
                </p>
            </div>
            <div >
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>DELIVERY</li>
                  <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-9595959595</li>
                <li>contact@shop18.com</li>
              </ul>
            </div>
        </div>
        <div>
          <hr />
          <p className='py-5 text-center text-sm'>COPYRIGHT @2025 SHOP18</p>
        </div>
      
    </div>
  )
}

export default Footer
