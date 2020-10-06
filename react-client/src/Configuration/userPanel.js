import React from "react";
import logo from '../logo.svg';
import './css/userPanel.css';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";
// import {faBullhorn} from '@fortawesome/free-regular-svg-icons';


class UserPanel extends React.Component{
    render(){
        return (
          <div className={'panel'}>
              <div>
                  <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className={'messagebtn'}>
                  <Button variant="contained" color="primary">
                      Your Voice &nbsp;<FontAwesomeIcon icon={faBullhorn}/>
                  </Button>
              </div>
          </div>
        );
    }
}

export default UserPanel;