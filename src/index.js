import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './tailwind.css';

import './index.css';

// Headers
import HeaderFlorida from "./components/headers/header_florida/header";
import HeaderGeorgia from "./components/headers/header_georgia/header";
import HeaderColorado from "./components/headers/header_colorado/header";

//Landings
import LandingSlider from './components/landing/landing_slider/slider';
import LandingVideo from './components/landing/landing_video/video';
import LandingHawaii from './components/landing/landing_hawaii/landingHawaii';

//Sections
//import SectionFaq from './components/sections/faq/faq'; 
import CollapseList from './components/sections/collapse_list/collapseList';
import FeaturedCard from './components/sections/featured_card/featuredCard';
import QuickLinks from './components/sections/quick_links/quickLinks';
import SectionFlorida from './components/sections/section_florida/sectionFlorida';

//Footers
import FooterFlorida from './components/footers/footer_florida/footer';
import FooterColorado from './components/footers/footer_colorado/footer';
import FooterGeorgia from './components/footers/footer_georgia/footer';

//Scripts
// Cookie Consent is Required on every site Docs found at https://www.npmjs.com/package/react-cookie-consent 
import CookieConsent from "react-cookie-consent";

// **********************TEST**TEST***********

import SectionApp from './app/app';


// **********************TEST**TEST***********

//IMPORTANT WE NEED TO PURCHASE TAILWIND CSS AT https://tailwindui.com
 //To start project install dependencies
 //npm install mdb-react-ui-kit
 //npm install react-bootstrap bootstrap@5.1.3
 //npm install react-cookie-consent
 //
 //Install TailwindCss 
 //
 // install these dependices then grab your wanted components and stack alter css as needed
 // fill with content

export default function App() {

    return (
        <>
        <Carousel interval={null} indicators={false}>
{/* -----------------------

            Nav Components
        
        --------------------- */}
            <Carousel.Item>
                <HeaderFlorida/>
            </Carousel.Item>
            
            <Carousel.Item>
                <HeaderGeorgia/>
            </Carousel.Item>
            
            <Carousel.Item>
                <HeaderColorado/>
            </Carousel.Item>

        </Carousel>

        {/* -----------------------

            Landing Components
        
        --------------------- */}
        <Carousel className="landing-slider"  interval={null} indicators={false}>

            <Carousel.Item className="landing-slider">
                <LandingSlider/>
            </Carousel.Item>

            <Carousel.Item>
                <LandingVideo/>
            </Carousel.Item>

            <Carousel.Item>
                <LandingHawaii/>
            </Carousel.Item>

        </Carousel>



        {/* -----------------------

            Section Components Update with CRUD System
        
        --------------------- */}


{/* ---------------------------------------------

            Test Section CRUD  
        
-------------------------------------------------- */}

        <SectionApp />
{/* ---------------------------------------------

            Footer Components
        
-------------------------------------------------- */}

        <Carousel  interval={null} indicators={false}>{/* Footer uses mdbootstrap docs can be found at https://mdbootstrap.com/docs/b5/react/navigation/footer/  */}

            <Carousel.Item>
                <FooterFlorida/> 
            </Carousel.Item>
            
            <Carousel.Item>
                <FooterColorado/> 
            </Carousel.Item>
            
            <Carousel.Item>
                <FooterGeorgia/> 
            </Carousel.Item>

        </Carousel>
{/* -----------------------

            Cookie Components
        
        --------------------- */}
        <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>{/* Required by Law  Docs found at https://www.npmjs.com/package/react-cookie-consent */}
        </>
    );
}

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
);