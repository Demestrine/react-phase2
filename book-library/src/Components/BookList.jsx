import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading books...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="book-list">
      <h2>Book Collection ({books.length} books)</h2>
      <div className="books-container">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;