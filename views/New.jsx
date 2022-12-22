const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
        <h1> Create A Product </h1>
        <form action='/toys' method='POST'>
          Name: <input type='text' name='name' />
          <br/>
          ImageUrl: <input type='url' name='image' />
          <br/>
          AgeGroup: <input type='text' name='ageGroup' />
          <br/>
          Price : <input type='text' name='price' />
          <br/> 
          Quantity: <input type='number' name='quantity' />
          <br/>
          <input type='submit' name='' value='Create Product' />
        </form>
        
      </div>
    );
  }
}

module.exports = New;