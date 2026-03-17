import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../../components/Book/Book';
import { getStoredBook } from "../../Utility/addToDB"
const ReadList = () => {
    const [readList,setReadList] = useState([])
    const data = useLoaderData();
    console.log(data)
    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    },[])
    
    return (
        <div>
         <Tabs>
    <TabList>
      <Tab>ReadList</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read {readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;