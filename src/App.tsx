import ProductList from './components/products/ProductList'
import {Routes, Route} from 'react-router-dom'
import LayoutWebsite from './components/layouts/LayoutWebsite'
import ProductAdd from './components/products/ProductAdd'
import ProductEdit from './components/products/ProductEdit'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<LayoutWebsite/>}>
          <Route index element={<h1>Home</h1>}/>
          <Route path='/products' element={<ProductList/>} />
          <Route path='/product-add' element={<ProductAdd/>} />
          <Route path='/product/:id/edit' element={<ProductEdit/>} />
        </Route>
        <Route path='*' element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  )
}

export default App
