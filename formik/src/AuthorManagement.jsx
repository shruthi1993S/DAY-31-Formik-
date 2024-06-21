import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

const AuthorManagement = () => {
  const [authors, setAuthors] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const editAuthor = (index, updatedAuthor) => {
    const newAuthors = [...authors];
    newAuthors[index] = updatedAuthor;
    setAuthors(newAuthors);
  };

  const deleteAuthor = (index) => {
    const newAuthors = [...authors];
    newAuthors.splice(index, 1);
    setAuthors(newAuthors);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setSelectedAuthor(authors[index]);
  };

  const handleSubmit = (values) => {
    if (isEditing) {
      editAuthor(authors.indexOf(selectedAuthor), values);
      setIsEditing(false);
      setSelectedAuthor(null);
    } else {
      addAuthor(values);
    }
  };

  return (
    <div>
      <h2>Author Management</h2>
      <AuthorForm initialValues={selectedAuthor || {}} onSubmit={handleSubmit} />
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            {author.name} - {author.birthDate} - {author.biography}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteAuthor(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorManagement;