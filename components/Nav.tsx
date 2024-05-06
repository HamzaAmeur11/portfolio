import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';
import { useRouter } from 'next/router';


interface Props {
  nav: boolean
	openNav:()=>void;
}

const Nav = ({nav , openNav}: Props) => {
	const router = useRouter()

	const handleClick = (id : string)=> {
		router.push(id);
	}

	return (
	<div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
		<div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
			<h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
			WEB
			<span className='text-yellow-300'>DEV</span>
			</h1>
			<div className='nav-link' onClick={() => handleClick("/")}>Home</div>
			<div className='nav-link' onClick={() => handleClick("#services")}>Services</div>
			<div className='nav-link' onClick={() => handleClick("#skills")}>Skills</div>
			<div className='nav-link' onClick={() => handleClick("#projects")}>Projects</div>
			<div className='nav-link' onClick={() => handleClick("#blog")}>Blog</div>
			<div className='nav-link' onClick={() => handleClick("#contact")}>Contact</div>
			<div onClick={openNav}>
				<Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-500'/>
			</div>
		</div>
	</div>
 );
};

export default Nav;
