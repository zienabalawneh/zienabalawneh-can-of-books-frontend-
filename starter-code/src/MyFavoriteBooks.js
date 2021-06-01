import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from './Form';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false
    }
  }

  componentDidMount = async () => {
    const books = await axios.get('http://localhost:3050/books', { params: { email: this.props.auth0.user.email } })
    console.log('books', books.data)
    this.setState({
      books: books.data,
      showBooks: true,
      bookName: '',
      description: '',
      urlImg: '',
      server: process.env.REACT_APP_SERVER_URL
    });
  }


  updateBookName = (event) => {
    this.setState({
      bookName: event.target.value
    })
  }


  updateDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }


  updateUrlImg = (event) => {
    this.setState({
      urlImg: event.target.value
    })
  }



  addBook = async (event) => {
    event.preventDefault();
    const bookFormData = {
      bookName: this.state.bookName,
      description: this.state.description,
      urlImg: this.state.urlImg,
    }
    const newBooks = await axios.post(`${this.state.server}/addBook`, bookFormData)

    this.setState({
      books: newBooks.data
    })

  }


  deleteBook = async (index) => {
    const ownerEmail = {
      email: this.props.auth0.user.email
    }
    let newBooks = await axios.delete(`${this.state.server}/deleteBook/${index}`, { params: ownerEmail })

    this.setState({
      books: newBooks.data
    })

  }


  render() {
    return (
      <Jumbotron>

        <h1>My Favorite Books</h1>


        <Form
          updateBookNameProps={this.updateBookName}
          updateBookDescriptionProps={this.updateDescription}
          updateBookUrlImgProps={this.updateUrlImg}
          addBookProps={this.addBook}
        />

        <p>This is a collection of my favorite books</p>
        <div>
          {this.state.showBooks &&
            this.state.books.map((item, idx) => {
              return (

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.urlImg} alt={item.urlImg} />
                  <Card.Body>
                    <Card.Title>{item.bookName}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.deleteBook(idx)}>Go somewhere</Button>
                  </Card.Body>
                </Card>

              )
            })}

        </div>


      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
