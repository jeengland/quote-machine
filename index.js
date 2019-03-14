import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// main react component
class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // quote table
            quotes: [
            {"quote": "I hear the jury's still out on science", "char":"Gob"}, 
            {"quote": "Why should you go to jail for a crime someone else noticed? You don’t need double talk, you need Bob Loblaw.", "char":"Bob Loblaw"},
            {"quote": "Steve Holt!", "char":"Steve Holt"},
            {"quote": "Do you think I could have a hit of the juice box?", "char": "Buster"},
            {"quote": "I don't care for Gob", "char": "Lucille"},
            {"quote": "Annyong!", "char": "Annyong"},
            {"quote": "Marry me!", "char": "Maeby"},
            {"quote": "I mean, it's one banana. What could it cost, ten dollars?", "char": "Lucille"},
            {"quote": "There's always money in the banana stand", "char": "George Sr."},
            {"quote": "I've made a huge mistake", "char": "Gob"},
            {"quote": "I'm afraid I just blue myself", "char": "Tobias"},
            {"quote": "Who'd like a banger in the mouth?", "char": "Mrs. Featherbottom"},
            {"quote": "And that's why you always leave a note", "char": "J. Walter Weatherman"},
            {"quote": "She calls it a mayonegg", "char": "George Michael"},
            {"quote": "Do you guys know where I could get one of those gold necklaces with the 'T' on it?", "char": "Maeby"},
            {"quote": "You're gonna get some hop-ons", "char": "Michael"},
            {"quote": "Did 'nothing' cancel?", "char": "Lucille"},
            {"quote": "There are dozens of us! Dozens!", "char": "Tobias"}
            ],
            // initialize the index to a random quote
            index: Math.floor(Math.random() * Math.floor(17))
        }
        this.Randomize = this.randomize.bind(this);
    }
    // function for randomizing the quote index, ensuring that the same quote doesn't appear twice
    randomize() {
        let newIndex = Math.floor(Math.random() * Math.floor(17));
        if (newIndex != this.state.index) {
            this.setState({ index: newIndex })
        }
        else {
            this.setState({ index: newIndex + 1})
        }
    }
    render() {
        // set props to the quote at the current index
        let quote = this.state.quotes[this.state.index].quote;
        let att = this.state.quotes[this.state.index].char;
        // set up the tweet url to include proper formatting
        let tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '"' + ' ~' + att) 
        return (
            // set up the main quote box 
            <div id="quote-box">
                <div id="text">
                    "{quote}"
                </div>
                <div id="author">
                    ~  {att}
                </div>
                <button onClick={this.Randomize} id="new-quote">
                    New Quote
                </button> 
                <a id="tweet-quote" href = {tweet} target="_blank">
                    <button>
                        Tweet Quote
                    </button>
                </a>
            </div>
        )
    }
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<Quote />, rootDiv);