import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'; // Create a CSS file for styling

function News() {
  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <div className="news-grid">
        
        <Link to="https://www.indiatvnews.com/news/india/breaking-news-november-20-live-updates-pm-modi-delhi-pollution-schools-reopen-bjp-congress-aap-chhath-puja-rahul-gandhi-rajasthan-telangana-election-903494" className="news-item">
          <img 
            src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/breaking-news-live-1700276865-1700441177.jpg" 
            alt="Capturing the Essence of Nature" 
          />
          <div className="news-content">
            <h2>Capturing the Essence of Nature</h2>
            <p className="news-date">October 15, 2024</p>
            <p>A deep dive into the techniques used to capture stunning landscapes and wildlife photography.</p>
          </div>
        </Link>

        <Link to="https://www.indiatvnews.com/news/india/breaking-news-november-20-live-updates-pm-modi-delhi-pollution-schools-reopen-bjp-congress-aap-chhath-puja-rahul-gandhi-rajasthan-telangana-election-903494" className="news-item">
          <img 
            src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/breaking-news-live-1700276865-1700441177.jpg" 
            alt="The Art of Portrait Photography" 
          />
          <div className="news-content">
            <h2>The Art of Portrait Photography</h2>
            <p className="news-date">October 20, 2024</p>
            <p>Explore the nuances of portrait photography and how to connect with your subjects.</p>
          </div>
        </Link>

        <Link to="https://www.indiatvnews.com/news/india/breaking-news-november-20-live-updates-pm-modi-delhi-pollution-schools-reopen-bjp-congress-aap-chhath-puja-rahul-gandhi-rajasthan-telangana-election-903494" className="news-item">
          <img 
            src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/breaking-news-live-1700276865-1700441177.jpg" 
            alt="New Exhibition Opening Soon" 
          />
          <div className="news-content">
            <h2>New Exhibition Opening Soon</h2>
            <p className="news-date">October 25, 2024</p>
            <p>Join us for the opening of a new exhibition featuring some of the best works from the past year.</p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default News;
