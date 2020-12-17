import React from "react";
import './Element.scss';

function Element(props) {
    return (
        <div className="Element">
             {props.messages > 1 ? props.score >= 6 ? <span className="Message HighRatingMessage">{props.messages} messages</span> : <span className="Message LowRatingMessage">{props.messages} messages</span>: ''}
            <div className="Description">
            {props.score >= 6 ? <h5 className="HighRatingSubject">{props.subject}</h5> : <h5 className="LowRatingSubject">{props.subject}</h5>}
            <p>{props.question}</p>
            <span>{props.text}</span>
            </div>
            <div className="Data">   
             <div className="DataInfo">
               <p>{props.team}</p>
               <span>{props.created_at}</span>
             </div>
            </div>
        </div>
    );
}
export default Element;
