import  React from "react";
import { Link } from "react-router-dom";

 export default class Menu extends React.Component {
    render() {
        return(
            <div className="row">
                <div className=" col-12 bg-light fixed-top px-4 py-1 d-flex align-items-center">
                    <h1> Artio</h1>
                    <Link to='Inicio' className="mx-3"> Inicio</Link>
                    <Link to='Artista' className="mx-3"> Artista</Link>
                     <Link to='Discografia' className=" mx-3"> Discografia</Link>
                    <Link to='Contacto' className="mx-3"> Contacto</Link>
                   
                </div>

            </div>
            
        )
    }

}
