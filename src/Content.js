import React, { Component } from "react";
import Game from "./data.json";

const games = Game.map(
    (Game) => 
    {
        return(

            
        <div className="col-12" key={Game.title}>
        <div className="card text-dark">
            <br></br>
            
            <div className="card mb-3 text-center">
            <h2 className="card-title text-center">{Game.title}</h2>
            <img src={Game.image} className="rounded mx-auto d-block" alt=" " height="500px" width="500px"></img></div>
<div className="card-body">
<h4 className="card-title">{Game["heading-1"]}</h4>
    <p className="card-text">{Game["paragraph-1"]}</p>
    <h4 className="card-title">{Game["heading-2"]}</h4>
    <p className="card-text">{Game["paragraph-2"]}</p>
    <h4 className="card-title">{Game["heading-3"]}</h4>
    <p className="card-text">{Game["paragraph-3"]}</p>
</div>
</div>

            </div> 
    

              
       
            );
    }
);

class Content extends Component {
    render() {
        return (
            <div>
                
        {games}
            </div>            
                );
    }
}

export default Content;
