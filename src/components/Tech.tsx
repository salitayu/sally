'use client'

import { scroll } from './Portfolio'

function Tech() {
    return (
        <div id="s-tech-section">
            <h1>Tech</h1>
            <p>These are the tech stacks I used for my work and projects.</p>
            <div className="s-tech-container">
                <div className="s-tech-description">
                    <p><strong>Tech Stack at Walmart</strong><br/>
                    Frontend: Kotlin, XML, React Native<br/>
                    Backend: JavaScript, Java<br/>
                    Database: SQL Server<br/>
                    Environment: MacOS<br/>
                    Version Control: GitHub<br/>
                    Continuous Integration: Jenkins, SonarQube</p>
                </div>
                <div className="s-tech-description">
                    <p><strong>Tech Stack at Kiddom</strong><br/>
                    Frontend: HTML, CSS, JavaScript (ReactJS, TypeScript), Material UI<br/>
                    Backend: Go, JavaScript (NodeJS)<br/>
                    Database: MySQL<br/>
                    Environment: MacOS<br/>
                    Version Control: GitHub<br/>
                    Continuous Integration: CircleCI</p>
                </div>
                <div className="s-tech-description">
                    <p><strong>Tech Stack at Thales</strong><br/>
                    Frontend: HTML, CSS, JavaScript (JQuery, ReactJS)<br/>
                    Backend: Python (Django, Pandas), <br/>C# (ASP.NET, WPF)<br/>
                    Database: SQL Server<br/>
                    Environment: Windows, Linux<br/>
                    Version Control: Team Foundation Server, BitBucket<br/>
                    Continuous Integration: Octopus, Jenkins</p>
                </div>
              <div className="s-tech-description">
                <p><strong>Tech Stack at Computer Task Group</strong><br/>
                Frontend: HTML, CSS, JavaScript (JQuery), Bootstrap<br/>
                Backend: JavaScript (Node.js, Sails.js), <br/>translated from Java<br/>
                Database: RedisService<br/>
                Environment: MacOS<br/>
                Version Control: GitHub<br/>
                Continuous Integration: Jenkins</p>
              </div>
              <div className="s-tech-description">
                <p><strong>Tech Stack at Dycom</strong><br/>
                Frontend: HTML, CSS, <br/>JavaScript (JQuery, AngularJS1)<br/>
                Backend: Python (Django, Flask)<br/>
                Database: MySQL<br/>
                Environment: Linux (CentOS)<br/>
                Version Control: GitHub<br/>
                Continuous Integration: Jenkins</p>
              </div>
              <div className="s-tech-description">
                <p><strong>Tech Stack at Operation Smile</strong><br/>
                Frontend: PhoneGap, OnsenUI, <br/>AngularJS1, JavaScript<br/>
                Backend: N/A<br/>
                Database: SQLite<br/>
                Environment: Android, iOS, Windows<br/>
                Version Control: GitHub<br/>
                Continuous Integration: N/A</p>
              </div>
              <div className="s-tech-description">
                <p><strong>Tech Stack for my projects</strong><br/>
                Frontend: HTML, CSS, JavaScript (ReactJS, VueJS)<br/>
                Backend: Django, NodeJS<br/>
                Database: PostgreSQL<br/>
                Environment: Windows<br/>
                Mobile: PhoneGap, OnsenUI<br/>
                Continuous Integration: N/A</p>
              </div>
              <div className="s-tech-description">
                <p><strong>Tech Stack for hackathons</strong><br/>
                Frontend: HTML, CSS, JavaScript<br/>
                Backend: NodeJS<br/>
                Database: SQLite<br/>
                Environment: Windows<br/>
                Mobile: PhoneGap, OnsenUI<br/>
                Continuous Integration: N/A</p>
              </div>
              <div className="s-tech-description">
                <p><strong>Tech Stack I am interested in</strong><br/>
                Frontend: Tailwind CSS<br/>
                Backend: Go<br/>
                Database: GraphQL<br/>
                Environment: Mac, Linux<br/>
                Mobile: iOS<br/>
                Continuous Integration: Jenkins</p>
              </div>
            </div>
            <br/>
            <a className="s-main-button" onClick={() => scroll('s-projects-section')}>PROJECTS</a>
    </div>
    )
}

export default Tech
