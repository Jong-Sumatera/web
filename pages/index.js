import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { Feature } from '../components/Feature'
import { featureComment, featureHighlight, featureTags, featureTranslate } from '../public/images'
import Footer from '../components/Footer'

export default function Home() {

  const features = [
    {
      imageSrc: featureHighlight,
      title: 'Highlight',
      desc: 'You can highlight words, sentences, paragraphs that you want to mark as important'
    },
    {
      imageSrc: featureComment,
      title: 'Comment',
      desc: 'You can provide explanations or comments on the words, sentences, and paragraphs that you have marked so that you can understand them better'
    },
    {
      imageSrc: featureTags,
      title: 'Tags',
      desc: 'You can mark words, sentences and paragraphs that you highlight by putting a "#" sign at the beginning of the tag in the comments so that you can find them more easily.'
    },
    {
      imageSrc: featureTranslate,
      title: 'Translate',
      desc: 'We provide a translate to Bahasa feature so you can find the meaning of the word in Bahasa'
    }
  ]
  return (
    <div>
      <Navbar />

      <Banner />
      <div className='flex-col m-auto text-center py-[35px] text-primary'>
        <h3 className='text-[32px] font-bold'>PDF Reader for iPadOS</h3>
        <p className='text-[20px]'>Solid, Smart & Portable PDF Reader</p>
      </div>

      {
        features.map((feature, idx) => (
          <Feature
            key={idx}
            imageSrc={feature.imageSrc}
            reverse={idx % 2 == 0 ? true : false}
            backgroundColor={idx % 2 == 0 ? 'bg-primaryLight' : 'bg-primaryMedium'}
            title={feature.title}
            desc={feature.desc}
          />
        ))
      }

      <Footer />

    </div>
  )
}
