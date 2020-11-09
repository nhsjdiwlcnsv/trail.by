import React from 'react'
import styles from '../css/Trails.module.css'
import TrailCard from "../components/TrailCard"
import trailsAnimation from "../scripts/trailsAnimations"
import Footer from "../navigation/Footer";
import { HiOutlineSearch } from "react-icons/hi"
import { IconContext } from "react-icons/"


const Trails = () => {

    trailsAnimation()

    return (
        <div className={styles.containerTrails}>
            <div className={styles.containerCentered}>
                <div className={styles.searchTrails}>
                    <div className={styles.searchContainer}>
                        <IconContext.Provider value={{className: styles.searchOutline, size: "2.5em"}}>
                            <input className={styles.search} type="text"/>
                            <HiOutlineSearch />
                        </IconContext.Provider>
                    </div>
                </div>
                <div className={styles.chosenParams}>

                </div>
                <div className={styles.divider}>
                    <img alt="fir-icon" src="../../public/images/icons/Fir.svg" />
                    <img alt="fir-icon" src="../../public/images/icons/Fir.svg" />
                    <img alt="fir-icon" src="../../public/images/icons/Fir.svg" />
                </div>
                <div className={styles.results}>
                    <TrailCard
                        title="Elnya"
                        region="Vitebsk"
                        type="Swamp"
                        distance="4 km 6 km"
                        background="/images/ecotrails/Elnya/IMG_20200726_140411.jpg"
                        trailName="elnya"
                    />
                    <TrailCard
                        title="Blue Lakes"
                        region="Minsk"
                        type="Forest"
                        distance="4 km 7 km"
                        background="/images/ecotrails/BlueLakes/BlueLakes1.jpg"
                        trailName="blue-lakes"
                    />
                    <TrailCard
                        title="Bielakorac"
                        region="Minsk"
                        type="Forest"
                        distance="1.4 km"
                        background="/images/ecotrails/Bielakorac/IMG_20200426_162616.jpg"
                        trailName="bielakorac"
                    />
                    <TrailCard
                        title="Svyatye Krinitsi"
                        region="Minsk"
                        type="Forest"
                        distance="250 m"
                        background="/images/ecotrails/SvyatyeKrinitsi/5d8db85a19e81-1-4.jpg"
                        trailName="svyatye-krinitsi"
                    />
                    <TrailCard
                        title="Olmanskie swamps"
                        region="Brest"
                        type="Swamp"
                        distance="1.5 km"
                        background="/images/ecotrails/OlmanskieSwapms/dsc_0433-1536x1021.jpg"
                        trailName="olmanskie-swamps"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Trails;
