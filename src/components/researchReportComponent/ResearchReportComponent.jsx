import React from 'react'
import { Link } from 'react-router-dom'

import './researchReportContainer.css' 
import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import pdf from './pdf.png'

export default function researchReportComponent() {
  return (
      <div>
        <div className='repo-res-main-container'>
            <div>
                <h3>
                    RESEARCH PUBLISHED: 12/25/2022
                </h3>
                <h3>
                    THE EFFECT OF CLIMATE CHANGE ON RURAL AMHARA ON THE CURRENT TIME
                </h3>
                <img src={pdf} alt="pdf icon" />
                <p>
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                    The Following contains reports about
                </p>
            </div>
            
            <div className='repo-res-func-container'>
                <button>DOWNLOAD ENGLISH PDF <BsFillArrowDownSquareFill color='black'/> </button>
                <button>DOWNLOAD AMHARIC PDF <BsFillArrowDownSquareFill color='white'/></button>
                <button> <Link style={{color:'gold'}} to={'/email-page'}>CONTACT PUBLISHER</Link>  </button>
            </div>
        </div>
      </div>
    
  )
}
