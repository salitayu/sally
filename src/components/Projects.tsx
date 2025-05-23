import Image from 'next/image'
import { scroll } from './Portfolio'

function Projects() {
    return (
        <div id="s-projects-section">
            <h1>Projects</h1>
            <p>These are the projects I created during my free time. Most of them are business related.</p>
            <div className="s-projects-container">
              <div className="s-project-content">
                <div className="s-project-title">
                  <h1>EcomCart</h1>
                </div>
                <div className="s-project-images">
                  <Image src="/images/cart.png" alt="cart" layout="raw" />
                  <Image src="/images/shoppingcart.png" alt="shopping" layout="raw"  />
                  <Image src="/images/bulkadd.png" alt="add merchandise to ecommerce site" layout="raw" />
                </div>
                <p className="s-project-description">
                EcomCart is an interactive web application that helps people that want to start their business online. 
                Through EcomCart, businesses can manage their inventory,
                add or remove products in their virtual warehouse, and customize their online presence.
                Then, these businesses can allow their customers to create an account, shop for the products they want, add or remove from shopping cart, and pay for the 
                items they want to buy online.
                </p>
              </div>
              <div className="s-project-content">
                <div className="s-project-title">
                  <h1>ServiceAppointment</h1>
                </div>
                <div className="s-project-images">
                  <Image src="/images/smallbusiness.png" alt="small business" layout="raw" />
                  <Image src="/images/smallbusiness1.png" alt="small business 1" layout="raw" />
                  <Image src="/images/smallbusiness2.png" alt="small business 2" layout="raw" />
                </div>
                <p className="s-project-description">
                ServiceAppointment is a web application that serves as a tool to help businesses set up service appointments to their customers. 
                This tool can provide appointments for any service ranging from home installation, tax preparation, computer repair, and any other service as long as an appointment is necessary.   
                ServiceAppointment allows businesses to add or remove services and set prices to the services. Then, their clients can select services, book appointments, and pay for the appointments online.  
                </p>
              </div>
              <div className="s-project-content">
                <div className="s-project-title">
                  <h1>TakeoutOrder</h1>
                </div>
                <div className="s-project-images">
                  <Image src="/images/restaurantorder4.png" alt="restaurant order 4" layout="raw" />
                  <Image src="/images/restaurantorder2.png" alt="restaurant order 2" layout="raw" />
                  <Image src="/images/restaurantorder5.png" alt="restaurant order 5" layout="raw" />
                </div>
                <p className="s-project-description">
                TakeoutOrder is a web portal that helps restaurant owners provide takeout services to their customers. Restaurants can update their menu, add or remove food items, and introduce their customers to their restaurants.
                Customers can create an account, browse through the food menu, select sizes, portions, combos, and purchase food through this portal.
                </p>
              </div>
            </div>
            <br />
            <h1>Hackathons</h1>
            <p>These are the hackathon projects I created during the weekends with my team. Most of them are creative in nature.</p>
            <div className="s-teamproject-container">
              <div className="s-teamproject-content">
                <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw"/>
                <h1 className="s-teamproject-title">Scan and Go For Everyone</h1>
                <p className="s-teamproject-description">
                  At the Walmart Global Tech Techathon, my team and I worked on the Scan and Go Android Version for everyone. When users scanned an item, I added some suggestions for them.
                  I created the recommendation system for the Scan and Go app as an extra functionality, and my team added buttons and search for interactivity with Scan and Go on the main Walmart app.
                </p>
              </div>
              <div className="s-teamproject-content">
                <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw"/>
                <h1 className="s-teamproject-title">Data Science Futures Hackathon</h1>
                <p className="s-teamproject-description">
                  At Booz Allen Hamilton Data Science Futures Hackathon, my team and I worked on classifying videos from U.S. Army Mad Scientist data to discover insights and improve mission operations.
                  I expedited video processing times with comparing Google Speech API, and used Elasticsearch, Logstash, and Kibana to create dashboards with the results.
                </p>
              </div>
              <div className="s-teamproject-content">
                <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw"/>
                <h1 className="s-teamproject-title">Thales Arduino Challenge</h1>
                <p className="s-teamproject-description">
                  At Thales Arduino Challenge, I worked with college students at Embry Riddle University to use the breadboard in Arduino and write software to control it. I also worked on the projects myself, 
                  including turning on a lightswitch, displaying text to a display, and creating a magic eightball. After that, I also gave perspective software engineers an overview of work at Thales, and saw their Hackathon projects.
                </p>
              </div>
            </div>
            <div className="s-teamproject-container">
              <div className="s-teamproject-content">
                <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw" />
                <h1 className="s-teamproject-title">SheekDance</h1>
                <p className="s-teamproject-description">
                  SheekDance selects music to play according to the scene shown in pictures. This app allows you to take a picture
                  and it will perform a predictive analysis on the contents of the image to play music that suits the ambiance. While the app plays the music,
                  our cute cozmo robot busts a move to the tunes.
                </p>
              </div>
              <div className="s-teamproject-content">
                <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw" />
                <h1 className="s-teamproject-title">ScanAlert</h1>
                <p className="s-teamproject-description">
                  ScanAlert scans barcodes and determines whether that product
                  contains ingredients the user is allergic to or conscious about
                  eating based on the information they have entered. This application
                  was built to promote a healthier lifestyle and inform consumers
                  about the foods they eat.
                </p>
              </div>
              <div className="s-teamproject-content">
              <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw" />
              <h1 className="s-teamproject-title">Cura</h1>
              <p className="s-teamproject-description">
                Cura takes the insurance coverage information of a user and combines it
                with a diagnosis it creates based on their symptoms of
                sickness. A host of the nearest relevant doctors for the patient to
                visit is then produced. From here, the user can view each doctor and
                their contact information.
              </p>
              </div>
            </div>
            <br/>
            <a className="s-main-button" onClick={() => scroll('s-contact-section')}>CONTACT</a>
    </div>
    )
}

export default Projects