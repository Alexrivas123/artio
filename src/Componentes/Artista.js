import React from "react";

export default class Artista extends React.Component{
constructor(props){
    super(props);
    this.state = {
        escondido: false
    }

    this.toggleEsconder = this.toggleEsconder.bind(this);
}

    toggleEsconder() {
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }) )

    }


    render(){
        return(
            <>
            <div className= {"row my-4 " + (this.state.escondido ? 'd-none' : '' )} >
                <div className=" col-12 d-flex align-items-center my-3  ">
                    <img src={this.props.img} alt={this.props.nombre} width="250px" className=" border-radius-8px mr-3"/>
                   <div >
                        <h2> {this.props.nombre} </h2>
                        <p> {this.props.descripcion} </p>
                        <button className="btn btn-danger" onClick={this.toggleEsconder}>esconder</button>
                    </div>
                </div>

            </div>
            </>
        )
    }

}