import React from 'react'
import './ourOrganizations.css'
import building from './building.jpg'

const orgNameAndLdrInfo = require('./orgList.json');

export default function OurOrganizations() {
  return (
    <div className='all-container'> 
        <div className='our-org-container'>
            <div className='building-img-container'>
                <img className='building-img' src={building} alt="Heaad office" />
            </div>

            <div className='list-of-organization-cont'>
                    <h1 className='org-title'>{orgNameAndLdrInfo.OrgTitle}</h1>

                    <ul className='list-of-org-one'>
                        {orgNameAndLdrInfo.ListOfOrgOne.map((ListOfOrgOne) => (
                            <li><a href="">{ListOfOrgOne}</a></li>
                        ))}
                    </ul>
                    <ul className='list-of-org-two'>
                        {orgNameAndLdrInfo.ListOfOrgTwo.map((ListOforgTwo) => (  
                            <li><a href="">{ListOforgTwo}</a></li>
                        ))}  
                    </ul>

                    
                    <div className='org-mangr-info'>
                        <ul>
                            {orgNameAndLdrInfo.infoName.map((infoName) =>(
                                <li>{infoName}</li>
                            ))}
                        </ul>
                        <ul>
                            {orgNameAndLdrInfo.LeaderInfo.map((LeaderInfo) =>(
                                <li>{LeaderInfo}</li>
                            ))}
                        </ul>
                    </div>
            </div>
         </div>
    </div>
    
  )
}
