import React from 'react'
import logo from '../assets/logo1.jpg'
import Wrapper from '../layout/Wrapper'
import { useTranslation } from 'react-i18next'

function Footer() {
	const { t } = useTranslation()
	return (
		<>
			<Wrapper>
				<div className='flex flex-col md:flex-row md:items-start items-center md:justify-between justify-center gap-[10px] pt-[100px] h-full pb-[40px]'>
					<img
						src={logo}
						alt='logo'
						className='cursor-pointer w-[70px] md:w-[90px]'
					/>
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						{/* <li>
							<a href='#' className='text-[#848689]'>
								Indao (Core)
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Docs
							</a>
						</li> */}
					</ul>
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						{/* <li>
							<a href='#' className='uppercase text-white font-semibold'>
								ecosystem
							</a>
						</li> */}
						{/* <li>
							<a href='#' className='text-[#848689]'>
								Explore
							</a>
						</li>
						<li>
							<a href='#' className='text-[#848689]'>
								Grants
							</a>
						</li> */}
					</ul>
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						<li>
							<a href='#' className='uppercase text-white font-semibold'>
								{t('footer.community')}
							</a>
						</li>
						<li>
							<a
								href='https://x.com/inDAO_io'
								target='_blank'
								className='text-[#848689]'
							>
								{t('footer.twiter')}
							</a>
						</li>
						<li>
							<a
								href='https://snapshot.org/#/indaonetwork.eth'
								target='_blank'
								className='text-[#848689]'
							>
								{t('footer.snapshot')}
							</a>
						</li>
					</ul>
					<ul className='flex flex-col items-center md:items-start gap-3 font-semibold'>
						<li>
							<a href='#' className='uppercase text-white font-semibold'>
								{t('footer.resources')}
							</a>
						</li>
						<li>
							<a
								href='https://indao.gitbook.io/did-technology'
								target='_blank'
								className='text-[#848689]'
							>
								{t('footer.gitbook')}
							</a>
						</li>
					</ul>
				</div>
			</Wrapper>
		</>
	)
}

export default Footer
