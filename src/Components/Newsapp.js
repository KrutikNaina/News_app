import React, { useState } from 'react'
import Card from './Card'

function Newsapp() {

    const [search, setSearch] = useState("india")
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "a51a77d8126f4e47a38a53a49e86a277";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`)
        const jsonData = await response.json()
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)

    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trending News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a>Trending</a>
            </ul>
            <div className='searchBar'>
                <input type="text" placeholder="Search News" onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>

        <div>
            <p className='head'>Stay Update with Trending News</p>
        </div>

        <div className='categoryBtn'>
            <button>Business</button>
            <button>Entertainment</button>
            <button>Sports</button>
            <button>Politics</button>
            <button>Technology</button>
            <button>Health</button>
        </div>

        <div>
            {newsData? <Card data={newsData}/> : null}
        </div>
    </div>
  )
}

export default Newsapp