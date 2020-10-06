import React from "react";
import SimpleCard from "../Card/simpleCard";

class CardFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const feedItems = [...Array(10)].map(n => {return <SimpleCard/>});
        return (<div>
                {feedItems}
            </div>
        );
    }
}

export default CardFeed;