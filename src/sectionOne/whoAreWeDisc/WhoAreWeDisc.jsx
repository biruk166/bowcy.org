import React,{useState} from 'react';
import CheckInput from '../../functionalUtility/CheckInput';
import './whoAreWeDisc.css';

const moreInfoEng = 'For more info click each card';
const whoAreWeEnglish = `Amhara National State Bureau of Women, Children and Social Affair was established in 2006. It has the mandate to promote gender equality, 
    justice and safeguard the rights and welfare of women, children and youths. 
    It has eleven directorates, each with its own specialized function. BoWCY is located at kebele 16, Tana Sub-city, Bahir Dar. Bahir Dar is the capital city of 
    Amhara National Regional State of Ethiopia, situated on the southern shore of Lake Tana, the source of Blue Nile River. It is 560 km far from Addis Ababa, the capital city of Ethiopia,
    in the northwest direction at an altitude of 1801 m above sea level, latitude of 11038” N and a longitude of 37010” E. As a nonprofit
    we provide the following services:`;

const moreInfroAmh = `ለበለጠ መረጃ እያንዳንዱን ካርድ ጠቅ ያድርጉ`;
const woAreWeAmharic = `ANRS BoWCY የተቋቋመው እ.ኤ.አ. 2006
    እያንዳንዳቸው የራሳቸው ልዩ ተግባር ያላቸው አሥራ አንድ ዳይሬክቶሬቶች አሉት። ANRS BoWCY በጣና ክፍለ ከተማ ባህርዳር ቀበሌ 16 ይገኛል። ባህር ዳር የ (የአማራ ክልል) ዋና ከተማ ናት።
    ባህር ዳር የአማራ ብሔራዊ ክልላዊ መንግስት የጥቁር አባይ ወንዝ ምንጭ በሆነው በጣና ሀይቅ ደቡባዊ ዳርቻ ላይ ትገኛለች። የኢትዮጵያ ዋና ከተማ ከሆነችው አዲስ አበባ 560 ኪ.ሜ ርቀት ላይ ትገኛለች።
    በሰሜን ምዕራብ አቅጣጫ ከባህር ጠለል በላይ 1801 ሜትር ከፍታ ላይ፣ 11038" N ኬክሮስ እና 37010" E.
    የሚከተሉትን አገልግሎቶች እናቀርባለን።`;



export default function WhoAreWeDisc() {

  const [languge, setLanguge] = useState('english')

  return (
    <div className='who-are-we-text-container'>

        <div className='main-title-container'>
            <h2> { CheckInput.IsLangugeEnglish(languge) ? `WHO ARE WE?` : `እኛ ማን ነን`} </h2>
        </div>
        <div className='org-disc-container'>
            <p>{CheckInput.IsLangugeEnglish(languge) ? whoAreWeEnglish: woAreWeAmharic} </p>
        </div>
        <div className='more-infro-container'>
            <p>{ CheckInput.IsLangugeEnglish(languge) ? moreInfoEng: moreInfroAmh} </p>
        </div>

    </div>
  )
}
