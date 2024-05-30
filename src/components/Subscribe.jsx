import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../layout/Wrapper'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useTranslation } from 'react-i18next'

function Subscribe() {
	const [inView, setInView] = useState(false)
	const [counterOn, setCounterOn] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setInView(entry.isIntersecting)
			},
			{ threshold: 0.5 }
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [])

	const { t } = useTranslation()

	return (
		<div
			ref={ref}
			className='mt-[100px] subscribe-container h-full flex justify-center items-center flex-col'
		>
			<Wrapper>
				<div className='flex flex-col items-center justify-center text-start'>
					{/* <p className='text-[#A0A2A6] font-semibold text-[17px] pt-[50px]'>
                        ENTRUSTED TO KEEP YOUR ASSETS INDAO
                    </p> */}
					<h2 className='text-white font-semibold text-[20px] md:text-[35px] md:leading-[55px] w-[80%] mt-[15px] text-center'>
						{t('subscribe.h2')}
					</h2>
				</div>
				{/* <ScrollTrigger
					onEnter={() => setCounterOn(true)}
					onExit={() => setCounterOn(false)}
				>
					{counterOn && (
						<div className='flex flex-col md:flex-row justify-center items-center mt-[80px]'>
							<div className={`left-video ${inView ? 'move-left' : ''}`}>
								<video
									src='https://safe.global/videos/Home/brackets-left-vp9.webm'
									autoPlay
									playsInline
									loop
									muted
									className='max-w-[100px] hidden md:block'
								>
									<source
										src='https://safe.global/videos/Home/brackets-left-vp9.webm'
										type='video/webm'
									/>
								</video>
							</div>

							<div className={`right-video ${inView ? 'move-right' : ''}`}>
								<video
									src='https://safe.global/videos/Home/brackets-right-vp9.webm'
									autoPlay
									playsInline
									loop
									muted
									className='max-w-[100px] hidden md:block'
								>
									<source
										src='https://safe.global/videos/Home/brackets-right-vp9.webm'
										type='video/webm'
									/>
								</video>
							</div>
						</div>
					)}
				</ScrollTrigger> */}
				{/* {counterOn && (
					<div className='mt-[50px] text-center'>
						<CountUp start={0} end={1000} duration={5} />
					</div>
				)} */}
			</Wrapper>
		</div>
	)
}

export default Subscribe
