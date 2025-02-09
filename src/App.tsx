import { useState } from 'react';
import LatestNewsCard from './components/Home/LatestNewsCard'

import './App.css';
import { latestNewsCardData } from './constant/dummyConstant';

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div className=''>
      <LatestNewsCard
       cardNewsData={latestNewsCardData}
      />
    </div>
  );
}

export default App;
