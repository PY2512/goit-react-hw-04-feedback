import {useState} from "react";
import Buttons from "./Buttons/Buttons";
import SectionTitle from "./Title/SectionTitle"
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


const App = () => {
  const [state, setState] = useState({good: 0, neutral: 0, bad:0});
  const {neutral, good, bad} = state;

  const handleIncrement = event => {
    const {id} = event.target;
    setState(prevstate => ({...prevstate, [id]:prevstate[id] + 1}))
    // this.setState((prevstate) => ({[id]:prevstate[id] + 1}));
};

const countTotalFeedback = () => {
        return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
        const sum = good + neutral + bad;
        const result = (good * 100) / sum;
        return result ? Math.floor(result) : "0"
};

return (
  <>
    <SectionTitle />
    <Buttons handleIncrement={handleIncrement}/>
    {countTotalFeedback() === 0 ? (<Notification message="No feedback given" />) : 
      <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
      />}
  </>
)
}

export default App;