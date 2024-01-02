import styles from './Home.module.css'
function Home(){
    
    return <><div className={styles.bg}></div>
    <div className={styles["star-field"]}>
    <div className={styles.layer}></div>
    <div className={styles.layer}></div>
    <div className={styles.layer}></div>
    </div><div className={styles.textBox}><div className={styles.circle}><p className={styles.text}>PLANETS</p><p className={styles.text}>EXPLORE</p><p className={styles.text}>GALAXY</p></div></div></>
}
export default Home;