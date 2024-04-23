import Image from 'next/image'
import React from 'react'
import Logo from '../../public/assets/GameOps.svg'

function Header() {
  return (
    <div>
        <div className=' py-4 px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'>
            <Image src={Logo} alt='' height={100} width={100}/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Header