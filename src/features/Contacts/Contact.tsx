import React, { type JSX } from 'react'
import { FaBeer,FaFacebook,FaInstagram, FaLinkedin, FaTwitter  } from 'react-icons/fa'
import './Contact.css'


interface ContactProps{
    color: string,
    url: string,
    platform: string
}
function Contact({color, url,platform}:ContactProps) {

  const icons: Record<string, JSX.Element> = {
      instagram: <FaInstagram size={50} color={color} />,
      twitter: <FaTwitter size={50} color={color} />,
      facebook: <FaFacebook size={50} color={color} />,
      linkedin: <FaLinkedin size={50} color={color} />,
      beer: <FaBeer size={50} color={color} /> 
    }
  
    const icon = icons[platform.toLowerCase()]

  return (

      <div className='contactIndividualContainer'>
          
          <a
            href={url}          
            target="_blank"     
            rel="noopener noreferrer" 
          >
          {icon}
          </a>
        </div>
          
    
  )
}

export default Contact