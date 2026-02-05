import { Provider } from 'react-redux'
import { store } from './store/store'
import './styles/App.css'
import { ProductList } from 'containers'
import { Cart } from 'containers/Cart/Cart'
import { Header } from 'containers/Header/Header'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  )
}

export default App