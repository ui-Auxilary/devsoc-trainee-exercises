import { useEffect, useState } from 'react'
import styles from './App.module.css';
import Header from 'components/Header'
import AvatarGrid from 'components/AvatarGrid';
import CategoryList from 'components/CategoryList/CategoryList';

const avatarList = [
  {
    'id': 1,
    'name': 'Kim',
    'language': 'Eng/Kor',
    'speciality': 'Databases',
    'rating': 5.0
  },
  {
    'id': 2,
    'name': 'Warren',
    'language': 'French',
    'speciality': 'Databases',
    'rating': 4.0
  },
  {
    'id': 3,
    'name': 'Ellie',
    'language': 'Chinese',
    'speciality': 'Algorithms',
    'rating': 4.8
  },
  {
    'id': 4,
    'name': 'Eric',
    'language': 'English',
    'speciality': 'Cloud',
    'rating': 3.8
  },
  {
    'id': 5,
    'name': 'Jay',
    'language': 'Eng/Jap',
    'speciality': 'Frontend',
    'rating': 4.2
  },
]

const categoryList = ['All', 'Databases', 'Algorithms', 'Cloud', 'Frontend']

export default function App() {
  const [selectedCategory, setCategory] = useState('');
  
  const filteredAvatarList = selectedCategory &&
    selectedCategory != 'All' ? 
    avatarList.filter(
      avatar => 
      avatar.speciality.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase()
    )
    :
    avatarList
  ;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <div className={styles.container}>
        <Header />
        <h1>Don't code solo...</h1>
        <div className={styles.title}>find your cse pal</div>
        <CategoryList setCategory={setCategory} categories={categoryList}/>
        <AvatarGrid avatarList={filteredAvatarList}/>
      </div>
    </div>
  );
}
