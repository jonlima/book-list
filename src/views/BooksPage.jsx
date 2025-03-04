import { useSelector } from 'react-redux';
import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import { selectBooks } from '../store/booksSlice.js';

function BooksPage() {

  const pageTitle = "📖 Book List with React Router & Redux Toolkit";
  
  const books = useSelector(selectBooks);
    
    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />
            <div className="books-container">
                <div className="books-list">
                    
                    {books.map(book => 
                    
                    <Book key={book.id} book={book}  />
                    
                    )}

                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default BooksPage
  