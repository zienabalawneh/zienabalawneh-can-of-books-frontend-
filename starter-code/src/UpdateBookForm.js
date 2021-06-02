import React from 'react';

class UpdateBookForm extends React.Component {
    render() {
        return (
            <>
                <form onSubmit={(e) => this.props.updateBook(e)}>
                    <fieldset>
                        <legend>Update Book Info</legend>
                        <label>Book Name</label>
                        <input type='text' onChange={(e) => this.props.updateBookNameProps(e)} value={this.props.bookName} />

                        <label>Book Description</label>
                       <input type='text' onChange={(e)=>this.props.updateBookDescriptionProps(e)} value={this.props.description}/>

                       <label>Book UrlImg</label>
                        <input type='text' onChange={(e)=>this.props.updateBookUrlImgProps(e)}  value={this.props.urlImg}/>

                        <input type='submit' value='Update Book Info' />
                    </fieldset>
                </form>
            </>
        )
    }
}

export default UpdateBookForm 