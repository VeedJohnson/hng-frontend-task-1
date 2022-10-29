import React from 'react'
import LinkCard from './resusable/LinkCard';
import "./styles/LinkCard.css"

import slackLogo from "../assets/images/slack.png";
import githubLogo from "../assets/images/Icon.png";

const itemsList = [
    {
        title: "Zuri Team",
        id: "btn__zuri",
        link: "https://training.zuri.team/"
    },
    {
        title: "Zuri Books",
        id: "books",
        link: "http://books.zuri.team",
        subtext: "Unlimited resources for everything coding and design"
    },
    {
        title: "Python Book",
        id: "book__python",
        link: "https://books.zuri.team/python-for-beginners?ref_id=veed",
        subtext: "You think you know python? This book will surprise you"
    },
    {
        title: "Background Check for Coders",
        id: "pitch",
        link: "https://background.zuri.team",
        subtext: "Found your talent? Let's take care of the background investigation"
    },
    {
        title: "Design Rules Book",
        id: "book__design",
        link: "https://books.zuri.team/design-rules",
        subtext: "Know these rules before you design your next product"
    },
]

const Links = () => {
  return (
    <div>
        {
            itemsList.map(item => (
                <LinkCard 
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    link={item.link}
                    subtext={item.subtext}
                />
            ))
        }
        <div id="social__links">
            <a href="slack.com"><img src={slackLogo} alt="slack"/></a>
            <a href="slack.com"><img src={githubLogo} alt="github"/></a>
        </div>
    </div>
  )
}

export default Links;