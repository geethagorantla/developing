import React from 'react'

const ChildrensData = ({children,childrenname}) => {
    var displayingChildren
    switch(childrenname){
        case "children1":
            displayingChildren=(
                <div style={{width:"10%"}}>
                    {children}
                </div>
            )
            break;
            case "children2":
                displayingChildren=(
                    <div style={{width:"50%"}}>
                        {children}
                    </div>
                )
                break;

                case "children3":
                displayingChildren=(
                    <div style={{width:"10%"}}>
                        {children}
                    </div>
                )
                break;

                case "children4":
                displayingChildren=(
                    <div style={{width:"10%"}}>
                        {children}
                    </div>
                )
                break;

            default:
                displayingChildren=(
                    <div style={{width:"15%",backgroundColor:"red"}}>
                    {children}
                </div>
                )
    }
  return displayingChildren;
}

export default ChildrensData
