import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';


export default function NewFetching() {
    const [quote, setQuote] = useState([]);
    const [colors] = useState(["lightred", "lightblue", "lightgreen", "lightyellow", "lightbrown", "lightpurple", "lightpink", "lightorange"]);
    const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
    const [contentVisible, setContentVisible] = useState(true); // Track content visibility
  
    async function getAPI() {
      const URL = 'https://type.fit/api/quotes';
      const response = await fetch(URL);
      const data = await response.json();
      setQuote(data[Math.floor(Math.random() * data.length)]);
      setContentVisible(false); // Hide content before new quote appears
    }
  
    function changeColor() {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }
  
    const handleClick = async () => {
      await getAPI(); // Wait for new quote to be fetched
      changeColor();
      setContentVisible(true); // Show content after new quote is fetched
    };
  
    useEffect(() => {
      getAPI();
    }, []);
  
    return (
      <div id="quote-box" style={{ backgroundColor: color }}>
  
        <div id="text" style={{ opacity: contentVisible ? 1 : 0 }}>
          <p id="left-quote-mark">"</p>
          <p>{quote.text}</p>
          <p id="right-quote-mark">"</p>
        </div>
  
        <div id="author" style={{ opacity: contentVisible ? 1 : 0 }}>
          <p>~{quote.author}</p>
        </div>
  
        <div id="button-wrapper">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
            <FontAwesomeIcon icon={fab.faTwitter} size="2x" color="darkblue" />
          </a>
          <button id="new-quote" onClick={handleClick}>NEW QUOTE</button>
        </div>
  
      </div>
    );
  }