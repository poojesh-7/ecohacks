"use client"
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    if (navbar && !navbar.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          EcoHacks
        </Link>
        
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <Link href="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/hacks" className={styles.navLink} onClick={closeMenu}>Hacks</Link>
          </li>
          <li>
            <Link href="/trending" className={styles.navLink} onClick={closeMenu}>Trending</Link>
          </li>
          <li>
            <Link href="/form" className={styles.createBtn} onClick={closeMenu}>Create +</Link>
          </li>
          <li>
            <Link href="/signup" className={styles.signupBtn} onClick={closeMenu}>Signup</Link>
          </li>
        </ul>

        <div 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;