import React from 'react';

const Book = ({singleBook}) => {
    // console.log(singleBook)
    const {bookName,author,image} = singleBook;
    return (
        <div className="card bg-base-100 w-96 shadow-sm flex ">
        <figure className='p-3'>
          <img
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
    );
};

export default Book;