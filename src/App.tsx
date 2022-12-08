import ProductList from './components/products/ProductList'
import {Routes, Route} from 'react-router-dom'
import LayoutWebsite from './components/layouts/LayoutWebsite'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<LayoutWebsite/>}>
          <Route index element={<h1>Home</h1>}/>
          <Route path='/products' element={<ProductList/>} />
        </Route>
        <Route path='*' element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  )
}

export default App
