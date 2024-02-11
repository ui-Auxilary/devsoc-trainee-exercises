import styles from './Avatar.module.css'
import Star from 'assets/star.svg'

function Rating({rating}) {
  return (
    <div className={styles.rating}>
      <div>
        <img className={styles.star} src={Star} />
      </div>
      <div>
        {rating % 1 == 0 ? rating + '.0' : rating}  
      </div>
    </div>
  );
}

export default function Avatar({avatarNum, name, language, speciality, rating}) {
  return (
    <div className={`${styles.avatar} ${styles[`avatar${avatarNum}`]}`}>
      <img src={`src/assets/avatarImg/${avatarNum}.jpg`}/>
      <div className={styles.content}>
        <div>
          <Rating rating={rating} />
        </div>
          <div className={styles.overlay}>
            <div>
              <div className={styles.name}>{name}</div>
              <div className={styles.language}>{language}</div>
            </div>
            <div className={styles.speciality}>{speciality}</div>
          </div>   
      </div>
    </div>
  )
}
