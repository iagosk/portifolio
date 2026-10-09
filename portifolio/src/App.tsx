import "./App.css";
import Header from "./components/Header";
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portifolio">
      <Header></Header>
      <div className="container">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  )
}

export default App;