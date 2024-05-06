import React from 'react'

interface Props {
	title: string
	year: string
	description: string;
}

const SkillsItem = ({title, year, description} : Props) => {
  return (
	<div className='mb-[4rem] md:mb-[8rem]'>
		<h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
			{title}
		</h1>
		<p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>{description}</p>
	</div>
  )
}

export default SkillsItem
