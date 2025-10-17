import React from 'react'
import './Profile.css'
import Tag from '../../components/Tag/Tag'
import Contact from '../Contacts/Contact';
import Graph from '../../components/Graph/Graph';
import Carousel from '../../components/Carousel/Carousel';
function Profile() {

  const themeColor = '#d088e6';
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


  const description = 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'
  const keywords  = ["Artista","Genio"];

  return (
    <>

    <div>
      <Carousel/>
    </div>


    <div className='descriptionSection'>
      <div className='descriptionContainer' style={{backgroundColor:themeColor}}>
        <p>{description}</p>
      </div>
      <div className='keywordContainer'>
        <Tag name={keywords[0]} fontSize='1.5em' backgroundColor={themeColor}></Tag>
        <Tag name={keywords[1]} fontSize='1.5em' backgroundColor={themeColor}></Tag>
      </div>
      <div className='graphContainer'>
        <Graph themeColor={themeColor}/>
      </div>
    </div>

      <div className='lookingForSection'>
        <h3 className='title'>Looking For</h3>
        <div className='lookingForTags'>
          
            {Object.values(lookingFor).map((word,index) => (   
              <div key={index} className='lookingForTagsIndividualContainer'>        
                <Tag  name={word} fontSize={'1.1em'} backgroundColor={themeColor}/>
              </div>
          
        ))}
          
          
        </div>
      </div>
      <div className='contactsSection'>
        <h3>Contacts</h3>
        <div className='contactsContainer'>
        
          {Object.entries(contacts).map(([platformName,url]) => (
            <div key={platformName} className='contactIndividualContainer'>
              <Contact  color={themeColor} platform={platformName} url={url}/>
            </div>
          
          ))}
        </div>
        
      </div>
    </>
      
    
  )
}

export default Profile