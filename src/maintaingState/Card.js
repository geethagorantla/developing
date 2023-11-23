import React from 'react'
import ChildrensData from './ChildrensData';

const Card = ({ displayingdata, children }) => {
    console.log(displayingdata,"displayingdata")
    var displaying;

    switch (displayingdata) {
        case "displayingData": 
            displaying = 
            (<div style={{ display: "flex", width: "100%",justifyContent:"space-between" }}>
                <ChildrensData  childrenname="children1">                
                {children[0]}
                </ChildrensData>
                <ChildrensData childrenname="children2">                
                {children[1]}
                </ChildrensData>
                <ChildrensData childrenname="children3">                
                {children[2]}
                </ChildrensData>
                <ChildrensData childrenname="children4">                
                {children[3]}
                </ChildrensData>

            </div>)
        
            break;
        default:
            displaying = (
                <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    {children}
                </div>
            );
    }
    return displaying
}

export default Card
