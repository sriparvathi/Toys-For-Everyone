const React = require('react')
const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
};
class Show extends React.Component {
   render() {
      const { Toys } = this.props;

      return (
         <div>
            <link rel="stylesheet" type="text/css" href="../styles/show.css"/>
            <h1 style={myStyle}>Good choice</h1>
            <br />
            <div className='productDisplay'>
            <a href='/toys'>BACK TO PRODUCTS</a>
            <h2>{Toys.name}</h2>
            <img src={Toys.image}></img>
            <br />
            {Toys.quantity >0 ? <h3>{Toys.quantity} Available!</h3> : <h3>Sold Out!</h3>}
            {Toys.quantity >0 && (
            <form action={`/toys/${Toys.id}?_method=PUT`} method="POST">
                  <input type="submit" name="quantity" value="BUY" />  
            </form>
            )}
            <br />
            </div>
            <a href={`/toys/${Toys.id}/edit`}>Edit</a>
            <br />
            <a href='/toys'>DELETE</a>
         </div>
      );
   }
}
module.exports = Show;