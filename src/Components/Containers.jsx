import React, { useEffect, useState } from 'react'
import './Containers.css'

const Containers = ({ searchContent }) => {
  const [articles, setarticles] = useState([])
  const [currentDate, setcurrentDate] = useState('')
  const [threeMonthAgo, setthreeMonthAgo] = useState('')
  const apiKey = import.meta.env.VITE_API_KEY;

  const getDates = () => {
    const now = new Date();
    setcurrentDate(now.toISOString().split('T')[0]);

    const ago = new Date();
    ago.setMonth(ago.getMonth() - 1);
    setthreeMonthAgo(ago.toISOString().split('T')[0]);
  }

  const showNews = async (threeMonthAgo, currentDate) => {
    const query = searchContent.trim() === '' ? 'India' : searchContent;
    const api = `https://newsapi.org/v2/everything?q=${query}&from=${threeMonthAgo}&to=${currentDate}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
    try {
      const response = await fetch(api);
      const results = await response.json();
      console.log(results);
      setarticles(results.articles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  useEffect(() => {
    getDates();
  }, [])

  useEffect(() => {
    if (currentDate && threeMonthAgo) {
      showNews(threeMonthAgo, currentDate);
    }
  }, [threeMonthAgo, currentDate, searchContent])

  return (
    <div className="containers">
      {articles.filter((article) => article.urlToImage)
        .map((article, index) => (
          <div key={index} className="container-result">
            <img src={article.urlToImage} alt='Image' />
            <h4>{article.title}</h4>
            <p>{article.content}</p>
            <button className='btn' onClick={() => window.open(article.url, '_blank')}
            >Show more</button>
            <h6>{article.source.name}</h6>
          </div>
        ))}
    </div>
  )
}
export default Containers