import React from 'react';
import "../styles/LinkCard.css"

const LinkCard = ({title, link, id, subtext}) => {
  return (
        <a href={link} id={id} className="link">
            <span>{title}</span>
            <span>{subtext}</span>
        </a>
  )
}

export default LinkCard;