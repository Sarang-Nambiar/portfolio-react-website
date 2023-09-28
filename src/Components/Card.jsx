import React from "react"
export default function Card(props){
    return(
        <React.Fragment>
            <div className="card p-2 bg-[#DFDFDF] rounded-lg">
                {props.text}
            </div>
        </React.Fragment>
    )
}