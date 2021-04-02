import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

const App = () => {
  const [example, setExample] = useState("Loading...");
  useEffect(() => {
    axios.get('https://fir-example-61ed0-default-rtdb.firebaseio.com/')
      .then(response => {
        setExample(response.data);
      });
  }, [example]);


  return (
    <div className="App">
      
      {example}
    </div>
  );
}

export default App;