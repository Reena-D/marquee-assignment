import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookSearch() {
  let navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);




  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (query.length > 1) {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      const data = await response.json();
      setBooks(data.docs);
    }
  };

  const addToBookShelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];


    const isBookAlreadyAdded = bookshelf.some(
      (savedBook) => savedBook.key === book.key
    );
    alert("Book added to bookshelf");

    if (!isBookAlreadyAdded) {
      bookshelf.push(book);
      localStorage.setItem("bookshelf", JSON.stringify(bookshelf));

    } else {
      alert("This book is already in your bookshelf!");
    }
  };

  const MyBookShelf = () => {
    navigate("/bookshelf");
  };

  return (
    <div className="search-book">
      <div className="search-box">
        <span>Search by book name:</span>
        <input
          type="search"
          className="b-search"
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className="search-results">
        {books.map((book) => (
          <div key={book.key} className="book-card">
            <h3>Book Title: {book.title}</h3>
            <h3>Edition Count: {book.edition_count}</h3>
            <button onClick={() => addToBookShelf(book)} className="b-card">
            Add to Book Shelf
            </button>


          </div>
        ))}
      </div>
      <div className="book-shelf">
        <input
          type="button"
          value="My Bookshelf"
          className="b-shelf"
          onClick={MyBookShelf}
        />
      </div>
    </div>
  );
}

export default BookSearch;