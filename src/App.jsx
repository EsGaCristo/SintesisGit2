import { useState } from 'react';
import './App.css'
import { ArticleList, ButtonList } from './components'
import data from './data/data';

data
function App() {
  const allCategories = [... new Set(data.map(article => article.category))];
  
  //const [categories, setCategories] = useState(allCategories)
  const [articles,setArticles] = useState(data)


  return (
    <>
      
      <div className='title'>
        <h1>Sistemas de control de versiones <span>VCS</span> </h1>
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Imagen Header" />

      </div>

      
      <ArticleList articles = {articles} />

    </>
  )
}

export default App
