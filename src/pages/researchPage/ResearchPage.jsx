import React, {useState} from 'react'
import CheckInput from '../../functionalUtility/CheckInput'
import ResearchReportComponent from '../../components/researchReportComponent/ResearchReportComponent'
import NewsSection from '../../sectionTwo/newsSection/NewsSection'


const report={
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'row',
}

const styles = {
    display: 'flex',
    justifyContent: 'center',
    width:'97%',
    marginLeft: 'auto',
}

export default function ResearchPage() {
    const [languge, setLanguge] = useState('english')
    const [cardCount, setCardCount] = useState(5)


  return (
    <div onLoad={()=>{console.log('just loaded');}}>
        <h1 style={{textAlign:'center', fontSize:'3rem'}}> { CheckInput.IsLangugeEnglish(languge) ? `RESEARCH` : `ምርምር`}</h1>

        <div style={styles} >
            <div style={report}>
                {[...Array(cardCount)].map((e, i)=>
                    <ResearchReportComponent key={i} /> 
                )}
            </div>
         </div>
         <NewsSection />
    </div>
  )
}
