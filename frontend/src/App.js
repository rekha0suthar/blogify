import './App.css';
import Home from './components/Home';
import { BlogContextProvider } from './context/BlogContext';

function App() {
  return (
    <div className="App">
      <BlogContextProvider>
        <Home />
      </BlogContextProvider>
    </div>
  );
}

export default App;
