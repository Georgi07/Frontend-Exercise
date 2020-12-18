import React from "react";
import data from "./../data.json";
import Element from  './Element/Element';
import './ElementsList.scss';

//ElementsList which visualize all elements with their own content
function ElementsList() {
    let dataParsed = Object.values(data.threads);
    // console.log("dataParsed:",dataParsed)
     return (
        <div className="ElementsList">
          {
             dataParsed.map((thread, index) => {
              return (
                 <Element 
                   key={index}
                   threadData={thread} />
              );
             })
          }
        </div>
      );
}
export default ElementsList;