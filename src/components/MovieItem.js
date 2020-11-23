// Imports React
import React from 'react';
// Imports Card Component
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Exports MovieItem Component
export class MovieItem extends React.Component {
  render() {
    return (
      // <div> has been replaced with a React Fragment
      <>
        <Card>
          <Card.Header>{this.props.movie.title}</Card.Header>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <img
                src={this.props.movie.poster}
                width='200'
                height='275'
                alt={this.props.movie.title}
              />
              <footer className='blockquote-footer'>
                <p>{this.props.movie.year}</p>
              </footer>
            </blockquote>
          </Card.Body>
          <Link to={`/edit/${this.props.movie._id}`} className='btn btn-primary'>
            Edit
          </Link>
        </Card>
      </>
    );
  }
}
