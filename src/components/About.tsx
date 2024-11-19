import { scroll } from './Portfolio'

export default function About() {
    return (
        <div className="s-profile-section" id="s-about-section">
            <div className="s-about-container">
                <div className="s-about-content">
                    <h1>About Me</h1>
                    <p>For as long as I can remember, I have always been intrigued by the world of technology. 
                       I would spend every weekend at a store as a cashier selling CDs/DVDs/Bluerays, computers, laptops, MP3s and other popular electronics.
                       My parents gifted me Super Mario games during the holidays, and I would play them all vacation long.
                       My real fascination for tech though, began back in high school when I decided to take a graphic web design elective that was offered at my school.
                       I started my journey by using Adobe Creative Suite to design everything from shirts to yearbooks.
                       Then, I became proficient in HTML and CSS to create my first websites. I remember the first large project that I made was a website to sell blackberry phones, which were trending at the time.
                       I spent hours after class investigating how to create scrolling and navbar animations for my personal website. 
                       On weekends, I would try to figure out how to make my site more interactive by having a cart and sending emails.
                       That year, I also interned at a local computer manufacturer as a quality assurance and laptop assembler, where I installed hardware + software onto machines and ensured sound, software, and hardware quality.
                       Back in school, I continued with graphic web design, and later with yearbook design.</p>
                    <p>That was how I discovered PHP and JavaScript. 
                       I enjoyed it so much I went on to major in Computer Science to dive deep into the technical details of programming. 
                       After I graduated, I started working as a Software Engineer in various industries related to ecommerce, edtech, aerospace, biometrics, and logistics. 
                       I was also able to contribute to Booz Allen Hamilton Data Science Futures Hackathon and Florida Tech Major League Hackathon where my team and I won first place.
                       I am lucky to be part of these amazing industries that help shape the world and feel extremely grateful to have the opportunity to develop my computer science skills along the way. 
                       Furthermore, I have been able to live in a few amazing places including Florida, Virginia, and Washington. I am also passionate about learning and continuing to improve on spoken languages, including Cantonese, Mandarin, Spanish, French, and English.
                       Check out some of my works and projects below.</p>
                    <br/>
                    <a className="s-main-button" onClick={() => scroll("s-work-section")}>Work</a>
                </div>
            </div>
        </div>
    )
}