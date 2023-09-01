import React, { useState } from 'react';

export const Form = () => {
  const [nombre, setNombre] = useState('');
  const [nombreOriginal, setNombreOriginal] = useState('');
  const [idpizza, setIdpizza] = useState('1');
  const [tipo, setTipo] = useState('Personal');
  const [tipoOriginal, setTipoOriginal] = useState('');
  const [mostrarValores, setMostrarValores] = useState(false);
  const [ingredientesExtra, setIngredientesExtra] = useState(0);
  const [ingreori, setIngreori] = useState(0);
  const [totingre, setTotingre] = useState(0);
  const [valor, setValor] = useState(0);

  const handleChange = (event) => {
    const { name, value, options } = event.target;

    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'idpizza') {
      setIdpizza(value);
      // Obtener el texto seleccionado del elemento select
      const selectedText = options[options.selectedIndex].text;
      setTipo(selectedText);
    } else if (name === 'ingredientesExtra') {
      setIngredientesExtra(parseInt(value));
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim() === '') {
        alert('El campo no puede estar vacío');
        return;
      }
      setNombreOriginal(nombre);
      setTipoOriginal(tipo);
      setIngreori(ingredientesExtra);
      //verificamos que tipo de pizza
    if (idpizza === '1') {
      setValor(7);
      switch (ingredientesExtra) {
        case 0:
            setTotingre(0); // no agregó ingredientes
            break;
        case 1:
          setTotingre(1); // 1 ingrediente $1
          break;
        case 2:
          setTotingre(0.75); // 2 ingredientes $0.75
          break;
        case 3:
          setTotingre(0.50); // 3 ingredientes $0.50
          break;
        case 4:
          setTotingre(0.25); // +3 ingredientes $0.25(c/u)
          break;
        default:
         setTotingre(0.25); // +3 ingredientes $0.25(c/u)
          break;
      }
    } else if (idpizza === '2') {
      setValor(10);
      switch (ingredientesExtra) {
        case 0:
            setTotingre(0); // no agregó ingredientes
            break;
        case 1:
          setTotingre(2); // 1 ingrediente $2
          break;
        case 2:
          setTotingre(1); // 2 ingredientes $1
          break;
        case 3:
          setTotingre(0.75); // 3 ingredientes $0.75
          break;
        case 4:
          setTotingre(0.50); // +3 ingredientes $0.50(c/u)
          break;
        default:
            setTotingre(0.50); // +3 ingredientes $0.50(c/u)
          break;
      }
    } else if (idpizza === '3') {
      setValor(12);
      switch (ingredientesExtra) {
        case 0:
            setTotingre(0); // no agregó ingredientes
            break;
        case 1:
          setTotingre(2.50); // 1 ingrediente $2.50
          break;
        case 2:
          setTotingre(2); // 2 ingredientes $2
          break;
        case 3:
          setTotingre(1); // 3 ingredientes $1
          break;
        case 4:
          setTotingre(0.75); // +3 ingredientes $0.75(c/u)
          break;
        default:
            setTotingre(0.75); // +3 ingredientes $0.75(c/u)
          break;
      }
    }
     setMostrarValores(true); // Se muestran los valores después de hacer clic en "Capturar"
     setNombre(''); //borra el nombre
     setTipo('Personal'); // Establecerlo al valor predeterminado 'Personal'
     setIngredientesExtra(0); // Establecerlo a 0
    };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contenedor">
        <label id="nombre">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </label>
        <label  id="Tipo">
          Tipo de Pizza:
          <select name="idpizza" value={idpizza} onChange={handleChange}>
            <option value="1">Personal</option>
            <option value="2">Mediana</option>
            <option value="3">Grande</option>
          </select>
        </label>
        <label  id="Ingre">
          Ingredientes extra:
          <input
            type="number"
            min={0}
            name="ingredientesExtra"
            value={ingredientesExtra}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Ingresar</button>
      </form>
      {mostrarValores && (
        <div id="sep">
            <h2>Factura</h2>
            <div className="factura">
            <div className="fac">
            <p className="izq">Nombre:</p><p className="der">{nombreOriginal}</p>
            </div>
            <div className="fac">
            <p className="izq">Tipo de Pizza: </p><p className="der">{tipoOriginal}</p>
            </div>
            <div className="fac">
            <p className="izq">Valor de la Pizza: </p><p className="der">${valor}</p>
            </div>
            <div className="fac">
            <p className="izq">Valor por Ingrediente extra: </p><p className="der">${totingre}</p>
            </div>
            <div className="fac">
            <p className="izq">Ingredientes extra: </p><p className="der">{ingreori}</p>
            </div>
            <div className="fac">
            <p className="izq">Costo Adicional: </p><p className="der">${totingre * ingreori}</p>
            </div>
            
            </div>
            <div>
            <p className="final">Total a Pagar: ${(totingre * ingreori) + valor}</p>
            </div>   
        </div>
      )}
    </div>
  );
};

export default Form;
