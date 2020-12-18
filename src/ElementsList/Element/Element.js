import React, {useState} from "react";
import './Element.scss';

//{threadData} object which contains threads data

function Element({threadData}) {

    // Thread message length
    const [ showMessages, setShowMessages] = useState(0);

    // Shows messages number and their rating
    const messages = (score) => {
        if(showMessages !== threadData.length && threadData.length > 1){
            return ( <span className={"Message ", (score >= 6 ? 'HighRatingMessage' : 'LowRatingMessage')} >{threadData.length} messages</span>);
        }
    }

    // Shows element rating depend of the score
    const subjectRating = (score, subject) => {
        return (<h5 className={(score >= 6 ? 'HighRatingSubject' : 'LowRatingSubject')}>{subject}</h5>);
    }
    return (
        <div>
            {threadData.map((threadElement,index) => {
                if(showMessages !== 0 || index === 0 ){
                    return(
                        <div className="Element" key={index} onClick={()=>setShowMessages(threadData.length)}>
                            {messages(threadElement.score)}
                            <div className="Description">
                                {subjectRating(threadElement.score, threadElement.subject)}
                                <p>{threadElement.question}</p>
                                <span>{threadElement.text}</span>
                            </div>
                            <div className="Data">   
                                <div className="DataInfo">
                                    <p>{threadElement.team}</p>
                                    <span>{threadElement.created_at}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }) }
        </div>
    );
}
export default Element;
