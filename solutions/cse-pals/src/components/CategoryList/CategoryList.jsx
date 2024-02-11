import { useState, useEffect } from 'react';
import styles from './CategoryList.module.css'

function Category({setCategory, name}) {
    return (
        <div onClick={() => setCategory(name)} className={styles.category}>{name}</div>
    );
}

export default function CategoryList({setCategory, categories}) {
  return (
    <div className={styles.categoryList}>
      {categories.map((category) => <Category setCategory={setCategory} name={category}/>)}
    </div>
  )
}
