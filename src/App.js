import 'bootstrap/dist/css/bootstrap.min.css';
import FlashSaleProducts from './components/FlashSaleProducts/FlashSaleProducts';
import TrendingProducts from './components/TrendingProducts/TrendingProducts';

function App() {
  return (
    <div className="App">
      <FlashSaleProducts />
      <TrendingProducts />
    </div>
  );
}


export default App;
