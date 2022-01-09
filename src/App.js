import './App.css';
import { CardHomeTalkCollection,Share,OnlyLike } from './ui-components';
 
function App() {
  return (
    <div className="App">
      <CardHomeTalkCollection />
      <OnlyLike />
      <Share />
    </div>
  );
}

export default App;
