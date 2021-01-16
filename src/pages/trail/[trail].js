import React from 'react'
import styles from '../../css/Trail.module.css'


export default function Trail({ trail }) {

    return (
        <div className={styles.containerTrail}>
            <title>{trail.title} - Trail</title>
            <div className={styles.content1}>
                <div className={styles.title}>
                    <p className={styles.textInfo}>
                        <p className={styles.trailTitle}>{trail.title}</p>
                        <div className={styles.trailParams}>
                            <p className={styles.param}>{trail.distance}</p>
                            <p
                                className={styles.param}
                                style={{color: trail.type === "Forest" ? "#00BC71" : "#8BBC00"}}
                            >
                                {trail.type} <span style={{color: "var(--text)"}}>type</span>
                            </p>
                            <p className={styles.param}>{trail.region} region</p>
                        </div>
                    </p>
                    <img
                        className={styles.backgroundForTitle}
                        src={trail.photos.contents[0]}
                        alt="title background"
                    />
                </div>
                <div className={styles.forestIcons}>
                    {trail.photos.icons.map((e) => (
                        <img className={styles.trailIcon} alt="icon" src={e} key={e} />
                    ))}
                </div>
            </div>
            <div className={styles.gInfo}>
                <p className={styles.generalText}>{trail.texts.general}</p>
            </div>
            <p className={styles.subtitle}>Take a look on some photos</p>
            <div className={styles.mainPhotos}>
                {([...trail.photos.main]).map(e=>
                    <img
                        className={styles.mainImg}
                        src={e}
                        key={e}
                        alt=""
                    />
                )}
            </div>
            <div className={styles.mainContentContainer}>
                <div>
                    <div className={styles.textSection1}>
                        <div>
                            {trail.texts.content1.map((e) => (
                                <p key={e} className={styles.content}>{e}</p>
                            ))}
                        </div>
                        <img className={styles.largeIcon} alt="icon" src={trail.photos.icons[0]} />
                    </div>
                    <div className={styles.textSection2}>
                        {trail.texts.content2.map((e) => (
                            <p key={e} className={styles.content}>{e}</p>
                        ))}
                    </div>
                    <div className={styles.textSection3}>
                        <img className={styles.largeIcon} alt="icon" src={trail.photos.icons[1]} />
                        {trail.texts.content3.map((e) => (
                            <p key={e} className={styles.content}>{e}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.gallery}>
                    <p className={styles.galleryText}>Gallery</p>
                    <div className={styles.photos}>
                        {([...trail.photos.contents]).map(e=>
                            <img
                                className={styles.galleryImg}
                                src={e}
                                key={e}
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(ctx) {
   const trails = (await import('../../../data/trails.json')).default

   return {
       props: {
           trail: trails[ctx.params.trail]
       }
   }
}

export async function getStaticPaths() {
    const trails = await import('../../../data/trails.json')
    return {
        paths: Object.keys(trails.default).map((e) => ({
            params: {
                trail: e
            }
        })),
        fallback: false
    }
}
