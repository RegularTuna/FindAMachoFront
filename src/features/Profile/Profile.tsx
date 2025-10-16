import React from 'react'
import './Profile.css'
import Tag from '../../components/Tag/Tag'
import Contact from '../Contacts/Contact';
function Profile() {

  const themeColor = '#d088e6ff';
  const lookingFor = {
    l1: 'Loiraça',
    l2: 'Bigode',
    l4: 'drogada',
    l5: 'verde',
       
  }

  const contacts = {
    Instagram: 'www.google.com',
    LinkedIn: 'Tiago Fortuna',
    Beer: 'tiagofortuna412@gmail.com',
    Facebook: 'Tiago Fortuna',
    Twitter: 'Tiagoleu'

  }


  return (
    <>
      <div className='lookingForSection'>
        <h3 className='title'>Looking For</h3>
        <div className='lookingForTags'>
          
            {Object.values(lookingFor).map((word,index) => (   
              <div className='lookingForTagsIndividualContainer'>        
                <Tag key={index} name={word} fontSize={'1.1em'} backgroundColor={themeColor}/>
              </div>
          
        ))}
          
          
        </div>
      </div>
      <div className='contactsSection'>
        <h3>Contacts</h3>
        <div className='contactsContainer'>
        
          {Object.entries(contacts).map(([platformName,url]) => (
            <div className='contactIndividualContainer'>
              <Contact key={platformName} color={themeColor} platform={platformName} url={url}/>
            </div>
          
          ))}
        </div>
        
      </div>
    </>
      
    
  )
}

export default Profile