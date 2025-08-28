import { useState } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleBookAdded = () => {
    setRefresh(prev => !prev);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <BookForm onBookAdded={handleBookAdded} />
        <BookList key={refresh} />
      </main>
      <Footer />
    </div>
  );
}

export default App;