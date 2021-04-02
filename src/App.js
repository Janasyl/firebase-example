import { useState } from 'react';
import './App.css';
import Example_1 from './components/Example_1/Example_1';


function App() {
  const [selectedPost] = useState(0);

  return (
    <div className="App">
      <Example_1 id={selectedPost} />
    
    </div>
  );
}

export default App;