import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact } from './components';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/"  element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
