import React from 'react'

export default function ProductCard({ books }) {
    return (
        <div className='p-c-container'>

            {books.map((book) => (
                <div className="card rounded-4 bg-light">
                    <img src={book.image} className='rounded-top ' alt="Denim Jeans" />
                    {/* {console.log(book.image)} */}
                    <div className='card-body'>
                        <h4 className='card-title'><strong>{book.title}</strong></h4>
                        <p className='card-text'>{book.description}</p>
                        <div className='price-container'><p>MRP <del>{book.price}</del> <p className='discount'>{book.discount} % OFF</p></p></div>
                        <p className='net-price'><strong>Net price: &nbsp; {book.price - book.price * book.discount / 100}</strong></p>
                        <button className="btn btn-danger btn-lg rounded-3 mb-0">Add to Cart</button>
                    </div>
                </div>
            ))


            }
            {/* <div className="card rounded-3">
                    <img src="./images/dummy-image.png" className='rounded-top' alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button className="btn btn-danger rounded-3">Add to Cart</button>
                    </div>    
                </div>  */}

            {/* {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          ))} */}
        </div>
    )
}
