import React from 'react';

function SingleProducts(props) {
  return (
    <div className='singlePhone'>
            <img src={props.url} alt={props.title} />
                <div className="content">
                    <h2>{props.title}</h2>
                    <h4><span>-{props.off}% Off</span> &#8377;{props.cost}/- </h4>
                    <button className="themeBtn">Order Now</button>
                </div>
        </div>
  );
}

export default SingleProducts;
