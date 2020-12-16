import React from "react";
import './Element.scss';

function Element(props) {
    return (
        <div className="Element">
            <div className="Data">   
            {props.messages > 1 ? props.score >= 6 ? <span className="Message HighRatingMessage">{props.messages} messages</span> : <span className="Message LowRatingMessage">{props.messages} messages</span>: ''}
             <div className="DataInfo">
               <p>{props.team}</p>
               <span>{props.created_at}</span>
             </div>
            </div>
            <div className="Description">
            {props.score >= 6 ? <h4 className="HighRatingSubject">{props.subject}</h4> : <h4 className="LowRatingSubject">{props.subject}</h4>}
            <p>{props.question}</p>
            <span>{props.text}</span>
            </div>
        </div>
    );
}
export default Element;
