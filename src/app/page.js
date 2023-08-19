'use client';

import React, { useEffect, useState, createContext } from 'react';
import App from './components/App'; 

export const AppContext = createContext();

export default function Home() {
  const [news, setNews] = useState([]);
  const [updateNews, setUpdateNews] = useState(false);

  const updateNewsfunc = newUpdate => {
    localStorage.removeItem('news');
    setUpdateNews(newUpdate);
  };

  

  async function fetchNews() {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=8134693fcf494150b34a591d0e1ab643`
      );
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return [];
    }
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const newsData = await fetchNews();
        if (isMounted) {
          console.log('refectching...')
          setNews(newsData);
          const localStorageNews = JSON.stringify(newsData);
          localStorage.setItem('news', localStorageNews);
        }
      } catch (error) {
        // Handle error if needed
        return []
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [updateNews]); // Corrected the dependency

  const contextData = {
    news: news,
  };

  return (
    <AppContext.Provider value={contextData}>
      <App updateNewsfunc={updateNewsfunc} />
    </AppContext.Provider>
  );
}