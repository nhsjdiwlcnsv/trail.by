import React from 'react'
import scrollToTop from '../scripts/scrollToTop'
import '../css/Trail.css'
import photos from "../constants/photos"
import texts from "../constants/texts"
import Footer from "../navigation/Footer";


const Trail = props => {

    let pathName = props.history.location.pathname
        .replace('/ecotrail/', '')
        .replace(/([-_]\w)/g, g => g[1].toUpperCase())

    scrollToTop()

    return (
        <div className="containerTrail">
            <div className="content1">
                <div className="container">
                    <svg
                        className="background-path"
                        width="1600"
                        height="887.5"
                    >
                        <defs>
                            <pattern
                                id="pattern1"
                                height="1"
                                width="1"
                            >
                                <image
                                    height="100%"
                                    className="introImage"
                                    href={photos[pathName].background1}
                                />
                            </pattern>
                            <pattern
                                id="pattern2"
                                height="1"
                                width="1"
                            >
                                <image
                                    height="100%"
                                    className="introImage"
                                    href={photos[pathName].background2}
                                />
                            </pattern>
                            <pattern
                                id="pattern3"
                                height="1"
                                width="1"
                                viewBox="0 0 669 665"
                            >
                                <image
                                    height="100%"
                                    className="introImage"
                                    href={photos[pathName].background3}
                                />
                            </pattern>
                        </defs>
                        <symbol id="image1" viewBox="0 0  487 849">
                            <path
                                d="M323.138 0L0 130.089V848.497L487 763.022L385.264 458.647L487 130.089L323.138 0Z"
                                fill="url(#pattern1)"
                            />
                        </symbol>
                        <symbol id="image2" viewBox="0 0 567 806">
                            <path
                                d="M347.083 0.5L20.8333 40.0833L101.667 104.25L0 432.583L101.667 736.75L474.583 805.5L566.25 321.333L347.083 0.5Z"
                                fill="url(#pattern2)"
                            />
                        </symbol>
                        <symbol id="image3" viewBox="0 0 869 861">
                            <path
                                d="M535.551 84.258L0.5 0.5L219.688 321.364L128.012 805.577L300.112 784.742L868.5 860.999V124.262L766.407 136.763L535.551 84.258Z"
                                fill="url(#pattern3)"
                            />
                        </symbol>
                        <g>
                            <use href="#image1" x="0" y="0" width="487" height="849" />
                            <use href="#image2" x="386" y="26" width="567" height="806"/>
                            <use href="#image3" x="733" y="26" width="869" height="861"/>
                        </g>
                    </svg>
                    <p className="trail-title">{texts[pathName].name}</p>
                </div>
                <div className="forest-icons">
                    {photos[pathName].icons.icon1 != null ?<img className="trail-icon" alt="icon" src={photos[pathName].icons.icon1}/> : null}
                    {photos[pathName].icons.icon2 != null ?<img className="trail-icon" alt="icon" src={photos[pathName].icons.icon2}/> : null}
                    {photos[pathName].icons.icon3 != null ?<img className="trail-icon" alt="icon" src={photos[pathName].icons.icon3}/> : null}
                    {photos[pathName].icons.icon4 != null ?<img className="trail-icon" alt="icon" src={photos[pathName].icons.icon4}/> : null}
                    {photos[pathName].icons.icon5 != null ?<img className="trail-icon" alt="icon" src={photos[pathName].icons.icon5}/> : null}
                </div>
            </div>
            <div className="g-info">
                <div className="g-text">
                    <p className="general-title">General information</p>
                    <p className="general-text">{texts[pathName].general}</p>
                </div>
                <div className="first-image">
                    <svg
                        width="687"
                        height="1111"
                        viewBox="0 0 590 970">
                        <defs>
                            <pattern
                                id="pattern4"
                                width="1"
                                height="1"
                                viewBox="0 0 520 850"
                            >
                                <image
                                    height="100%"
                                    className="introImage"
                                    href={photos[pathName].content1}
                                />
                            </pattern>
                        </defs>
                        <path
                            d="M231.189 53.8835L600 0V829.003L441.99 969.538L83.7378 891.99L64.8058 668.446L0 459.466L47.3301 239.199L231.189 53.8835Z"
                            fill="url(#pattern4)"/>
                    </svg>
                </div>
            </div>
            <div className="main-content-container">
                <div className="about-the-trail">
                    <div className="part1">
                        <p className="p-title">About the trail</p>
                        <p className="p-content">{texts[pathName].content1.paragraph1}</p>
                        <p className="p-content">{texts[pathName].content1.paragraph2}</p>
                    </div>
                    <div className="part2">
                        <svg
                            width="550"
                            height="733"
                            viewBox="0 0 550 733">
                            <defs>
                                <pattern
                                    id="pattern5"
                                    width="1"
                                    height="1"
                                    viewBox="0 0 550 733"
                                >
                                    <image
                                        width="100%"
                                        height="100%"
                                        className="introImage"
                                        href={photos[pathName].content2}
                                    />
                                </pattern>
                            </defs>
                            <path
                                d="M159.542 30.1527L0 0V615.505L198.473 732.061L469.084 652.672L516.412 509.924L455.725 368.321L550 196.947L397.71 0L159.542 30.1527Z"
                                fill="url(#pattern5)"/>
                        </svg>
                        <div className="p-content-container">
                            <p className="p-content">{texts[pathName].content2.paragraph1}</p>
                            <p className="p-content">{texts[pathName].content2.paragraph2}</p>
                            <p className="p-content">{texts[pathName].content2.paragraph3}</p>
                        </div>
                    </div>
                    <div className="part3">
                        <div className="gallery">
                            <p>Gallery</p>
                        </div>
                        <div className="photos">
                            <img className="gallery-img" src={photos[pathName].background1} alt="" />
                            <img className="gallery-img" src={photos[pathName].background2} alt="" />
                            <img className="gallery-img" src={photos[pathName].background3} alt="" />
                            <img className="gallery-img" src={photos[pathName].content3} alt="" />
                            <img className="gallery-img" src={photos[pathName].content4} alt="" />
                            <img className="gallery-img" src={photos[pathName].content5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Trail;