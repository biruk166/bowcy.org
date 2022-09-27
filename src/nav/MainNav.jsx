import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './mainNav.css';
import Nav from './Nav';
import GenericBtn from '../components/genericBtn/GenericBtn';

export default function MainNav() 
{
  const [lang, setLang] = useState('');
  return (
    <div className='nav-bar-background'>
        <div className='main-nav-container'>

            <div className='logo'>
                <h1>BOWCY</h1>
            </div>

            <div className='nav-bar-container'>
                <div className='nav-bar'>
                    <Nav />
                </div>
            </div>

            <div className='donate-btn-container'>
                <Link to={'/'}><div className='home-btn'> <GenericBtn name={'HOME'}/> </div> </Link>

                <div className='lang-option-container'>
                  <select className='lang-option' name="lang" id="languge" onChange={(e) =>
                    {
                      const food = e.target.value;
                      setLang(food); 
                      console.log(lang);
                    }} defaultChecked={'amh'}>
                    
                    <option value="english">አማ</option>
                    <option value="amharic">Eng</option>
                  </select>
                </div>
            </div>
        </div>
    </div>
  )
}
