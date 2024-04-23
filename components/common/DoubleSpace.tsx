import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function DoubleSpace() {
  return (
    <div className='flex flex-row gap-6 px-5 py-6 bg-white bg-opacity-50 rounded-xl'>
      <div className=''>
        <Image src='/assets/doubleSpace.png' alt='' width={400} height={400} />
      </div>
      <div className='flex flex-col text-3xl font-black text-white justify-center gap-4'>
        <h1 className='text-primary'>Double Space</h1>
        <Link href="/double-space" >
          <Button className='bg-white text-primary  hover:text-white w-full'>START GAME</Button>
        </Link>

      </div>
    </div>
  )
}

export default DoubleSpace