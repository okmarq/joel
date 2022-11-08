import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Home from '../pages/home'
import Blog from '../pages/blog'
import BlogDetail from '../pages/blog/detail'
import Work from '../pages/work'
import WorkDetail from '../pages/work/detail'

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)

	const handleHamburgerClick = () => {
		setIsOpen(!isOpen)
	}

	const links = [
		{ name: 'Home', route: '/' },
		{ name: 'Works', route: '/works' },
		{ name: 'Blog', route: '/blog' }
	]

	const navigation = links.map(link => <NavLink end className={({ isActive }) => (isActive ? 'text-xl font-medium hover:text-secondary text-primary' : 'text-xl font-medium hover:text-secondary')} key={link.route} to={link.route}>{link.name}</NavLink>)

	const mobileNavigation = links.map(link => <NavLink end className={({ isActive }) => (isActive ? 'text-xl font-medium hover:text-secondary text-primary p-2' : 'text-xl font-medium hover:text-secondary p-2')} key={link.route} to={link.route}>{link.name}</NavLink>)

	return (
		<BrowserRouter>
			<header className='mb-2 sm:mb-20 relative'>
				<div className='hidden sm:block'>
					<nav className='w-full h-16 px-16 flex justify-end gap-6 items-center'>
						{navigation}

						<a href="#contact" className='text-xl font-medium hover:text-secondary active:text-primary'>Contact</a>
					</nav>
				</div>

				<div className='sm:hidden w-full h-16 px-4 flex justify-end items-center'>
					<button className='font-medium hover:text-secondary active:text-primary' onClick={handleHamburgerClick}>
						<FontAwesomeIcon icon={icon({ name: 'bars', style: 'solid' })} className='w-8 h-8' />
					</button>
				</div>

				<div className={isOpen ? '' : 'hidden'}>
					<div className='absolute sm:hidden w-full bg-white px-4'>
						<nav className='flex flex-col items-center'>
							{mobileNavigation}

							<a href="#contact" className='text-xl font-medium hover:text-secondary active:text-primary p-2'>Contact</a>
						</nav>
					</div>
				</div>
			</header>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blogs' element={<Blog />} />
				<Route path='/blog' element={<BlogDetail />} />
				<Route path='/works' element={<Work />} />
				<Route path='/work' element={<WorkDetail />} />
			</Routes>
		</BrowserRouter>
	)
}