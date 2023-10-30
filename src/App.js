import './App.css';
import Product from './components/product.component';
import Shop from './components/shop.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
   
    <Router>
         <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/shop'>New Shop</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/product'>New Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <Routes>
            <Route path='/' Component={Shop}></Route>
            <Route path='/shop' Component={Shop}></Route>
            <Route path='/product' Component={Product}></Route>
        </Routes>
    </Router>
  );
}

export default App;