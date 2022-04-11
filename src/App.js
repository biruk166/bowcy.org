import './App.css';
import DeleteBtn from './components/deleteBtn/DeleteBtn';
import DonateBtn from './components/donateBtn/DonateBtn';
import IntroCard from './components/introCard/IntroCard';
import WhoAreWe from './nav/whoAreWeDL/WhoAreWe';
import DigitalLibrary from './nav/whoAreWeDL/DigitalLibrary';

function App() {
  let article = 'We protect children from domestic abuse and harmfull traditional practices ';
  return (
    <div>
        <h1>hello react app</h1>
        <DeleteBtn name={"DELETE"}/>
        <DonateBtn name={"DONATE"}/>
        <div className='test'>
            <IntroCard title={"CHILDREN RIGHTS"} article={article} />
            <IntroCard title={"CHILDREN RIGHTS"} article={article} />
            <IntroCard title={"CHILDREN RIGHTS"} article={article} />
            <IntroCard title={"CHILDREN RIGHTS"} article={article} />
        </div>
        <WhoAreWe/>
        <DigitalLibrary/>
    </div>
  );
}

export default App;
