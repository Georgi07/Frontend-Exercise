import React from "react";
import data from "./../data.json";
import Element from  './Element/Element';
import './ElementsList.scss';

function ElementsList() {
    let dataParsed = Object.entries(data.threads);
    let threadElements;
    let threadFirstElement;
     return (
        <div className="ElementsList">
          {
             dataParsed.map((thread, index) => {
                threadElements = thread[1];
                threadFirstElement = threadElements[0];
               return (
                   <Element key={index}
                            team={threadFirstElement.team} 
                             created_at={threadFirstElement.created_at}
                             subject={threadFirstElement.subject}
                             question={threadFirstElement.question}
                             text={threadFirstElement.text}
                             messages={threadElements.length}
                             score={threadElements[0].score}/>
               );
              })
          }
        </div>
      );
}
export default ElementsList;