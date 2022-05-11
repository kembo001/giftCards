import React from 'react'
import Delta from '../images/Delta.jpg'
import Airbnb from '../images/airbnb.png'
import Southwest from '../images/southwest.png'
import Uber from '../images/uber.png'
import TopGolf from '../images/topgolf.png'
import './Product.css'

// const travelProducts = [
//     {
//         id: 1,
//         image: Delta,
//         title: '$100 Delta Gift cards',
//         description: 'The Delta Gift Card puts travel within reach. Redeemable for any Delta Air Lines flight worldwide, and for any Delta Vacations package that includes airfare, it is the perfect gift for the travel lover in your life.'
//     },
//     {
//         id: 2,
//         image:Airbnb,
//         title: '$100 AirBnB Gift cards',
//         description: 'Give Airbnb—amazing places to stay and things to do, all around the world. Give the perfect getaway—everything from lakeside cabins to secluded beach houses to apartments in the heart of the city. Give immersive Experiences, from guided tours to lessons to tastings, led by local experts. Airbnb gift cards never expire. Use to book stays or Experiences; spend all at once or apply to multiple bookings.'
//     }, 
// ]

function Product() {
  return (
      <div className='products'>
          <h1>Travel</h1>
    <div className='product'>
           
                <article className='card'>
                        <img className='card-image' src={Delta} alt=''/>
                        <div className='card-text'>
                            <h2>$100 Delta Gift cards</h2>
                            <p>'The Delta Gift Card puts travel within reach. Redeemable for any Delta Air Lines flight worldwide, and for any Delta Vacations package that includes airfare, it is the perfect gift for the travel lover in your life.'</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
                    </article>

                    <article className='card'>
                        <img className='card-image' src={Airbnb} alt=''/>
                        <div className='card-text'>
                            <h2>$100 AirBnB Gift cards</h2>
                            <p>Give Airbnb—amazing places to stay and things to do, all around the world. Give the perfect getaway—everything from lakeside cabins to secluded beach houses to apartments in the heart of the city. </p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
                    </article>

                    <article className='card'>
                        <img className='card-image' src={Southwest} alt=''/>
                        <div className='card-text'>
                            <h2>$100 Southwest Gift cards</h2>
                            <p>'The Southwest Gift Card puts travel within reach. Redeemable for any Southwest Air Lines flight worldwide, and for any Southwest Vacations package that includes airfare, it is the perfect gift for the travel lover in your life.'</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
                    </article>
                    
                    <article className='card'>
                        <img className='card-image' src={Uber} alt=''/>
                        <div className='card-text'>
                            <h2>$25 Uber Gift cards</h2>
                            <p>Get a reliable ride in minutes with the Uber app.</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>17.50</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
                    </article>

                    
                </div>
    <h1>Entertainment</h1>
        <div className='product'>
        <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$50 Top Golf Gift cards</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

            <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$25 Fandango Gift cards</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

            <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$25 Barnes & Noble Gift cards</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

            <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$25 AMC Gift cards</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

            <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$100 StubHub Gift cards</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

        </div>

        <h1>Food & Restaurants</h1>
        <div className='product'>
        <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$25 Starbucks Gift cards</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

            <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$25 Cheesecake Factory Gift cards</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

            <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$25 Famous Daves</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

            <article className='card'>
                        <img className='card-image' src={TopGolf} alt=''/>
                        <div className='card-text'>
                            <h2>$25 Chipotle</h2>
                            <p>Topgolf Gift Cards open the doors to an unforgettable time with your friends and family. From the bay to the menu, to upping your game and wardrobe, there are a variety ways to get the most out of a Topgolf Gift Card.
</p>
                        </div>
                        <div className='card-stats'>
                            <div className='stat one'>
                                <div className='value'><sup>$</sup>70.00</div>
                                <div className='type'>Price</div>
                            </div>
                            <div className='stat border'>
                                <div className='value'>
                                <button className='btn-1'>Add to Basket</button>
                                </div>
                            </div>
                        </div> 
            </article>

        </div>
    
    </div>
  )
}



export default Product

