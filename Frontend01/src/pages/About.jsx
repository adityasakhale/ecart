import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={' US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-centergap-6 md:w-2/4 text-gray-600'>
          <h2 className='text-2xl mb-4 text-gray-950'>Fashion Factory</h2>
          <p> we are driven by a passion for the intricate world of embroidery,
           where tradition meets innovation. With years of experience in the industry, 
           we have become a trusted name, renowned for delivering the highest quality embroidery work 
           and exquisite craftsmanship. </p>
          <b className='text-gray-800 mt-4 text-xl mb-1'> Our Specialties </b>
          <p>We take pride in offering a wide range of embroidery services, with a focus on:
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li ><b>Aari Work :</b>
            <p>Known for its delicate and detailed design, our aari embroidery adds a touch of elegance to any garment,
             from traditional wear to modern pieces.</p>
        </li>
        <li ><b>Custom Embroidery Logos :</b>
            <p>Whether you need personalized logos for T-shirts, uniforms, or promotional wear,
             we work closely with our clients to bring their vision to life with impeccable precision.</p>
        </li>
        <li ><b>Men’s Kurtas :</b>
            <p>Our embroidery on men's kurtas is a blend of traditional and contemporary designs,
             making each piece unique and tailored to our clients' specifications.</p>
        </li>
        <li ><b>Women’s Clothing :</b>
            <p>From bridal wear to casual blouses,
             we create stunning embroidery that enhances the beauty and style of women’s garments.</p>
        </li>
        <li ><b>Blouses and Other Garments :</b>
            <p>We offer custom embroidery solutions for a wide range of clothing items,
             ensuring that each piece is a work of art.</p>
        </li>
      </ul>
</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={' CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Expert Craftsmanship :</b>
          <p className='text-gray-900'>With a team of skilled artisans, we guarantee top-notch quality in every piece.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customization :</b>
          <p className='text-gray-900'>We work closely with our clients to create bespoke embroidery designs that reflect their unique style and needs.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Satisfaction :</b>
          <p className='text-gray-900'>Your satisfaction is our top priority. We ensure timely delivery and exceptional service from start to finish.</p>
        </div>
      </div>
      <NewLetterBox />
    </div>

  )
}

export default About
