import React from 'react'
import Link from 'next/link'

export default function ImageLink({ href, src, alt, className }) {
  return (
    <Link href={href}>
      <a>
        <img className={className} alt={alt} src={src} />
      </a>
    </Link>
  )
}
