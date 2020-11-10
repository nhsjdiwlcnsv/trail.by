import React from 'react'
import styles from '../../css/Trail.module.css'
import HeaderBackground from '../../components/trail/HeaderBackground'


export default function Trail({ photos, texts, pathName }) {
  return (
    <div className={styles.containerTrail}>
      <div className={styles.content1}>
        <div className={styles.container}>
          <HeaderBackground
            backgrounds={[
              photos[pathName].background1,
              photos[pathName].background2,
              photos[pathName].background3
            ]}
          />
          <p className={styles.trailTitle}>{texts[pathName].name}</p>
        </div>
        <div className={styles.forestIcons}>
          {photos[pathName].icons.icon1 != null ? (
            <img
              className={styles.trailIcon}
              alt="icon"
              src={photos[pathName].icons.icon1}
            />
          ) : null}
          {photos[pathName].icons.icon2 != null ? (
            <img
              className={styles.trailIcon}
              alt="icon"
              src={photos[pathName].icons.icon2}
            />
          ) : null}
          {photos[pathName].icons.icon3 != null ? (
            <img
              className={styles.trailIcon}
              alt="icon"
              src={photos[pathName].icons.icon3}
            />
          ) : null}
          {photos[pathName].icons.icon4 != null ? (
            <img
              className={styles.trailIcon}
              alt="icon"
              src={photos[pathName].icons.icon4}
            />
          ) : null}
          {photos[pathName].icons.icon5 != null ? (
            <img
              className={styles.trailIcon}
              alt="icon"
              src={photos[pathName].icons.icon5}
            />
          ) : null}
        </div>
      </div>
      <div className={styles.gInfo}>
        <div className={styles.gText}>
          <p className={styles.generalTitle}>General information</p>
          <p className={styles.generalText}>{texts[pathName].general}</p>
        </div>
        <div>
          <img
            height="100%"
            src={photos[pathName].content1}
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
            <p className={styles.pContent}>
              {texts[pathName].content1.paragraph1}
            </p>
            <p className={styles.pContent}>
              {texts[pathName].content1.paragraph2}
            </p>
          </div>
          <div className={styles.part2}>
            <img
              width="100%"
              height="100%"
              src={photos[pathName].content2}
              style={{
                clipPath:
                  'polygon(0 0, 0 100%, 35% 96%, 60% 81%, 81% 76%, 90% 60%, 80% 46%, 79% 16%, 65% 0, 38% 9%)'
              }}
            />
            <div className={styles.pContentContainer}>
              <p className={styles.pContent}>
                {texts[pathName].content2.paragraph1}
              </p>
              <p className={styles.pContent}>
                {texts[pathName].content2.paragraph2}
              </p>
              <p className={styles.pContent}>
                {texts[pathName].content2.paragraph3}
              </p>
            </div>
          </div>
          <div className={styles.part3}>
            <div>
              <p className={styles.galleryText}>Gallery</p>
            </div>
            <div className={styles.photos}>
              <img
                className={styles.galleryImg}
                src={photos[pathName].background1}
                alt=""
              />
              <img
                className={styles.galleryImg}
                src={photos[pathName].background2}
                alt=""
              />
              <img
                className={styles.galleryImg}
                src={photos[pathName].background3}
                alt=""
              />
              <img
                className={styles.galleryImg}
                src={photos[pathName].content3}
                alt=""
              />
              <img
                className={styles.galleryImg}
                src={photos[pathName].content4}
                alt=""
              />
              <img
                className={styles.galleryImg}
                src={photos[pathName].content5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(ctx) {
  console.log(ctx)
  return {
    props: {
      photos: (await import('../../constants/photos')).default,
      texts: (await import('../../constants/texts')).default,
      pathName: ctx.params.trail
    }
  }
}

export async function getStaticPaths() {
  const trails = await import('../../../data/trails.json')
  return {
    paths: trails.default.map((e) => ({
      params: {
        trail: e.trailName
      }
    })),
    fallback: false
  }
}
