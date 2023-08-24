import Contacts from "../Conctacts/Contacts"
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" id='contacts'>
            <div className="container">
                <p className="footer__text">Reka Andrew</p>
                <Contacts />
                <p className="footer__rights">All rights reserved @ 2023</p>
            </div>
        </footer>
    )
}

export default Footer