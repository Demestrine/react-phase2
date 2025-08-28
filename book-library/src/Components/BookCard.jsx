
function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> <span className="rating">{book.rating}/5</span></p>
      {book.description && (
        <p className="description">{book.description}</p>
      )}
    </div>
  );
}

export default BookCard;
