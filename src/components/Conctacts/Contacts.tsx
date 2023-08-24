import { FC } from 'react';
import telegramIcon from '../../assets/telegram.png'
import githubIcon from '../../assets/github.png'
import emailIcon from '../../assets/email.png'
import './Contacts.css'


const Contacts:FC = () => {
    return (
        <ul className='contacts'>
            <li className='contacts__item'>
                <a href='https://t.me/m1crochelik' target='_blank' className='contacts__item'>
                    <img src={telegramIcon} className='contacts__img' alt='telegram'/>
                </a>
            </li>
            <li className='contacts__item'>
                <a href='mailto:andreyrekagg@gmail.com' target='_blank' className='contacts__item'>
                    <img src={emailIcon} className='contacts__img' alt='mail'/>
                </a>
            </li>
            <li className='contacts__item'>
                <a href='https://github.com/XJloTT4eH9l' target='_blank' className='contacts__item'>
                    <img src={githubIcon} className='contacts__img' alt='github'/>
                </a>
            </li>
        </ul>
    )
}

export default Contacts