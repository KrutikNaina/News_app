import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

    // const getData = async() =>{
    //     const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    //     const jsonData = await response.json();
    //     console.log(jsonData.articles);
    //     let dt = jsonData.articles.slice(0,10)
    //     setNewsData(dt)
        
    // }

    const getData = async () => {
        try {
          const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
          
          // Check if the response status is OK (200)
          if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData.articles);
      
            // Safely slice and set the news data
            const dt = jsonData.articles.slice(0, 10);
            setNewsData(dt);
          } else {
            // Handle non-200 responses
            console.error(Error: ${response.status} - ${response.statusText});
          }
        } catch (error) {
          // Handle network or other errors
          console.error('An error occurred:', error);
        }
      };

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with TrendyNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>
    </div>
  )
}

export default Newsapp