import React from 'react'

export default function HeaderBackgorund({
  backgrounds
}) {
  return (
    <svg width="1600" height="887.5">
      <defs>
        <pattern id="pattern1" height="1" width="1">
          <image height="100%" href={backgrounds[0]} />
        </pattern>
        <pattern id="pattern2" height="1" width="1">
          <image height="100%" href={backgrounds[1]} />
        </pattern>
        <pattern id="pattern3" height="1" width="1" viewBox="0 0 669 665">
          <image height="100%" href={backgrounds[2]} />
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
        <use href="#image2" x="386" y="26" width="567" height="806" />
        <use href="#image3" x="733" y="26" width="869" height="861" />
      </g>
    </svg>
  )
}
