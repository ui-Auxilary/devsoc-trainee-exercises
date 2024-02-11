import { useState } from 'react'
import Header from 'components/Header'
import CategoryList from 'components/CategoryList/CategoryList';
import AvatarGrid from 'components/AvatarGrid/AvatarGrid';

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
    <>
      <Header />
      <CategoryList setCategory={setCategory} categories={categoryList}/> 
      <AvatarGrid avatarList={filteredAvatarList}/>
    </>
  );
}
