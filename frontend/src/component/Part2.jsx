import React from "react";
import rabbit from "../svg/rabbit.svg";
import partner from "../svg/partner.svg";
import male from "../svg/male.svg";
import event_add from "../svg/event_add.svg";
import female from "../svg/female.svg";
import pattern from "../svg/Pattern.svg";
import logo from "../svg/logo.svg";
import vector from "../svg/Vector.svg";
import group1 from "../svg/Group1.svg";
import group2 from "../svg/Group2.svg";
import mail from "../svg/mail.svg";
import drop from "../svg/drop.svg";
import { ReactComponent as Ring } from "../svg/Ring.svg"
import { ReactComponent as Glass } from "../svg/Glass.svg"
import { ReactComponent as Heart } from "../svg/Heart.svg"
import { ReactComponent as Thumb } from "../svg/Thumb.svg"




const Part2 = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#feefe4", height: "993px", width: "1440px" }}
      >
        <div className="navbar">
          <div className="left">
            <img src={rabbit} width="20px" alt="" />
            <p className="cName">Datify</p>
          </div>
          <div className="middle">
            <p>Home</p>
            <p className="middleItem">Members</p>
            <p className="middleItem">Blog</p>
            <p className="middleItem">Privacy</p>
            <p className="middleItem">Contact</p>
          </div>
          <div className="right">
            <span className="login">LogIn</span>
            <button className="registerButton">Register</button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between",position:"absolute" }}>
          <div className="leftSide">
            <p className="smallQuote">Because you deserve better</p>
            <div className="mainPointDiv">
            <h1 className="mainPoint">
              Get noticed for  <span style={{color: "#ED9B59"}}>who</span>  you are, <span style={{color: "#ED9B59"}}>not what</span> you are
            </h1>
            </div>
           <div className="detailedPointDiv">
           <p className="detailedPoint">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              atque voluptates, repellat repudiandae quod sequi blanditiis,
              natus dignissimos illum nemo fugiat, dolorem distinctio quas omnis
              quia! Nihil sunt veritatis ratione.
            </p>
           </div>
           
            <div className="inputDiv">
                <img src={mail} alt="" className="mailIcon" />
              <input type="text" className="inputBox" placeholder="Enter your Email" />
              <button className="inputButton">Get Started</button>
            </div>
            <div className="likesViews">
              <div>
                <h1 className="dateMatches">15k+</h1>
                <p className="likeViewText">Date and Matches made Everyday</p>
              </div>
              <div>
                <h1 className="newMembers">1,456</h1>
                <p className="likeViewText">New mwmbers signup every day</p>
              </div>
              <div>
                <h1 className="worldMembers">1M+</h1>
                <p className="likeViewText">Members from  around the world</p>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="partner">
                <Thumb className="thumb"/>
                <Ring className="ring"/>
                <Glass className="glass"/>
                <Heart className="heart"/>
              <img src={partner} alt="" />
            </div>
            <div className="rightInfoMainDiv">
              <div className="rightInfoDiv">
                <div className="info">
                  <div className="gender">
                    <img src={male} height="20px" style={{paddingLeft:"10px", marginTop:"10px"}}  />
                    <span className="infoText">Male</span>
                  </div>
                  <div className="calender">
                    <img src={event_add} width="20px" style={{paddingLeft:"10px"}} />
                    <span className="infoText">calender</span>
                  </div>
                  <div className="location">
                    <img src={drop} alt="" width="20px" style={{paddingLeft:"10px"}}/>
                    <span className="infoText">location</span>
                  </div>
                </div>

                <div>
                  <div className="selectPartner">
                    <div className="imageName">
                      <img className="selectImage" src={female} />
                      <div>
                      <p className="selectName">Angela Taylor</p>
                      <p className="selectLocation">NewYork NY</p>
                    </div>
                    </div>
                  
                   
                      <button className="selectButton">Select</button>
                    
                  </div>

                  <div className="selectPartner part2">
                  <div className="imageName">
                      <img className="selectImage " src={female} />
                      <div>
                      <p className="selectName">Angela Taylor</p>
                      <p className="selectLocation">NewYork NY</p>
                    </div>
                    </div>
                   
                      <button  className="selectButton">Select</button>
                  
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="cardlogo">
                  <img src={logo} alt="" />
                </div>
                <p className="cardPointers">CARD NUMBER</p>
                <h4 className="cardDetails">1234 5678 9123 4567</h4>
                <div className="nameThru">
                    <div>
                        <p className="cardPointers">CARD HOLDER NAME</p>
                        <h4 className="cardholder">Pankaj Kumar</h4>
                    </div>
                    <div>
                        <p className="cardPointers">VALID THRU</p>
                        <h4 className="cardholder">09/26</h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div >
<img src={vector} alt="" className="backgroundVector" />
            
          </div>
      </div>
      <img src={group1} className="topBackstick" alt="" />
      <img src={group2} className="bottomBackStick" alt="" />
    </>
  );
};

export default Part2;
