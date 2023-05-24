import Home from './pages/Home';
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.css';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
