import StarRating from './components/StarRating';
import './App.css';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <StarRating count={5}/>
      <StarRating count={10}/>
      <StarRating count={'hhh'}/>
      <Listing/>
    </div>
  );
}

export default App;
