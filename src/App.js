import React, { Component } from 'react';
import './App.css';
import './component/plazApp.css';
import './component/plazApp.js';
import cargando from './component/cargando.gif';
import name from './component/name.png';
import logo from './component/logo.png';

class App extends Component {
	
	
  render(){
		return(
			<div>
				<div id="load">
					<center>
						<img src={cargando} styles={"width:40%;"}></img>
					</center>
				</div>
				<div id="conten">
					
					<div className="navBar">
						<div styles={"width: 45%;"}>
							<center>
								<img src ={name} id="name"/>
							</center>
						</div>
						<div className="menu" >
								<a id="iniciob" className=" menuButton menuButtonActive" onclick="clicked('iniciob','inicio')">
									PlazApp
								</a>
								<a id="propuestab" className=" menuButton menuButtonInactive" onclick="clicked('propuestab','propuesta')">
									Propuesta
								</a>
								<a id="gb" className=" menuButton menuButtonInactive" onclick="clicked('gb','grupo')">
									Grupo de trabajo
								</a>
							</div>
					</div>
					
					<div id="inicio" className="section">
						<div id="descripcion">
							Buscamos minimizar la perdida de productos agricolas por falta de demanda, y beneficiar el mercado campesino y el bolsillo de los hogares Colombianos...
						</div>
						<img src = {logo} id="logo"/>
					</div>
					
					<div id="propuesta" className="section">
						<h1>Propuesta</h1>
						<center><p id="prop">
							Desarrollar una aplicacion que permite a vendedores de productos agricolas y a los hogares; Mediante nuestra idea, muchos productores agricolas podran ofrecer sus productos directamente al consumidor, creando
							un medio que permitirá que el productor pueda ser mejor remunerado y asi mismo el cliente pueda obtener beneficios, de recibir productos sin alteraciones y obtener beneficios economicos al realizar compra directamente
							de dichos productos.
						</p></center>
					</div>
					
					<div id="grupo" className="section">
						<h1> Nuestro grupo de trabajo </h1>
						<div id="page">
							<center>
								<iframe id="video" src="https://www.youtube.com/embed/3GHdqCmx0MQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
								</iframe>
							</center>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
