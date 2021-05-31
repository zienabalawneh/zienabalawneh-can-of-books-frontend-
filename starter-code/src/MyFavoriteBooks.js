import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import BestBooks from './BestBooks';
import Carousel from 'react-bootstrap/Carousel';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],

      showBooks: false,
      //server: process.env.REACT_APP_SERVER_URL,
    }
  }

  componentDidUpdate = async () => {

    //http://localhost:3050/books?email=yahyazainab204@gmail.com
    //const books = await axios.get(`${this.state.server}/books?`, { params: { email: this.props.auth0.user.email } });
    const books = await axios.get(`http://localhost:3050/books?`, { params: { email: this.props.auth0.book.email } });
    console.log('books', books.data);
    this.setState({
      showBooks: true,
      books: books.data,



    });
    console.log("book", books);
  }


  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {/* <BestBooks books={this.state.books}  /> */}
        <Carousel style={{ width: '400px' }}>
          {this.state.showBooks &&
            this.state.books.map(item => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.urlImg}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.bookName}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
        </Carousel>
      </Jumbotron>
    )
  }
}


export default withAuth0(MyFavoriteBooks);
