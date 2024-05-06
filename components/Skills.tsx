
import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
	<div id='skills' className='pt-[4rem] md:pt[8rem] pb-[5rem] bg-[#09101a]'>
		<h1 className='heading'>
			Education & <span className='text-yellow-400'>Skill</span>
		</h1>
		<div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
		<div>
			<SkillsItem
				title="Web Development"
				year=""
				description="Proficient in HTML, CSS, JavaScript, with experience in Next.js, React, NestJS, and Express for web development."
			/>
			<SkillsItem
				title="React Developer"
				year=""
				description="Experienced in building web applications with React, handling state management, and optimizing performance."
			/>
			<SkillsLanguage
				skill1='HTML'
				skill2='CSS'
				skill3='JavaScript'
				level1='w-[91%]'
				level2='w-[88%]'
				level3='w-[80%]'
			/>
			<SkillsLanguage
				skill1='MySQL'
				skill2='MongoDB'
				skill3='Algorithms'
				level1='w-[85%]'
				level2='w-[80%]'
				level3='w-[90%]'
			/>
		</div>
		<div>
		  <SkillsItem
			title="Database Management"
			year=""
			description="Skilled in designing and maintaining databases using MySQL and MongoDB, including query optimization and data modeling."
			/>
		  <SkillsItem
			title="Algorithms & AI"
			year=""
			description="Knowledgeable in standard algorithms, data structures, state machines, and asynchronous programming for AI applications."
			/>
			<SkillsLanguage
				skill1='C'
				skill2='C++'
				skill3='Docker'
				level1='w-[91%]'
				level2='w-[88%]'
				level3='w-[80%]'
			/>
			<SkillsLanguage
				skill1='Nextjs'
				skill2='Express'
				skill3='VITE'
				level1='w-[85%]'
				level2='w-[80%]'
				level3='w-[90%]'
			/>
		</div>

		</div>
	</div>
  )
}

export default Skills
