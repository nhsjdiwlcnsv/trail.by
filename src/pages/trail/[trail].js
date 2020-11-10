import React from 'react'
import styles from '../../css/Trail.module.css'
import HeaderBackground from '../../components/trail/HeaderBackground'

export default function Trail({ trail }) {
  return (
    <div className={styles.containerTrail}>
      <div className={styles.content1}>
        <div className={styles.container}>
          <HeaderBackground backgrounds={trail.photos.backgrounds} />
          <p className={styles.trailTitle}>{trail.title}</p>
        </div>
        <div className={styles.forestIcons}>
          {trail.photos.icons.map((e) => (
            <img className={styles.trailIcon} alt="icon" src={e} key={e} />
          ))}
        </div>
      </div>
      <div className={styles.gInfo}>
        <div className={styles.gText}>
          <p className={styles.generalTitle}>General information</p>
          <p className={styles.generalText}>{trail.texts.general}</p>
        </div>
        <div>
          <img
            height="100%"
            src={trail.photos.contents[0]}
            style={{
              clipPath:
                'polygon(100% 0, 100% 100%, 69% 89%, 44% 91%, 19% 78%, 14% 40%, 21% 27%, 20% 7%, 44% 0, 63% 9%)'
            }}
          />
        </div>
      </div>
      <div className={styles.mainContentContainer}>
        <div>
          <div className={styles.part1}>
            <p className={styles.pTitle}>About the trail</p>
            {trail.texts.content1.map((e) => (
              <p key={e} className={styles.pContent}>
                {e}
              </p>
            ))}
          </div>
          <div className={styles.part2}>
            <img
              width="100%"
              height="100%"
              src={trail.photos.contents[1]}
              style={{
                clipPath:
                  'polygon(0 0, 0 100%, 35% 96%, 60% 81%, 81% 76%, 90% 60%, 80% 46%, 79% 16%, 65% 0, 38% 9%)'
              }}
            />
            <div className={styles.pContentContainer}>
              {trail.texts.content2.map((e) => (
                <p key={e} className={styles.pContent}>
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.part3}>
            <div>
              <p className={styles.galleryText}>Gallery</p>
            </div>
            <div className={styles.photos}>
              {([...trail.photos.backgrounds, ...trail.photos.contents]).map(e=>
              <img
                className={styles.galleryImg}
                src={e}
                key={e}
                alt=""
              />)}
            </div>
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
