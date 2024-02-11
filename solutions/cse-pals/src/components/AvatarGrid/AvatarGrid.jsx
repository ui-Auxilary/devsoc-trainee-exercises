import Avatar from 'components/Avatar/Avatar'
import styles from './AvatarGrid.module.css'
import { useEffect, useState } from 'react'

export default function AvatarGrid({avatarList}) {
  const [hoverIdx, setHoverIdex] = useState(null);

  return (
    <div className={avatarList.length > 3 ? styles.avatarGrid : styles.avatarFlex}>
      {/* <Avatar avatarNum={1}/>
      <Avatar avatarNum={2}/>
      <Avatar avatarNum={3}/>
      <Avatar avatarNum={4}/>
      <Avatar avatarNum={5}/> */}
      {avatarList.map(({id, name, speciality, language, rating}) => (
        <Avatar 
          avatarNum={id} 
          name={name} 
          speciality={speciality} 
          language={language} 
          rating={rating}
        />
      ))}
    </div>
  )
}
