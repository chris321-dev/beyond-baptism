import React from 'react';
import s from './Footer1.module.css';


const Footer1 = () => {
    return (
        <div className={s.footer1}>
            <div className={s.footerLogo}>
                <h2>Beyond Baptism</h2>
                <p>Where the Eucharist Transforms Lives and Hearts.</p>
            </div>
            {/* <div className={s.footerLink}>Parish Benefits</div>
            <div className={s.footerLink}>About Us</div>
            <div className={s.footerLink}>Volunteer</div>
            <div className={s.footerLink}>Donate</div>
            <div className={s.footerLink}>Contact Us</div> */}
            <div className={s.footerBottom}>
                <p>Beyond Baptism Charitable Fund, Inc is a nonprofit, section 501(c)(3). Our EIN is 27-4268597.</p>
            </div>
        </div>
    );
};

export default Footer1;
