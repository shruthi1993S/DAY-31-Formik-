import React, { useState } from 'react';
import BookForm from './BookForm';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (index, updatedBook) => {
    const newBooks = [...books];
    newBooks[index] = updatedBook;
    setBooks(newBooks);
  };

  const deleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setSelectedBook(books[index]);
  };

  const handleSubmit = (values) => {
    if (isEditing) {
      editBook(books.indexOf(selectedBook), values);
      setIsEditing(false);
      setSelectedBook(null);
    } else {
      addBook(values);
    }
  };

  return (
    <div>
      <h2>Book Management</h2>
      <BookForm initialValues={selectedBook || {}} onSubmit={handleSubmit} />
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author} - {book.isbn} - {book.publicationDate}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManagement;