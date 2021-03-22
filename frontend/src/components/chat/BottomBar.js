import React from 'react';


export default function BottomBar(props) {

  return (
   <div className='compose-container'>
       <form onSubmit={props.handleSubmit}>
            <input 
              type='text'
              onChange={props.handleContent}
              value={props.content}
              placeholder="Type here ..."
            />
            <p>Press Enter to send</p>
       </form>
   </div>
  );
}