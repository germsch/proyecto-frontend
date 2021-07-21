import './App.css';
import ProductCreateForm from './components/ProductCreateForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import CategoryCreateForm from './components/CategoryCreateForm'
import Categories from './components/Categories'
import BrandCreateForm from './components/BrandCreateForm'
import Brands from './components/Brands'
import Products from './components/Products'
import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom'


function App() {

  return (
  
    <Router>

      <Switch>
        <Route path="/products">
          <Products />
        </Route>

        <Route path="/brands">
          <Brands />
        </Route>

        <Route path="/brand/create">
          <BrandCreateForm />
        </Route>
        
        <Route path="/categories">
          <Categories />
        </Route>

        <Route path="/category/create">
          <CategoryCreateForm />
        </Route>

        <Route path="/product/create">
          <ProductCreateForm />
        </Route>

        <Route path="/register">
          <RegisterForm/>
        </Route>

        <Route path="/login">
          <LoginForm/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>

    </Router>
  );
}

export default App;
