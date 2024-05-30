import { useTranslation } from 'react-i18next'
import polygonId from '../assets/PolygonID.png'
import komet from '../assets/komet.jpg'

const secondslider = () => {
	const { t } = useTranslation()

	return [
		{
			img: 'https://dev.reclaimprotocol.org/assets/logo.png',
			title: t('secondslider.reclaim'),
		},
		{
			img: 'https://play-lh.googleusercontent.com/FVah0jSyBDuGcgzFxDiVirK-mRQRBT3OhYoSO07Y-r5OHumsD6aOOH6b6abov4866VY',
			title: t('secondslider.verida'),
		},
		{
			img: 'https://s3.eu-west-1.amazonaws.com/polygonid-marketplace-logos-prod/ea8fa220-24ae-40fc-84ea-8b3c210ab41c.png',
			title: t('secondslider.gamer31'),
		},
		{
			img: polygonId,
			title: t('secondslider.polygon'),
		},
		{
			img: komet,
			title: t('secondslider.komet'),
		},
	]
}

export default secondslider
