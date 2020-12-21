import React,{useState , useEffect} from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard.tsx';

function App() {

  const [isSelected, setIsSelected] = useState(true)
  const [subHeader , setSubHeader] = useState([]);

  useEffect(()=>{
      let topics = [
          { id: 1, "title": "Space", 'hasDetails' : false },
          { id: 2, "title": "Big Bang Theory" , 'hasDetails' : false},
          { id: 3, "title": "Galaxy"  ,'hasDetails' : false},
          { id: 4, "title": "Universe",  'hasDetails' : true },
          { id: 5, "title": "Solar System", 'hasDetails' : true }
      ];
      setSubHeader(topics)
  },[])

  const handleSubHeaderClick = (e) => {
    setIsSelected(false);
  }

  return (
    <div style={{ width:'100%', height:'100vh', overflow:'unset'}}>
      <Header />
      <Dashboard subHeader={subHeader} handleSubHeaderClick={handleSubHeaderClick} isSelected={isSelected} />
    </div>
  );
}

export default App;
