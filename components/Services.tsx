import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
	<div id='services' className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
		<p className='heading'>
			My <span className='text-yellow-400'>Services</span>
		</p>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
			<div data-aos="fade-right">
				<div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
					<CodeBracketIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
					<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>frontend</h1>
					<p className='text-[15px] text-[#d3d2d2]'>I specialize in creating captivating user interfaces that enhance user experience and engagement. With expertise in modern frontend technologies like React, I craft responsive and visually appealing designs that bring ideas to life.</p>
				</div>
			</div>
			<div data-aos="zoom-in" data-aos-delay="300">
				<div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
					<RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
					<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>backend</h1>
					<p className='text-[15px] text-[#d3d2d2]'>My backend solutions are robust, scalable, and optimized for performance. Leveraging technologies like Node.js and databases like MongoDB, I ensure seamless data management and efficient server-side operations.</p>
				</div>
			</div>
			<div data-aos="fade-left" data-aos-delay='500'>
				<div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
					<CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
					<h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Fullstack</h1>
					<p className='text-[15px] text-[#d3d2d2]'>As a full-stack developer, I bring together frontend finesse and backend prowess to deliver end-to-end solutions. From conceptualization to deployment, I ensure seamless integration and functionality across the entire stack.</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Services
