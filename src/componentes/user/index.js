import React from "react";

export default function User (props){
    return(
        <div class="usuario">
          <img src={props.photo} />
          <div class="texto">
            <strong>{props.name}</strong>
            {props.subname}
          </div>
        </div>
  );
}        