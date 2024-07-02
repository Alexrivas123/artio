import  React from "react";

export default class ContactoPaginas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Nombre: '',
            Mensaje: ''
        }

        this.submitted= this.submitted.bind(this);
       this.Changed=this.Changed.bind(this);
    }

   

    submitted(event){
        alert('se envio el formulario '+ this.state.Nombre )
        event.preventDefault()
    }

    Changed(event){
        this.setState({
            Nombre: event.target.value
        })
    }

    render(){
        return(
            <>
            <h2> Contacto</h2>

            <form onSubmit={this.submitted}>
                <div className="form-group" >
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={this.Changed}></input>
                </div>

                <div className="form-group">
                    <label>Mensaje</label>
                    <textarea className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-danger mt-2" >Enviar</button>

            </form>
            </>
        )
    }

}
