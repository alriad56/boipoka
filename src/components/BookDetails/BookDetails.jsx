import React from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(books => books.bookId === bookId);
    const {bookName, image} = singleBook;
    
    const handleMarkAsRead = id => {
        addToStoredDB(id)
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent">Mark as Read</button>
            <button className="btn btn-info">Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;