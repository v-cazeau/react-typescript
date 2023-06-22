import React from "react";

const Message = (prop: {message: string}) => {
    return (
        <p>{prop.message}</p>
    );
}

export default Message;

//rewatch the video if needed but this is how we would do a stateless/ functional component

//pass the arguements, expectation and return type