import React from "react";

const Cards= ({icon, title}) => {
    return(
        <div className="flex card-content">
            {icon}
            <h3 className="title">{title}</h3>
        </div>
    )
}

export default Cards
;