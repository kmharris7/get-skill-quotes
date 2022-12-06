import React, {useState, useEffect} from 'react'
import './App.css';
import COLORS from './colorsArray.js'

let quoteDB = "https://type.fit/api/quotes"

function App() {
  let num = 0

const [quotes,setQuotes] = useState();
const[randomNumber, setNumber ]= useState(0)
const [quote, setQuote] = useState()
const[author, setAuthor ] = useState()
const[color, setColor] = useState('aqua')

const fetchQuotes = async (url) =>{
  const response = await fetch(url)
  const data = await response.json();
  setQuotes(data);
  setNumber(data.length)
}
useEffect(()=> {
  fetchQuotes(quoteDB)
},[quoteDB])


function generateNumber(){
  let randomInteger = Math.floor(quotes.length * Math.random());
  let randomColorInt = Math.floor(COLORS.length * Math.random())
  setQuote(quotes[randomInteger].text)
  setAuthor(quotes[randomInteger].author);
  setColor(COLORS[randomColorInt]);
}

  return (
    <div className="App">
      <div className ="App-header" style = {{backgroundColor: color}}>
        <div id = "quote-box">
          <h1 style= {{color:color}}>Random Quote Generator </h1>
          <p id = "text" style ={{color:color}}>{quote}</p>
          <p id = "author" style = {{color:color}}> - {author}</p>
          <a id = "tweet-quote" href ={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}>Tweet Quote</a>
          <button onClick = {generateNumber} id = 'new-quote' style ={{backgroundColor:color,color:"white"}}>Generate A New Quote</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
