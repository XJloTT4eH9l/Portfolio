import { FC } from 'react'
import photoBg from '../../assets/photo-bg.png'
import './Photo.css';

interface PhotoProps {
    image: string;
    className: string;
}

const Photo:FC<PhotoProps> = ({ image, className }) => {
    return (
        <div className="photo">
            <img className={`photo__decoration ${className}`} src={photoBg} />
            <img className="photo__img" src={image} />
        </div>
    )
}

export default Photo