import {Component} from "react";
import Buttons from "./Buttons/Buttons";
import SectionTitle from "./Title/SectionTitle"
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";



class App extends Component {
  
  state = { good: 0, neutral:0, bad:0 };

  handleIncrement = (event) => { 
    const {id} = event.target; 
    this.setState((prevstate) => ({[id]:prevstate[id] + 1})
    )};

    countTotalFeedback = () => {
      const {good, neutral, bad} = this.state;
      return good + neutral + bad;
    };
    
    countPositiveFeedbackPercentage = () => {
      const {good, neutral, bad} = this.state;
      const sum = good + neutral + bad;
      const result = (good * 100) / sum;
      return result ? Math.floor(result) : "0"
    };

  render() {
    const {good, neutral, bad} = this.state;
    const {countTotalFeedback,  handleIncrement} = this;
    return (
      <>
        <SectionTitle />
        <Buttons handleIncrement={handleIncrement}/>
        {countTotalFeedback() === 0 ? (<Notification message="No feedback given" />) : 
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
        />}
      </>
      
    );
  }
}



export default App;