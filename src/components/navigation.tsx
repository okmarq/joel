import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Home from '../pages/home'
import Blog from '../pages/blog'
import BlogDetail from '../pages/blog/detail'
import Work from '../pages/work'
import WorkDetail from '../pages/work/detail'

const links = [
	{ name: 'Home', isActive: true, route: '/' },
	{ name: 'Works', isActive: false, route: '/works' },
	{ name: 'Blog', isActive: false, route: '/blog' },
	// { name: 'Contact', isActive: false, route: '#contact' }
]

const handleLinkClick = (e:any) => {
	console.log(e)
	console.log(e.target)
	console.log(e.target.baseURI)
	console.log(e.target.href)
	console.log(window.location.href)
}

const navigation = links.map(link => <Link key={link.route} to={link.route} className={link.isActive ? 'text-xl font-medium hover:text-secondary text-primary' : 'text-xl font-medium hover:text-secondary'} onClick={handleLinkClick}>{link.name}</Link>)

const mobileNavigation = links.map(link => <Link key={link.route} to={link.route} className={link.isActive ? 'text-xl font-medium hover:text-secondary text-primary p-2' : 'text-xl font-medium hover:text-secondary p-2'}>{link.name}</Link>)

// const tail: boolean = {
// 	isOpen: false,
// 	isActive: false,
// 	page: window.location.href
// }
// 		this.handleHamburgerClick = this.handleHamburgerClick.bind(this)
// 		this.handleLinkClick = this.handleLinkClick.bind(this)


// 	handleHamburgerClick = () => {
// 		this.setState(prevState => ({
// 			isOpen: !prevState.isOpen
// 		}))
// 	}

// close mobile navigation if open on click of any element on screen
// closeHamburger = () => {
// 	this.setState(prevState => ({
// 		isOpen: false
// 	}))
// }

export default function Navigation() {
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
					{/* <button className='font-medium hover:text-secondary active:text-primary' onClick={this.handleHamburgerClick}> */}
					<button className='font-medium hover:text-secondary active:text-primary'>
						<FontAwesomeIcon icon={icon({ name: 'bars', style: 'solid' })} className='w-8 h-8' />
					</button>
				</div>

				{/* <div className={this.state.isOpen ? '' : 'hidden'}> */}
				<div className={false ? '' : 'hidden'}>
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