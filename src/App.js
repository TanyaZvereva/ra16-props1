import StarRating from './components/StarRating';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarRating count={5}/>
      <StarRating count={10}/>
      <StarRating count={'hhh'}/>
    </div>
  );
}

export default App;
