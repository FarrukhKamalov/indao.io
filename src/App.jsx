import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SmartAccount from './components/SmartAccount'
import Subscribe from './components/Subscribe'
import SecondSlider from './components/SecondSlider'
import Security from './components/Security'
import Blog from './components/Blog'
import Governance from './components/Governance'
import Footer from './components/Footer'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translateEng from './locale/translateEng'
import translateRu from './locale/translateRu'

i18n.use(initReactI18next).init({
	resources: {
		eng: { translation: translateEng },
		ru: { translation: translateRu },
	},
	lng: 'ru',
	fallbackLng: 'ru',
})

function App() {
	const changeLang = v => {
		i18n.changeLanguage(v)
	}

	return (
		<>
			<Navbar changeLang={changeLang} />
			<Hero />
			<SmartAccount />
			<Subscribe />
			<SecondSlider />
			<Security />
			<Blog />
			<Governance />
			<Footer />
		</>
	)
}

export default App
