import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
import { IoHomeSharp,IoPlanetSharp } from "react-icons/io5";
import { TbGalaxy } from "react-icons/tb";
function Navigation(){
    return <div className={styles.nav}>
      <NavLink to="/"><IoHomeSharp/></NavLink>
      <NavLink to="/planets"><IoPlanetSharp/></NavLink>
      <NavLink to="/solarsystem"><TbGalaxy/></NavLink>
    </div>
}
export default Navigation;