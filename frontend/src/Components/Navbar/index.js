import React from 'react'
import styles from './styles.module.css';
import { IoSearch } from "react-icons/io5";
import { TbChefHat } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {
  return (
    <div id={styles.navbarContainer}>
      <div className={styles.navbarLogoContainer}>
        <TbChefHat />
        <div>Foo</div>
      </div>
      <div className={styles.navbarMenuContainer}>
        <div className={styles.navbarMenuDiv}>
          <div className={styles.menuItem}>Home</div>
          <div className={styles.menuItem}>Menu</div>
          <div className={styles.menuItem}>Contact</div>
          <div className={styles.menuItem}>Shop</div>
        </div>
        <div className={styles.navbarSearchCartContainer}>
          <div className={styles.navbarSearchBar}>
            <IoSearch />
            <input className={styles.navbarSearchInput} type='search' placeholder='Search' />
          </div>
          <div className={styles.navbarCartContainer}>
            <FaShoppingCart />
            <span className={styles.cartItemCount}>3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar