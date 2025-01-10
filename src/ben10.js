import { useState } from "react";
import ben10Img from './ben10_human.jpg';
import rath from './rath.jpg';
import fourarms from './four-arms.png';
import alienx from './alien_x.png';
import omni from './omni.jpg';

export default function Ben10() {
   
    const [ben10, setBen10] = useState(ben10Img);
    const images = [fourarms, alienx, rath]; // Array of images to cycle through
    const [currentIndex, setCurrentIndex] = useState(0);

   
    const handleOmniClick = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setBen10(images[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', height: '80vh' }}>
          
            <div style={{ textAlign: 'center' }}>
                <img
                    src={ben10}
                    alt="Ben10"
                    style={{ width: '250px', height: '500px', border: '2px solid black', borderRadius: '10px' }}
                />
                <h3>{Ben10}</h3>
            </div>

        
            <div style={{ textAlign: 'center' }}>
                <img
                    src={omni}
                    alt="Omnitrix"
                    style={{ width: '250px', height: '250px', cursor: 'pointer', border: '2px solid black', borderRadius: '5px' }}
                    onClick={handleOmniClick}
                />
                <h3>Omnitrix</h3>
            </div>
        </div>
    );
}
