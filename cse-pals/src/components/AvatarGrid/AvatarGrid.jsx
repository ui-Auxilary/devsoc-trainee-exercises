import Avatar from 'components/Avatar/Avatar'
import styles from './AvatarGrid.module.css'
import { useEffect, useState } from 'react'

export default function AvatarGrid({avatarList}) {
  const [hoverIdx, setHoverIdex] = useState(null);

  return (
    <div>
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
