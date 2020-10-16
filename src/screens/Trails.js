import React from 'react';
import '../css/Trails.css'
import TrailCard from "../components/TrailCard";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi"
import { IconContext } from "react-icons/"
import Fir from "../media/icons/Fir.svg"
import Elnya from '../media/images/Elnya/IMG_20200726_140411.jpg'
import BlueLakes from '../media/images/BlueLakes/BlueLakes1.jpg'
import Bielakorac from '../media/images/Bielakorac/IMG_20200426_162616.jpg'
import SvyatyeKrinitsi from '../media/images/SvyatyeKrinitsi/5d8db85a19e81-1-4.jpg'
import OlmanskieSwamps from '../media/images/OlmanskieSwapms/IMG_20200726_133749.jpg'


const Trails = () => {
    const [isShown, setIsShown] = React.useState(false);
    const [isShown1, setIsShown1] = React.useState(false);
    const [isShown2, setIsShown2] = React.useState(false);
    return (
        <div className="containerTrails">
            <div className="container-centered">
                <div className="search-trails">
                    <div className="search-container">
                        <IconContext.Provider value={{className: "search-outline", size: "2.5em"}}>
                            <input className="search" type="text" /><HiOutlineSearch />
                        </IconContext.Provider>
                    </div>
                    <div className="parameters">
                        <div className={isShown ? "param-container param-container-active" : "param-container"}>
                            <div className="btn-title">
                                <p>Type</p>
                                <button
                                    className="popUp-btn"
                                    onClick={() => setIsShown(!isShown)}
                                >
                                    <IconContext.Provider value={{className: "chevron", size: "3em"}}>
                                        <HiChevronDown />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            <div className="params-list">
                                {isShown && (
                                    <div className="list">
                                        <p>Forest</p>
                                        <p>Swamp</p>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                        <div className={isShown1 ? "param-container param-container-active" : "param-container"}>
                            <div className="btn-title">
                                <p>Region</p>
                                <button
                                    className="popUp-btn"
                                    onClick={() => {setIsShown1(!isShown1)}}
                                >
                                    <IconContext.Provider value={{className: "chevron", size: "3em"}}>
                                        <HiChevronDown />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            <div className="params-list">
                                {isShown1 && (
                                    <div className="list">
                                        <p>Brest</p>
                                        <p>Vitebsk</p>
                                        <p>Gomel</p>
                                        <p>Grodno</p>
                                        <p>Minsk</p>
                                        <p>Mogilev</p>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                        <div className={isShown2 ? "param-container param-container-active" : "param-container"}>
                            <div className="btn-title">
                                <p>Distance</p>
                                <button
                                    className="popUp-btn"
                                    onClick={() => setIsShown2(!isShown2)}
                                >
                                    <IconContext.Provider value={{className: "chevron", size: "3em"}}>
                                        <HiChevronDown />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            <div className="params-list">
                                {isShown2 && (
                                    <div className="list">
                                        <p>100m</p>
                                        <p>350m</p>
                                        <p>960m</p>
                                        <p>1.4km</p>
                                        <p>1.5km</p>
                                        <p>2.5km</p>
                                        <p>6km</p>
                                        <p>7.5km</p>
                                        <p>14km</p>
                                        <p>16km</p>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chosen-params">
                    <p><span className="marked">Minsk</span>, <span className="marked">Vitebsk</span> and <span className="marked">Brest</span> regions trails</p>
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
                    />
                    <TrailCard
                        title="Blue Lakes"
                        region="Minsk"
                        type="Forest"
                        distance="4 km 7 km"
                        background={BlueLakes}
                    />
                    <TrailCard
                        title="Bielakorac"
                        region="Minsk"
                        type="Forest"
                        distance="1.4 km"
                        background={Bielakorac}
                    />
                    <TrailCard
                        title="Svyatye Krinitsi"
                        region="Minsk"
                        type="Forest"
                        distance="250 m"
                        background={SvyatyeKrinitsi}
                    />
                    <TrailCard
                        title="Olmanskie swamps"
                        region="Brest"
                        type="Swamp"
                        distance="1.5 km"
                        background={OlmanskieSwamps}
                    />
                    <TrailCard
                        title="Yuckovskij rodnik"
                        region="Minsk"
                        type="Forest"
                        distance="100 m"
                    />
                    <TrailCard
                        title="Syabryn crossroads"
                        region="Minsk"
                        type="Forest"
                        distance="960 m"
                    />
                    <TrailCard
                        title="Stone plate"
                        region="Minsk"
                        type="Forest"
                        distance="7.5 km"
                    />
                    <TrailCard
                        title="Along the forest reserve trail"
                        region="Minsk"
                        type="Forest"
                        distance="2.5 km"
                    />
                </div>
            </div>
        </div>
    );
}

export default Trails;