import { useTranslation } from 'react-i18next'
import polygonId from '../assets/PolygonID.png'
import komet from '../assets/komet.jpg'

const secondslider = () => {
	const { t } = useTranslation()

	return [
		{
			img: 'https://dev.reclaimprotocol.org/assets/logo.png',
			title: 'Reclaim',
		},
		{
			img: 'https://play-lh.googleusercontent.com/FVah0jSyBDuGcgzFxDiVirK-mRQRBT3OhYoSO07Y-r5OHumsD6aOOH6b6abov4866VY',
			title: 'Verida',
		},
		{
			img: 'https://s3.eu-west-1.amazonaws.com/polygonid-marketplace-logos-prod/ea8fa220-24ae-40fc-84ea-8b3c210ab41c.png',
			title: 'GAMER31',
		},
		{
			img: polygonId,
			title: 'Polygon ID',
		},
		{
			img: komet,
			title: 'KOMET',
		},
		{
			img: 'https://dev.reclaimprotocol.org/assets/logo.png',
			title: 'Reclaim',
		},
		{
			img: 'https://play-lh.googleusercontent.com/FVah0jSyBDuGcgzFxDiVirK-mRQRBT3OhYoSO07Y-r5OHumsD6aOOH6b6abov4866VY',
			title: 'Verida',
		},
		{
			img: 'https://s3.eu-west-1.amazonaws.com/polygonid-marketplace-logos-prod/ea8fa220-24ae-40fc-84ea-8b3c210ab41c.png',
			title: 'GAMER31',
		},
		{
			img: polygonId,
			title: 'Polygon ID',
		},
		{
			img: komet,
			title: 'KOMET',
		},
	]
}

export default secondslider
