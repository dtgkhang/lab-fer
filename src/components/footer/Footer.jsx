import React, { Component } from 'react'
import './footer.css'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
export default class Footer extends Component {
  render() {
    return (
      <footer className='mt-5'>
        <div className='block'>
          <a href="#" className='footer__logo'>BACH DINH</a>
          <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="https://www.topcv.vn/xem-cv/B1pVAF5SVwkLVVYLUQAEUgVdAgYEXlQAVFUHVA623b">Portfolio</a></li>
            <li><a href="http://localhost:3000/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__socials">
          <a href="https://www.facebook.com/magnus306/"><AiFillInstagram /></a>
          <a href="https://www.instagram.com/zynh_dev/"><BsFacebook /></a>
        </div>
      </footer>
    )
  }
}
