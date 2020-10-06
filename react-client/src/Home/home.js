import React from "react";
import CardFeed from "./cardFeed";
import HeadPanel from "./headPanel";

class Home extends React.Component{
    render() {
        return (
            <div>
                <HeadPanel/>
                <CardFeed/>
            </div>
        );
    }
}

export default Home;