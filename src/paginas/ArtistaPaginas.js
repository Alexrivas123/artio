import  React from "react";

import Lista from "../Componentes/Lista";

 export default class ArtistaPaginas extends React.Component {
   

    artista=[ 
        {
            nombre: " My first story",
            img: "./img/my first story.jpeg"
        },
    
        {
            nombre:  " One ok rock",
            img:"./img/One ok rock.jpeg"
        },
    
        {
            nombre: 'Imagine Dragons',
              img:"./img/imagine dragon.jpeg"
        }
    ]
   
    render() {
        return(
             <>
                
                <h2>Artista</h2>

                <Lista artista={this.artista}/>
    
            </>              
                
              
            
        )
    }

}