import React from 'react'
import Wrapper from '../layout/Wrapper'
import security1 from '../assets/security1.png'
import security2 from '../assets/security2.png'
import security3 from '../assets/security3.png'
import security4 from '../assets/security4.png'
import check from '../assets/check_bg.png'
import checkbg from '../assets/check-bg.png'
import rightA from '../assets/right-arrow.png'
import code from '../assets/code.png'
import Tooltip from '../shared/Tooltip'
import { useTranslation } from 'react-i18next'

function Security() {
	const { t } = useTranslation()
	return (
		<Wrapper>
			<div className='relative flex justify-center flex-col md:flex-row items-start mt-[150px] md:gap-[30px]'>
				<div className='flex flex-col mx-[20px] md:mx-0 md:w-[50%]'>
					<img
						src={checkbg}
						alt='Background'
						className='z-10 w-full md:max-w-[650px]'
					/>
					<img
						src={check}
						alt='Check'
						className='w-[430px] md:w-[550px] absolute left-[20%] md:left-[10%] top-[2%] md:top-[7%] z-20'
					/>
					<ul className='relative z-30 flex flex-col md:flex-row mt-[100px] mb-[50px]'>
						<div className='flex flex-col gap-[10px] w-full'>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Верификация личности клиентов для борьбы с мошенничеством и отмыванием денег. Безопасная аутентификация для онлайн-банкинга и финансовых сервисов. Управление цифровыми активами и инвестициями с помощью DID.`}
								>
									<p className='w-full md:w-[350px]'>{t('security.finance')}</p>
								</Tooltip>
							</li>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Выдача верифицируемых дипломов, сертификатов и других учетных данных. Подтверждение квалификации и опыта соискателей при найме на работу. Создание децентрализованных систем репутации и портфолио.`}
								>
									<p className='w-full md:w-[350px]'>
										{t('security.education')}
									</p>
								</Tooltip>
							</li>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Отслеживание происхождения и подлинности товаров. Верификация личности участников цепочки поставок. Автоматизация таможенного оформления и сертификации грузов.`}
								>
									<p className='w-full md:w-[350px]'>{t('security.supply')}</p>
								</Tooltip>
							</li>
						</div>
						<div className='flex flex-col gap-[10px] w-full'>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Создание надежных реестров прав собственности на базе блокчейна. Упрощение процедур купли-продажи и регистрации недвижимости. Токенизация недвижимости для инвестиций и коллективного владения.`}
								>
									<p className='w-full md:w-[350px]'>{t('security.estete')}</p>
								</Tooltip>
							</li>
							<li className='group flex items-center text-white font-semibold text-[18px] gap-3 cursor-pointer'>
								<img src={code} alt='code' className='z-10' />
								<Tooltip
									text={`Верификация личности страхователей для борьбы с мошенничеством. Безопасный обмен данными с андеррайтерами и медучреждениями. Автоматизированная оценка рисков и персонализация страховых продуктов.`}
								>
									<p className='w-full md:w-[350px]'>
										{t('security.insurance')}
									</p>
								</Tooltip>
							</li>
						</div>
					</ul>
				</div>
				<div className='mx-[20px] md:mx-0 mt-[80px]'>
					<p className='text-white font-semibold text-[19px] md:text-[22px] mt-[30px]'>
						{t('security.security_p')}
					</p>
				</div>
			</div>
		</Wrapper>
	)
}

export default Security
