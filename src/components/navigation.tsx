import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Home from '../pages/home'
import Blog from '../pages/blog'
import BlogDetail from '../pages/blog/detail'
import Work from '../pages/work'
import WorkDetail from '../pages/work/detail'

class Navigation extends React.Component<{}, {isOpen: boolean}> {
	constructor(props: any) {
		super(props)
		this.state = {isOpen: false}
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this)
	}

	handleHamburgerClick = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	}

	// close mobile navigation if open on click of any element on screen
	// closeHamburger = () => {
	// 	this.setState(prevState => ({
	// 		isOpen: false
	// 	}))
	// }

	render(): React.ReactNode {
		return (
      <BrowserRouter>
				<header className='mb-2 sm:mb-20 relative'>
					<div className='hidden sm:block'>
						<nav className='w-full h-16 px-16 flex justify-end gap-6 items-center'>
							<Link to='/' className='text-xl font-medium hover:text-secondary active:text-primary'>Home</Link>

							<Link to='/works' className='text-xl font-medium hover:text-secondary active:text-primary'>Works</Link>

							<Link to="/blogs" className='text-xl font-medium hover:text-secondary active:text-primary'>Blog</Link>

							<a href="#contact" className='text-xl font-medium hover:text-secondary active:text-primary'>Contact</a>
						</nav>
					</div>

					<div className='sm:hidden w-full h-16 px-4 flex justify-end items-center'>
						<button className='font-medium hover:text-secondary active:text-primary' onClick={this.handleHamburgerClick}>
							<FontAwesomeIcon icon={icon({name: 'bars', style: 'solid'})} className='w-8 h-8' />
						</button>
					</div>

					<div className={this.state.isOpen ? '' : 'hidden'}>
						<div className='absolute sm:hidden w-full bg-white px-4'>
							<nav className='flex flex-col items-center'>
								<Link to='/' className='text-xl font-medium hover:text-secondary active:text-primary p-2'>Home</Link>

								<Link to='/works' className='text-xl font-medium hover:text-secondary active:text-primary p-2'>Works</Link>

								<Link to="/blogs" className='text-xl font-medium hover:text-secondary active:text-primary p-2'>Blog</Link>

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
}

export default Navigation
