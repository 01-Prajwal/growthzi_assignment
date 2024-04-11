import React from 'react'
import './Services.scss'
import back6 from '../Images/pexels-gerald-jake-abangan-2689419.jpg'
import back7 from '../Images/pexels-valeria-boltneva-1199957.jpg'
import back8 from '../Images/jason-leung-poI7DelFiVA-unsplash.jpg'
import back9 from '../Images/robert-mathews-xXaLfz6V9rQ-unsplash.jpg'

const Services = () => {
    return (
        <>
            <div className='service' style={{ marginTop: '50px' }}>
                <h1>Speacials</h1>
                <div className="card-wrap">
                    <div className="card-one">
                        <div className="img-container">

                            <img src={back6} alt="" className='image' />
                        </div>
                        <h2 className='first'>BBQ Wednesdays</h2>
                        <div className="" style={{ width: "80%" }}>

                            <p className='para'>


                                Welcome to BBQ Wednesday at our place, where the aroma of sizzling meats dances in the air, teasing your senses and beckoning you to indulge in a feast fit for champions. Picture this: succulent cuts of meat, carefully seasoned and lovingly grilled to perfection, infused with the smoky essence of oak and hickory.</p>
                        </div>
                        <button className='sp-btn'>See Speacials</button>
                    </div>
                    <div className="card-one">
                        <div className="img-container">

                            <img src={back7} alt="" className='image' />
                        </div>
                        <h2 className='second'>BRO Burgers</h2>
                        <div className="" style={{ width: "80%" }} >

                            <p className='para'>Introducing BRO Burgers – where bold flavors meet hearty indulgence in every bite. Picture this: a thick, juicy patty cooked to perfection, its savory aroma drawing you in from across the room. Bring on your bros to dine in to have our speacial discounts on having 4 burgers for just 399/-</p>
                        </div>
                        <button className='sp-btn'>See Speacials</button>
                        {/* <button>See Speacials</button> */}
                    </div>

                </div>
            </div>
       
            <div className="book-table" style={{ marginTop: "50px" }}>
                <div className="img-container">

                    <img src={back8} className='img2'  />


                </div>
                <div className="tag">


                    <div className="tags">

                        <h2 className='end-title'>Book Your Table</h2>
                        <div className="para1">

                            <p style={{fontWeight:"bold"}}>


                                Amidst the hustle and bustle of everyday life,  offer a moment of culinary escapism, a chance to indulge in the simple pleasure of a perfectly crafted burger. Book your table now for 200/- ,call now at 9999-8880-9992</p>
                        </div>
                        <button className='sp-btn'>Contact Us </button>
                    </div>
                </div>
            </div>
            <div className=" catering" >
                <div className="">

                    <div className="tags1">

                        <h2 className='end-title1'>

                            Order for fucntions
                        </h2>
                        <p style={{width:"82%",fontWeight:'bold',textAlign:'center'}}>We cook for various occasions in varying quantities,Whether it's a wedding, corporate event, or private party, we handle every detail with care and precision, ensuring that your special occasion is nothing short of extraordinary. With customizable menus, impeccable service, and a passion for excellence, we're here to elevate your event to new heights. So sit back, relax, and let us handle the rest because when it comes to catering, perfection is our promise.</p>
                        <button className='sp-btn'>Explore Catering</button>

                    </div>
                </div>
                <div className="img-container">

                    <img src={back9} className='img2' />
                </div>
            </div>
           
        </>
    )
}

export default Services