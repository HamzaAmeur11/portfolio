import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
	<div id='about' className='bg-[#121121] pb-[3rem] md:pt-[8rem]'>
		<div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
			<div>
				<h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
					ABOUT me
				</h1>
				<h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:loading-[3rem] loading-[2rem] capitalize mb-[3rem] font-bold text-white'>
					Trabsforming <span className='text-yellow-500'>visions</span>
				</h2>
				<div className='mb-[3rem] flex items-center md:space-x-10'>
					<span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
					<p className='text-[19px] text-slate-300 w-[80%]'>
						I am a Full-Stack Web Developer
						and a student at 1337 Coding
						School. I find satisfaction in
						problem-solving and refining my
						work. I actively explore algorithms
						and stay updated with emerging
						ideas. Additionally, I am
						enthusiastic about delving into AI,
						particularly focusing on machine
						learning and natural language
						processing.
					</p>
				</div>
				<button className='flex px-[2rem] hover:bg-yellow-400 transition-all duraction-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black items-center space-x-2'>
					<p>Download CV</p>
					<ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
				</button>
			</div>
			<div data-aos="fade-left" className='mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:w:[500px] lg:h[500px] w-[300px] h-[300px] relative'>
				<Image
					src="/images/about.jpg"
					alt="user"
					layout='fill'
					objectFit='contain'
					className='relative z-[11] w-[100%] h-[100%] object-contain'
				/>
				<div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]'>

				</div>
			</div>
		</div>
	</div>
  )
}

export default About
