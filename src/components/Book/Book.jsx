import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({singleBook}) => {
    // console.log(singleBook)
    const {bookName,author,bookId,image} = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm flex ">
        <figure className='p-3 bg-gray-100 w-2/3  mx-auto'>
          <img className='h-[166px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </Link>
    );
};

export default Book;