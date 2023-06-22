import React from 'react';
import messageHoc from './Hoc';

const example = (props: any) : any => <p>{props.name}, {props.message}</p>;

const Message =  messageHoc(example)

export default Message;

//rewatch the video if needed but this is how we would do a stateless/ functional component

//pass the arguements, expectation and return type