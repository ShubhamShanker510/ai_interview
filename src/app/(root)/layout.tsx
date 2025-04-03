import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Rootlayout({children}:{children:React.ReactNode}) {
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.svg" alt='logo' width={38} height={32}/>
          <h2 className='text-primary-100'>PrepareAI</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}
