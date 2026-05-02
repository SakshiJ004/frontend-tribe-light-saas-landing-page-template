"use client";
import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      {/* Top banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Main nav */}
      <div className='py-5 bg-white'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='Saas Logo' height={40} width={40} />

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            {/* Desktop nav */}
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight'>
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white text-black/60 border-t border-gray-100">
          <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Customers</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Updates</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Help</a>
          <button className='bg-black text-white px-4 py-2 rounded-lg font-medium w-full'>
            Get for free
          </button>
        </nav>
      )}
    </header>
  );
};