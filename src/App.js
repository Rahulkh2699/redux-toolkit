import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import Counter from "./Pages/Counter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
