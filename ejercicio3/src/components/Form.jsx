import React from "react";
import { useState } from "react";

export const Form = () => {
  const [iddestino, setIdDestino] = useState(1);
  const [destino, setDestino] = useState('Ciudad de Panamá');
  const [porcentaje, setPorcentaje] = useState(0);
  const [npersonas, setNpersonas] = useState(1);
  const [npersonas2, setNpersonas2] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [mostrarValores, setMostrarValores] = useState(false);

  const handleChange = (event) => {
    const { name, value, options } = event.target;


    if (name === 'iddestino') {
      setIdDestino(value);
      // Obtener el texto seleccionado del elemento select
      const selectedText = options[options.selectedIndex].text;
      setDestino(selectedText);
    } else if (name === 'npersonas') {
      setNpersonas(parseInt(value));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setNpersonas2(npersonas);

    let nuevoPorcentaje = 0;
    let nuevoPrecio = 0;
    switch (iddestino) {
      case 1:
        nuevoPorcentaje = 0.045; // Panamá 4.5% impuesto
        switch (npersonas) {
          case 1:
            nuevoPrecio = 197; // valor del vuelo
            break;
          case 2:
            nuevoPrecio = 165; // valor del vuelo
            break;
          case 3:
            nuevoPrecio = 149; // valor del vuelo
            break;
          case 4:
            nuevoPrecio = 149; // valor del vuelo
            break;
          case 5:
            nuevoPrecio = 129; // valor del vuelo
            break;
          default:
            nuevoPrecio = 129; // valor del vuelo
            break;
        }
        break;
      case 2:
        nuevoPorcentaje = 0.06; // México 6% impuesto
        switch (npersonas) {
          case 1:
            nuevoPrecio = 485; // valor del vuelo
            break;
          case 2:
            nuevoPrecio = 439; // valor del vuelo
            break;
          case 3:
            nuevoPrecio = 400; // valor del vuelo
            break;
          case 4:
            nuevoPrecio = 400; // valor del vuelo
            break;
          case 5:
            nuevoPrecio = 380; // valor del vuelo
            break;
          default:
            nuevoPrecio = 380; // valor del vuelo
            break;
        }
        break;
      case 3:
        nuevoPorcentaje = 0.07; // Chile 7% impuesto
        switch (npersonas) {
          case 1:
            nuevoPrecio = 198; // valor del vuelo
            break;
          case 2:
            nuevoPrecio = 178; // valor del vuelo
            break;
          case 3:
            nuevoPrecio = 158; // valor del vuelo
            break;
          case 4:
            nuevoPrecio = 158; // valor del vuelo
            break;
          case 5:
            nuevoPrecio = 138; // valor del vuelo
            break;
          default:
            nuevoPrecio = 138; // valor del vuelo
            break;
        }
        break;
      case 4:
        nuevoPorcentaje = 0.075; // Perú 7.5% impuesto
        switch (npersonas) {
          case 1:
            nuevoPrecio = 754; // valor del vuelo
            break;
          case 2:
            nuevoPrecio = 699; // valor del vuelo
            break;
          case 3:
            nuevoPrecio = 469; // valor del vuelo
            break;
          case 4:
            nuevoPrecio = 469; // valor del vuelo
            break;
          case 5:
            nuevoPrecio = 629; // valor del vuelo
            break;
          default:
            nuevoPrecio = 629; // valor del vuelo
            break;
        }
        break;
      case 5:
        nuevoPorcentaje = 0.04; // Honduras 4% impuesto
        switch (npersonas) {
          case 1:
            nuevoPrecio = 565; // valor del vuelo
            break;
          case 2:
            nuevoPrecio = 499; // valor del vuelo
            break;
          case 3:
            nuevoPrecio = 469; // valor del vuelo
            break;
          case 4:
            nuevoPrecio = 469; // valor del vuelo
            break;
          case 5:
            nuevoPrecio = 449; // valor del vuelo
            break;
          default:
            nuevoPrecio = 449; // valor del vuelo
            break;
        }
        break;
    }
    setPorcentaje(nuevoPorcentaje);
    setPrecio(nuevoPrecio);
    setMostrarValores(true);
    setNpersonas(1);
  };

  return (
    <>
      <div className="Contenedor1">
        <div className="texto">
          <h1>Listado de Viajes</h1>
        </div>
        <div className="tabla">
          <table>
            <tr>
              <td rowspan="2" style={{ width: '10%', fontWeight: "bold" }}>#</td>
              <td rowspan="2" style={{ fontWeight: "bold" }}>Destino</td>
              <td colspan="4" style={{ fontWeight: "bold" }}>Precio vuelo de ida y vuelta</td>
            </tr>
            <tr>

              <td style={{ fontWeight: "bold" }}>Individual</td>
              <td style={{ fontWeight: "bold" }}>2 personas</td>
              <td style={{ width: '15%', fontWeight: "bold" }}>3 a 4 personas</td>
              <td style={{ width: '15%', fontWeight: "bold" }}>5 a más personas</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>1</td>
              <td style={{ fontWeight: "bold" }}>Ciudad de Panamá</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 197.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 165.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 149.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 129.00</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>2</td>
              <td style={{ fontWeight: "bold" }}>Cancún México</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 485.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 439.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 400.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 380.00</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>3</td>
              <td style={{ fontWeight: "bold" }}>Santiago de Chile</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 198.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 178.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 158.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 138.00</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>4</td>
              <td style={{ fontWeight: "bold" }}>Machu Picchu Perú</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 754.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 699.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 649.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 629.00</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>5</td>
              <td style={{ fontWeight: "bold" }}>Roatán Honduras </td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 565.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 499.00 </td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 469.00</td>
              <td style={{ color: "blue", fontWeight: "bold" }}>$ 449.00</td>
            </tr>

          </table>
        </div>
      </div>
      <div id="entrada">
        <form onSubmit={handleSubmit}>
          <h3>Solicitar un viaje</h3>
          <label id="picker">
              Destino:
            <select name="iddestino" value={iddestino} onChange={handleChange}>
              <option value="1">Ciudad de Panamá</option>
              <option value="2">Cancún México </option>
              <option value="3">Santiago de Chile</option>
              <option value="4">Machu Picchu Perú</option>
              <option value="5">Rotan Honduras </option>
            </select>
          </label>
          <label id="npersonas">
            Cantidad de personas:
            <input
              type="number"
              min={1}
              name="npersonas"
              value={npersonas}
              onChange={handleChange}
            />
          </label>
          <button id="bt" type="submit">Solicitar</button>
        </form>
      </div>
      {mostrarValores && (
        <div id="sep">
          <h2>Datos del Viaje</h2>
          <div className="factura">
            <div className="fac">
              <p className="izq">Destino:</p><p className="der">{destino}</p>
            </div>
            <div className="fac">
              <p className="izq">Impuesto P/P: </p><p className="der">{porcentaje}</p>
            </div>
            <div className="fac">
              <p className="izq">Precio P/P: </p><p className="der">${precio}</p>
            </div>
            <div className="fac">
              <p className="izq">Numero total de pasajeros:</p><p className="der">{npersonas2}</p>
            </div>
            <div className="fac">
              <p className="izq">Valor extra P/P: </p><p className="der">${(porcentaje * precio).toFixed(2)}</p>
              
            </div>
            
          </div>
          <p></p>
          <div>
            <p className="final">Total a Pagar: ${(((porcentaje * precio) + precio) * npersonas2).toFixed(2)}</p>
          </div>
        </div>
      )}
    </>
  );

}
export default Form;
