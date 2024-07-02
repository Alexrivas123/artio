import React from "react";

export default class DiscografiaPaginas extends React.Component{

 constructor(props){
    super(props);
    this.state= {
        Discografia: []
    }
 }    
    componentDidMount() {
    fetch("https://musicbrainz.org/ws/2/artist/012151a8-0f9a-44c9-997f-ebd68b5389f9?inc=releases&fmt=json")
    .then( res => res.json() )
    .then ( result => {
        console.log(result)
        this.setState({
            Discografia: result.releases
        })
    })
    }
    render(){
        return(
            <>
            <h2>Imagine Dragons </h2> 
            {this.state.Discografia.map ((Discografia) => (
              
              <p>   {Discografia.title} ({Discografia.date})</p>
            ) ) }
           

           
                   
           
            </>
        );
    }



}