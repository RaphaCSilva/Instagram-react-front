import React from "react";

export default function Sugestao (props){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={props.sgstimg} />
              <div class="texto">
                <div class="nome">{props.sgstname}</div>
                <div class="razao">{props.motivo}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
  );
}