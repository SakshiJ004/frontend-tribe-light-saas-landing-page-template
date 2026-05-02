import logo from '@/assets/logosaas.png'
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

import Image from 'next/image';
import Link from 'next/link'


export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:content-[""] before:top-2 before:bottom-0 before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FB8FE)] before:absolute'>
          <Image src={logo} height={40} alt='SaaS logo' className='relative' />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/customers">Customers</Link>
          <Link href="/updates">Updates</Link>
          <Link href="/help">Help</Link>
        </nav>
        <div className='flex justify-center gap-6 mt-6
        '>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>&copy; 2024 Sakshi Jadhav, Inc. All rights reserved</p>
      </div>
    </footer>
  )
};
