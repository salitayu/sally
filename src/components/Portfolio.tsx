import Header from './Header'
import VerticalNav from './VerticalNav'
import Home from './Home'
import About from './About'
import Work from './Work'
import Projects from './Projects'
import Tech from './Tech'
import Contact from './Contact'
import Footer from './Footer'

export default function Portfolio() {
    return (
        <div className="s-main-portfolio">
            <Header />
            <VerticalNav />
            <Home />
            <About />
            <Work />
            <Tech />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export const scroll = (elementId: string) => {
    const element:HTMLElement|null = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
}