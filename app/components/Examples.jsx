var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Ejemplo</h1>
      <p>Aquí encontraras algunos ejemplos.</p>
      <ol>
      	<li>
      		<Link to='/?=location=Philadelphia' >Philadelphia, PA</Link>
      	</li>
      	<li>
      		<Link to='/?=location=Rio' >Rio, Brazil</Link>
      	</li>
      </ol>
    </div>
  )
};

module.exports = Examples;
