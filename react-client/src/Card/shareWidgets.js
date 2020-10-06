import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons';
import './css/shareWidgets.css';

class ShareWidgets extends React.Component{
    render() {
        return (
          <div className={'fontDisplay'}>
              <div><span className={"comment"}><FontAwesomeIcon className={'icon'} icon={faComment} /></span></div>
              <div><span className={"like"}><FontAwesomeIcon className={'icon'} icon={faHeart} /><code>{'2'}</code></span></div>
              <div><span className={"retweet"}><FontAwesomeIcon className={'icon'} icon={faRetweet} /><code>{'3'}</code></span></div>
          </div>
        );
    }
}

export default ShareWidgets;