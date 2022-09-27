import React from 'react'
import IntroCardsSection from '../../sectionOne/introCardsSection/IntroCardsSection'
import ArticleContainer from '../../components/articleContainer/ArticleContainer'


const style = {
              display:'flex',
              flexDirection:"column",
              gap:'8rem',
}


export default function IntroCardArticlePage() {
  return (
    <div style={style}>
        <ArticleContainer />
        <IntroCardsSection />
    </div>
  )
}
