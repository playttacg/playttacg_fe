import LatestNewsCard from './components/Home/LatestNewsCard'
import './App.css';
import { latestNewsCardData } from './constant/dummyConstant';

function App() {
  return (
    <div className=''>
      <LatestNewsCard
        cardNewsData={latestNewsCardData}
      />
    </div>
  );
}

export default App;
