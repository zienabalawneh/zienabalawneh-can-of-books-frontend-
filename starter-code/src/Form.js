import React from 'react';

 class Form extends  React.Component {
    render() {
        return (
            <>
            <form onSubmit={(e)=>this.props.addBookProps(e)}>
                <label>Book Name</label>
                <input type='text' onChange={(e)=>this.props.updateBookNameProps(e)}/>

                <label>Book Description</label>
                <input type='text' onChange={(e)=>this.props.updateBookDescriptionProps(e)}/>

                <label>Book UrlImg</label>
                <input type='text' onChange={(e)=>this.props.updateBookUrlImgProps(e)}/>

                <input type='submit' value='Add Book'/>
            </form>
        </>
        )
    }
}

export default Form


