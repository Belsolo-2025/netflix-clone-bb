import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import {IoLogoInstagram} from 'react-icons/io5';
import {BsYoutube} from "react-icons/bs";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <div className={styles.outer_container}>
        <div>
            <ul>
<li>
<FaFacebook size={22}/>
<IoLogoInstagram size={22}/>
<BsYoutube size={22}/>
</li>
<li>
    <a href = "">FAQ</a>
</li>
<li>
    <a href = "">Media Center</a>
</li>
<li>
    <a href = "">Ways to Watch</a>
</li>
<li>
    <a href = "">Cookie Perferences</a>
</li>
            </ul>
        </div>
    <div>
    <li>
    <a href = "">Jobs</a>
    </li>
    <li>
        <a href="">Praivasy</a>
    </li>
    <li className={styles.only_mobile}/>
    <li>
    <a href = "">Contact Us</a>
    </li>
    </div>
    <div>
            <ul className={styles.footer_right_col}>
<li>
    <a href="">only on Netflix</a>
</li>
<li>
    <a href="">Speed Test</a>
</li>
<li>
<a href="">Speed Test</a>
</li>
</ul>
<div>
    <ul>
        <li>
            <a href="">Help Center</a>
        </li>
        <li>
            <a href="">Investor Relations</a>
        </li>
        <li>
            <a href="">Terms of Use</a>
        </li>
        <li>
            <a href="">Corporate Information</a>
        </li>
        <li>
            <a href="">Legal  Notices</a>
        </li>
    </ul>
</div>
</div>
        </div>
</>
 
  )
}
 Footer
export default Footer
