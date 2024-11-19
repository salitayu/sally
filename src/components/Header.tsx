'use client'

import Image from 'next/image'
import logo from '../../public/images/logo.png'
import youtube from '../../public/images/youtube.png'
import github from '../../public/images/github.png'
import linkedin from '../../public/images/linkedin.png'
import { useEffect } from 'react'
import { scroll } from './Portfolio'
import Link from 'next/link'

export default function Header () {
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 1000px)')

        mq.addEventListener('change', (e) => {
            if (e.matches) {
                (document.getElementById('s-navbar-toggle') as HTMLInputElement).checked = false
            }
        })

        document.body.onresize = function() {
            (document.getElementsByClassName('s-navbar-menu')[0] as HTMLElement).style.transition = 'none'
            setTimeout(() => {
                (document.getElementsByClassName('s-navbar-menu')[0] as HTMLElement).style.transition = '0.2s'
            }, 1000)
        }

        for (let item of document.getElementsByClassName('s-navbar-items') as any) {
            item.addEventListener('click', () => {
                (document.getElementById('s-navbar-toggle') as HTMLInputElement).checked = false
            })
        }
        
        document.body.addEventListener('click', (event) => {
          const navbarToggleElement = document.getElementById('s-navbar-toggle')
          const navbarMenu = document.getElementsByClassName('s-navbar-menu')[0]
          const style = window.getComputedStyle(navbarMenu)
          const navbarMenuWidth = style.getPropertyValue('width')
          if (event.target !== navbarToggleElement || 
            (event.target === navbarToggleElement && navbarMenuWidth !== '0px')) {
            (document.getElementById('s-navbar-toggle') as HTMLInputElement).checked = false
          }
        })
    }, [])

    return (
        <nav className="s-navbar-header">
            <input id="s-navbar-toggle" type="checkbox"></input>
            <label htmlFor="s-navbar-toggle" className="s-burger-icon">
                <div className="s-burger-line"></div>
                <div className="s-burger-line"></div>
                <div className="s-burger-line"></div>
            </label>
            <div className="s-header-logo"><a id="s-header-details" onClick={() => scroll('s-home-section')}>
                <Image className="s-logo-image" src={logo} height={50} width={50} alt="logo" />
                <span className="s-logo-text">Sally Tan</span></a>
            </div>
            <ul className="s-navbar-menu">
                <li className="s-navbar-items" onClick={() => scroll('s-home-section')}><i className="fa-solid fa-house-chimney"></i>Home</li>
                <li className="s-navbar-items" onClick={() => scroll('s-about-section')}><i className="fa-solid fa-heart"></i>About</li>
                <li className="s-navbar-items" onClick={() => scroll('s-work-section')}><i className="fa-solid fa-briefcase"></i>Work</li>
                <li className="s-navbar-items" onClick={() => scroll('s-tech-section')}><i className="fa-solid fa-computer"></i>Tech</li>
                <li className="s-navbar-items" onClick={() => scroll('s-projects-section')}><i className="fa-solid fa-lightbulb"></i>Projects</li>
                <li className="s-navbar-items" onClick={() => scroll('s-contact-section')}><i className="fa-solid fa-address-card"></i>Contact</li>
            </ul>
            <ul className="s-navbar-rightmenu">
            <Link href={'https://www.youtube.com/channel/UCFES_O7aYbABx3D39tR4SaA'} target="_blank">
                <Image src={youtube} alt="cart" layout="raw" width={28} height={23}></Image>
            </Link>
            <Link href={'https://github.com/stanyu2013'} target="_blank">
                <Image src={github} alt="github" layout="raw" width={28} height={23}></Image>
            </Link>
            <Link href={'https://github.com/salitayu'} target="_blank">
                <Image src={github} alt="github" layout="raw" width={28} height={23}></Image>
            </Link>
            <Link href={'https://www.linkedin.com/in/sally-tan-a7018b57/'} target="_blank">
                <Image src={linkedin} alt="linkedin" layout="raw" width={28} height={23}></Image>
            </Link>
            </ul>
        </nav>
    )
}