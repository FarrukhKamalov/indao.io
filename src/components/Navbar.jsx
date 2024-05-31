import React, { useState, useRef } from 'react'
import logo from '../assets/logo1.jpg'
import Wrapper from '../layout/Wrapper'
import MobNavbar from '../shared/MobNavbar'
import { useTranslation } from 'react-i18next'
import english from '../assets/english.png'
import russian from '../assets/russian.png'
import lang from '../assets/lang.png'

function Navbar({ changeLang }) {
	const [mobNavbar, setMobNavbar] = useState(false)
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const { t, i18n } = useTranslation()
	const dropdownRef = useRef(null)

	const handleShowMobileNavbar = () => {
		setMobNavbar(!mobNavbar)
		document.body.classList.toggle('overflow-hidden')
	}

	const handleLanguageChange = lang => {
		changeLang(lang)
		setDropdownOpen(false)
		if (dropdownRef.current) {
			dropdownRef.current.open = false
		}
	}

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen)
	}

	return (
		<>
			<div
				className='p-[10px] fixed w-full z-[999]'
				style={{
					backdropFilter: 'blur(10px)',
				}}
			>
				<Wrapper>
					<div className='flex items-center justify-between'>
						{/* Logo */}
						<div>
							<img src={logo} alt='logo' className='w-[50px] md:w-[70px]' />
						</div>
						<ul className='md:flex items-center ml-[80px] text-[#9DA0A2] font-semibold gap-[25px] hidden'>
							<li>
								<a href='#' className='hover:text-white'>
									{t('navbar.indao')}
								</a>
							</li>
							<li>
								<a
									href='https://drive.google.com/file/d/1wmfdtIGPaN9uJBI1DHqN903tP9c_aTG2/view'
									target='_blank'
									className='hover:text-white'
									rel='noopener noreferrer'
								>
									{t('navbar.reclaim')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									{t('navbar.about')}
								</a>
							</li>
						</ul>

						<div className='flex items-center gap-5'>
							<div className='custom-select'>
								<details
									className='dropdown'
									ref={dropdownRef}
								>
									<summary
										className='flex items-center'
										onClick={toggleDropdown}
									>
										<img
											src={lang}
											alt=''
											className='w-8 cursor-pointer mt-[6px]'
										/>
									</summary>

									<ul className='p-2 shadow menu dropdown-content z-[1] glass rounded-[10px] w-[100px] font-semibold mt-[10px] ml-[-30px]'>
										<li>
											<a onClick={() => handleLanguageChange('ru')}>
												<img src={russian} alt='' className='w-6' />
												RUS
											</a>
										</li>
										<li>
											<a onClick={() => handleLanguageChange('eng')}>
												<img src={english} alt='' className='w-6' />
												ENG
											</a>
										</li>
									</ul>
								</details>
							</div>
							<button
								className='py-[4px] px-[12px] font-semibold rounded-[5px] hidden md:block'
								style={{ background: 'rgb(0 170 255)' }}
							>
								{t('navbar.button')}
							</button>
							<div
								className='flex flex-col gap-[6px] cursor-pointer md:hidden'
								onClick={handleShowMobileNavbar}
							>
								<div className='bg-white w-[25px] h-[2px]'></div>
								<div className='bg-white w-[25px] h-[2px]'></div>
								<div className='bg-white w-[25px] h-[2px]'></div>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
			{mobNavbar && <MobNavbar showMobile={handleShowMobileNavbar} />}
		</>
	)
}

export default Navbar
