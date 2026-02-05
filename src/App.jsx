import { Provider } from 'react-redux'
import { store } from 'store'
import './styles/App.css'
import { ProductList, Cart, Header } from 'containers'

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