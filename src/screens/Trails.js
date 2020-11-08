import React from 'react'
import '../css/Trails.css'
import TrailCard from "../components/TrailCard"
import scrollToTop from '../scripts/scrollToTop'
import trailsAnimation from "../scripts/trailsAnimations"
import Footer from "../navigation/Footer";
import { HiOutlineSearch } from "react-icons/hi"
import { IconContext } from "react-icons/"
import Fir from "../media/icons/Fir.svg"
import Elnya from '../media/images/Elnya/IMG_20200726_140411.jpg'
import BlueLakes from '../media/images/BlueLakes/BlueLakes1.jpg'
import Bielakorac from '../media/images/Bielakorac/IMG_20200426_162616.jpg'
import SvyatyeKrinitsi from '../media/images/SvyatyeKrinitsi/5d8db85a19e81-1-4.jpg'
import OlmanskieSwamps from '../media/images/OlmanskieSwapms/dsc_0433-1536x1021.jpg'


const Trails = () => {

    scrollToTop()
    trailsAnimation()

    return (
        <div className="containerTrails">
            <div className="container-centered">
                <div className="search-trails">
                    <div className="search-container">
                        <IconContext.Provider value={{className: "search-outline", size: "2.5em"}}>
                            <input className="search" type="text"/>
                            <HiOutlineSearch />
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="chosen-params">
                    
                </div>
                <div className="divider">
                    <img alt="fir-icon" src={Fir} />
                    <img alt="fir-icon" src={Fir} />
                    <img alt="fir-icon" src={Fir} />
                </div>
                <div className="results">
                    <TrailCard
                        title="Elnya"
                        region="Vitebsk"
                        type="Swamp"
                        distance="4 km 6 km"
                        background={Elnya}
                        trailName="elnya"
                    />
                    <TrailCard
                        title="Blue Lakes"
                        region="Minsk"
                        type="Forest"
                        distance="4 km 7 km"
                        background={BlueLakes}
                        trailName="blue-lakes"
                    />
                    <TrailCard
                        title="Bielakorac"
                        region="Minsk"
                        type="Forest"
                        distance="1.4 km"
                        background={Bielakorac}
                        trailName="bielakorac"
                    />
                    <TrailCard
                        title="Svyatye Krinitsi"
                        region="Minsk"
                        type="Forest"
                        distance="250 m"
                        background={SvyatyeKrinitsi}
                        trailName="svyatye-krinitsi"
                    />
                    <TrailCard
                        title="Olmanskie swamps"
                        region="Brest"
                        type="Swamp"
                        distance="1.5 km"
                        background={OlmanskieSwamps}
                        trailName="olmanskie-swamps"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Trails;
