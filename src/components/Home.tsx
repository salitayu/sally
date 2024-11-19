'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import profileImage from '../../public/images/sally.jpg'
import { scroll } from './Portfolio'

class RotateText {
    element: Element
    toRotate: string
    period: string | number | null
    loopNumber: number
    text: string

    constructor(element: Element, toRotate: string, period: string | null) {
        this.element = element
        this.toRotate = toRotate
        this.loopNumber = 0
        this.period = parseInt(period!, 0) || 1
        this.text = ""
        this.tick()
    }

    tick() {
        const i = this.loopNumber % this.toRotate.length
        const fullText = this.toRotate[i]
        this.text = fullText.substring(0, this.text.length + 1)
        this.element.innerHTML = `<span class="wrap">` + this.text + "</span>"
        const that = this
        let delta: any = 120 - Math.random() * 100
        
        if (this.text === fullText) {
            delta = this.period
        }

        setTimeout(() => {
            that.tick()
        }, delta)
    }
}

export default function Home() {
    useEffect(() => {
        const elements = document.getElementsByClassName("s-text-rotate")
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute("data-rotate")
            const period = elements[i].getAttribute("data-period")
            if (toRotate) {
                new RotateText(elements[i], JSON.parse(toRotate), period)
            }
        }
        const css = document.createElement("style")
        css.type = "type/css"
        css.innerHTML = ".s-text-rotate > .wrap { border-right: 0.08em solid #666 }"
        document.body.appendChild(css)
    }, [])

    return (
        <section id="s-home-section">
        <div className="s-home-container">
            <section className="st-home-image">
            <Image src={profileImage} alt="Image of Sally" layout="raw" width={500} height={500} />
            </section>
            <article className="s-home-content">
                    <h1>Hi, my name is <span className="s-text-rotate" data-period="1" data-rotate='["Sally Tan."]'></span></h1><br></br>
                    <h1>Welcome to my Computer Science Portfolio.</h1>
                    <p>I am a Software Engineer based in the greater Seattle area.</p>
                    <p>My passion is to build products that make our world a better place.</p>
                    <p>I am working on the Walmart+ Scan and Go mobile app and the self checkout app that are present at the stores.</p>
                    <p>The main technologies I use on a day to day basis are JavaScript, Java, Python, Kotlin, and Go.</p>
                    <p>In my free time, I enjoy building web apps, creating programming tutorials, and attending hackathons.</p>      
                    <p>Apart from work, I also enjoy hiking, gardening, and playing ping pong.</p>
                    <p>Come learn more about me here.</p>
                    <br></br>
                    <a className="s-main-button" onClick={() => scroll("s-about-section")}>About Me</a>
                </article>
            </div>
        </section>
    )
}