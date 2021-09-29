import React from 'react';
import './_Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer__icon--wrapper">
                <FontAwesomeIcon className="footer__icon" icon={['fab' , 'github']} />
                <FontAwesomeIcon className="footer__icon footer__icon--divider" icon={['fab' , 'linkedin-in']} />
                <FontAwesomeIcon className="footer__icon footer__icon--divider" icon={['fab' , 'instagram']} />
                <FontAwesomeIcon className="footer__icon footer__icon--divider" icon={['fab' , 'google']} />
            </div>

            <p className="footer__copyright">Thomas McKyer © 2020</p>
        </footer>
        </>
    )
}

export default Footer