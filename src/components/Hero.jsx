import React, { useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime'
import herobg from '../assets/hero_bg.png'
import { useTranslation } from 'react-i18next'

function Hero() {
	const { t } = useTranslation()

	return (
		<>
			<div className='relative flex justify-center items-center h-screen'>
				<div className='absolute top-0 left-0 w-full h-full'>
					<img src={herobg} alt='' className='w-full h-full object-cover' />
				</div>
				<div className='relative flex justify-center items-center w-full h-full'>
					<h1 className='text-[35px] md:text-[60px] text-white w-full md:w-[50%] font-semibold text-center leading-[55px] md:leading-[70px]'>
						{t('hero.h2')}{' '}
						<span style={{ color: 'rgb(0 170 255)' }}>
							{' '}
							{t('hero.coloredh2')}
						</span>
					</h1>
				</div>
			</div>
		</>
	)
}

export default Hero
