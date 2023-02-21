import React, { useState, useEffect } from 'react';
import Facebook from '../img/svg/facebook.svg';
import Twitter from '../img/svg/twitter.svg';
import Linkedin from '../img/svg/linkedin.svg';
import Instagram from '../img/svg/instagram.svg';
function Footer() {

    return (<div>
        <p className='copy'>© 2023 | Powered by Asotolink Tests | Términos y condiciones</p>
        <section className='rSocial'>
            <a href='https://es-es.facebook.com/'><img src={Facebook}></img></a>
            <a href='https://twitter.com/?lang=es'><img src={Twitter}></img></a>
            <a href='https://es.linkedin.com/'><img src={Linkedin}></img></a>
            <a href='https://www.instagram.com/'><img src={Instagram}></img></a>


        </section>

</div>)

}export default Footer;