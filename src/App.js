import React,{useState , useEffect} from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {

  const [isSelected, setIsSelected] = useState(true)
  const [result , setResult] = useState([]);

  useEffect(()=>{
      let topics = [
          { "id": 1, "title": "Space", 'hasDetails' : false },
          { "id": 2, "title": "Big Bang Theory" , 'hasDetails' : false},
          { "id": 3, "title": "Galaxy"  ,'hasDetails' : false},
          { "id": 4, "title": "Universe",  'hasDetails' : true },
          { "id": 5, "title": "Solar System", 'hasDetails' : true }
      ];
      setResult(topics)
  },[])

  const handleClick = (e) => {
    setIsSelected(false);
}

  return (
    <div>
      <Header />
      <div className="ui raised segment">
        <Dashboard result={result} handleClick={handleClick} isSelected={isSelected} />
      </div>
    </div>
  );
}

export default App;
