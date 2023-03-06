import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function Restreview({review}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        variant="dark"
        className='mt-3'
      >
        Reviews
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          {
            
            review.map(item=> (
              <div id="example-fade-text" className='mt-2'>

                <h5>{item.name}</h5>
                <h6>Rating: {item.rating}</h6>
                <p>Comment: {item.comments} <br/>{item.date}</p>
              </div>
            ))
          }

        </div>
      </Fade>
    </>)
}

export default Restreview