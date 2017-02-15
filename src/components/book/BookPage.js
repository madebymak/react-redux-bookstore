import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    alert('Submitted')
  }

  render() {
    let titleInput;

    return(
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((b, index) => <li key={index}>{b.title}</li> )}
        </ul>
        <div>
          <h3>Book Form</h3>
          <form onSubmit={event => {
            event.preventDefault();
            var input = {title: titleInput.value};
            this.submitBook(input);
            event.target.reset();
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Book;
