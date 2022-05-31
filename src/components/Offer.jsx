import React from 'react'
// import Offer1 from "../assets/offer1.jpeg"
// import Offer2 from "../assets/offer2.jpeg"
// import Offer3 from "../assets/offer3.jpeg"
// import Offer4 from "../assets/offer4.jpeg"

const Offer = (props) => {
  return (
    <section className="offers">
    <div className="container">
      {props.offers.map((el)=>(
        <img className="offer" src={el}/>
      ))}
        {/* <img className="offer" src={Offer1}/>
        <img className="offer" src= {Offer2} />
        <img className="offer" src= {Offer3} />
        <img className="offer" src= {Offer4} /> */}
    </div>
</section>
  )
}

export default Offer