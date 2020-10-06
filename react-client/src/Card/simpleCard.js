import React, {Component} from "react";
import './css/simpleCard.css';
import emptyImage from "../assets/empty-profile.jpg";
import Content from "./content";
import ShareWidgets from "./shareWidgets";
import ProfileView from "./profile";


class SimpleCard extends Component{
    render(){
        return (
          <div className={'box'}>
              <div>
                  <img src={emptyImage} alt={"Configuration Pic"}
                       className={"img"} />
              </div>
              <div className={'content-placeholder'}>
                  <ProfileView/>
                  <Content/>
                  <ShareWidgets/>
              </div>
          </div>
        );
    }
}

export default SimpleCard;