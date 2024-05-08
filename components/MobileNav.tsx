import { XMarkIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';
import React from 'react'

interface Props {
	nav: boolean;
	closeNav:()=>void;
}

const MobileNav = ({nav, closeNav}: Props) => {
	const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';
	const router = useRouter()

	const handleClick = (id : string)=> {
		router.push(id);
	}

  return (
	<div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 buttom-0 z-[10000000] bg-[#09101a]`}>
		<div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
			<div className='nav-link-mobile' onClick={() => { handleClick("/") ; closeNav() }}>Home</div>
			<div className='nav-link-mobile' onClick={() => { handleClick("#services") ; closeNav() }}>Services</div>
			<div className='nav-link-mobile' onClick={() => { handleClick("#skills") ; closeNav() }}>Skills</div>
			<div className='nav-link-mobile' onClick={() => { handleClick("#projects") ; closeNav() }}>Projects</div>
			<div className='nav-link-mobile' onClick={() => { handleClick("#contact") ; closeNav() }}>Contact</div>
		</div>
		<div onClick={closeNav} className='absolute z-[100000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-900'>
			<XMarkIcon/>
		</div>
	</div>
  )
}

export default MobileNav
