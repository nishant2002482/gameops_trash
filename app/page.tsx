'use client'
import Header from '@/components/common/Header';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Logo from '../public/assets/GameOps.svg'
import DoubleSpace from '@/components/common/DoubleSpace';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { LoaderCircle, LogOut } from 'lucide-react'


const UnityComponent = () => {
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        router.push('/login')
      }
    });
  })

  return (
    <div className='h-screen flex items-center justify-center bg-cover bg-center relative' >
      <Image className='w-full h-full object-cover' src='/backgoundImage.avif' alt='' height={1000} width={1000} />
      <div onClick={() => {
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });

        router.push('/login')
      }} className='absolute w-full top-0 flex flex-row justify-between items-center justify-between cursor-pointer'>
        <Image className='mt-4 ml-6' src={Logo} alt='' height={150} width={150} />
        <h1 className='mr-6 text-white font-semibold flex flex-row gap-2 items-center'>Logout <LogOut size={18} /></h1>
      </div>
      <div className='absolute flex flex-col'>
        <div className=''>
          <DoubleSpace />
        </div>
      </div>
    </div>
  );
};

export default UnityComponent;