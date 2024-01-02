import styles from './Planets.module.css'
import ThreeDModel from '../components/threemodel'
import { useState } from 'react';
import { startTransition } from 'react';
import { FaA, FaArrowRight } from "react-icons/fa6";

function Planets(){
    const planetModels = [
  { name: 'sun', scale: 0.1 },
  { name: 'mercury', scale: 0.024 },
  { name: 'venus', scale: 0.036 },
  { name: 'earth', scale: 0.024 },
  { name: 'mars', scale: 0.95 },
  { name: 'jupiter', scale: 1.25 },
  { name: 'saturn', scale: 0.0025 },
  { name: 'urano', scale: 0.65 },
  { name: 'neptune', scale: 0.23 },
      ];
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
    const [scale, setScale] = useState(planetModels[0].scale);
  const switchToNextPlanet = () => {
    startTransition(() => {
        setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planetModels.length);
        setScale(planetModels[currentPlanetIndex].scale);
      });
    console.log(currentPlanetIndex)
  };
  const handleScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = parseFloat(event.target.value);
    setScale(newScale);
  };
    function randomNumber(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    const STAR_COUNT = 400
    let result = ""
    for(let i = 0; i < STAR_COUNT; i++){
        result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
    }
    console.log(result.substring(0, result.length - 1))
    return <><div className={styles.planets}><div className={styles.model}><ThreeDModel scale={planetModels[currentPlanetIndex].scale} name={planetModels[currentPlanetIndex].name}/></div></div><div className={styles.counter}><p>{currentPlanetIndex + 1} / 9</p></div><button onClick={switchToNextPlanet}><FaArrowRight/></button></>
}
export default Planets;