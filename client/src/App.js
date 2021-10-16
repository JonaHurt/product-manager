import logo from './logo.svg';
import './App.css';
import { ProductForm } from './components/ProductForm';
import { ListProduc } from './components/ListProduc';

function App() {
  return (
    <div className="App">
      <ProductForm />
      <ListProduc/>
    </div>
  );
}

export default App;
