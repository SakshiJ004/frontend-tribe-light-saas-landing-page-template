"use client";
import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <Image src={Logo} alt='Saas Logo' height={40} width={40} />
            </Link>

            {/* Menu / X button — mobile only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>

            {/* Desktop nav — exactly same as before */}
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <Link href="/about">About</Link>
              <Link href="/features">Features</Link>
              <Link href="/customers">Customers</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/help">Help</Link>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile dropdown — only shows on small screens */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-black/10'>
          <nav className='container flex flex-col py-4 gap-4 text-black/60'>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="/customers" onClick={() => setIsMenuOpen(false)}>Customers</Link>
            <Link href="/updates" onClick={() => setIsMenuOpen(false)}>Updates</Link>
            <Link href="/help" onClick={() => setIsMenuOpen(false)}>Help</Link>
            <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight w-full'>Get for free</button>
          </nav>
        </div>
      )}
    </header>
  );
};