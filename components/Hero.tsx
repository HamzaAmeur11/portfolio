import React from 'react'
import Particle  from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Hero = () => {
	function downloadCV(){
			const cvUrl = "https://raw.githubusercontent.com/HamzaAmeur11/MyCV/matser/mainCV.pdf"
			const link = document.createElement('a');
			link.href = cvUrl;
			link.download = 'CV__.pdf'; // The default filename for the downloaded file

			// Append the anchor to the body temporarily
			document.body.appendChild(link);

			// Programmatically click the link to trigger the download
			link.click();

			// Clean up by removing the link from the body
			document.body.removeChild(link);

	}


	return (
	<div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[5vh] bg-cover bg-center">
		<Particle />
		<div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
			<div>
				<h1 className='text-[35px] md:text-[50px] text-white font-bold'>Hi, I am <span className='text-yellow-500'>Hamza</span>
				</h1>
				<TextEffect />
				<p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
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
				<div className='mt-[2rem] flex-col space-y-6 sm:flex sm:flex-row items-center sm:space-x-6'>
					<button  className='flex px-[2rem] hover:bg-yellow-400 transition-all du py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black items-center space-x-2'
					onClick={() => {
						// Implement your download logic here
						downloadCV();
						console.log('Download CV button clicked');
					 }}
					>
						<p>Download CV</p>
					</button>
				</div>
			</div>
			<div  className='w-[500px] hidden bg-[55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
				<Image src="/images/about.jpg" alt='user' layout='fill' className='object-cover rounded-full' />
			</div>
		</div>
	</div>
  )
}

export default Hero

