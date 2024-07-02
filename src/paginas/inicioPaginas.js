import  React from "react";
import Artista from "../Componentes/Artista";
 export default class inicioPaginas extends React.Component {
    render() {
        return(
             <>
                
                <h2>INICIO</h2>
                    hola¡
                    
                    <Artista 
                    img= "./img/my first story.jpeg" 
                    nombre= "My first story" 
                    descripcion= "Es una banda japonesa de J-rock formada en Shibuya (Tokio) en 2011. Consiste[¿cuándo?] del vocalista Hiroki Moriuchi, el guitarrista Teruki Nishizawa, el bajista Nobuaki Katou y el baterista Shouhei Sasaki. Su álbum debut titulado My First Story lanzado en 2012, captó la atención del público y los impulsó a encabezar los principales festivales de música."/>
                    
                    <Artista 
                    img= "./img/one ok rock.jpeg" 
                    nombre= "One ok rock" 
                    descripcion= "es una banda japonesa de rock formada en el año 2005, actualmente compuesta por cuatro miembros, Takahiro Moriuchi (vocalista), Toru Yamashita (guitarra), Ryota Kohama (bajo) y Tomoya Kanki (batería)."/>

                    <Artista
                    img="./img/imagine dragon.jpeg" 
                    nombre= "Imagine Dragons"
                    descripcion= " es una banda estadounidense de pop rock originaria de Las Vegas, Nevada. Está compuesta por Dan Reynolds (vocalista), Wayne Sermon (guitarrista), Ben McKee (bajista) y Daniel Platzman (baterista). Ganó el reconocimiento mundial con el lanzamiento de su álbum de estudio debut «Night Visions» (2012), y con su canción «It's Time»." />
                
     
            </>              
                
              
            
        )
    }

}