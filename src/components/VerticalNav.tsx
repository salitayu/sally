import { scroll } from './Portfolio'

export default function VerticalNav() {
    return (
        <div className="s-buttonnav-container">
            <div className="s-buttonnav-item">
                <a onClick={() => scroll("s-home-section")} className="s-buttonnav-link"></a>
                <span className="s-buttonnav-label">Home</span>
            </div>
            <div className="s-buttonnav-item">
                <a onClick={() => scroll("s-about-section")} className="s-buttonnav-link"></a>
                <span className="s-buttonnav-label">About</span>
            </div>
            <div className="s-buttonnav-item">
                <a onClick={() => scroll("s-work-section")} className="s-buttonnav-link"></a>
                <span className="s-buttonnav-label">Work</span>
            </div>
            <div className="s-buttonnav-item">
                <a onClick={() => scroll("s-tech-section")} className="s-buttonnav-link"></a>
                <span className="s-buttonnav-label">Tech</span>
            </div>
            <div className="s-buttonnav-item">
                <a onClick={() => scroll("s-projects-section")} className="s-buttonnav-link"></a>
                <span className="s-buttonnav-label">Projects</span>
            </div>
            <div className="s-buttonnav-item">
                <a onClick={() => scroll("s-contact-section")} className="s-buttonnav-link"></a>
                <span className="s-buttonnav-label">Contact</span>
            </div>
        </div>
    )
}