const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <div className="editContainer">
            <link rel="stylesheet" type="text/css" href="/styles/edit.css"/>
            <DefaultLayout title="Edit Page">
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/toys/${this.props.Toys._id}?_method=PUT`} method="POST">
            Name: <input type='text' name='name' defaultValue={this.props.Toys.name} />
          <br/>
          ImageUrl: <input type='text' name='image' defaultValue={this.props.Toys.image} />
          <br/>
          AgeGroup: <input type='text' name='ageGroup' defaultValue={this.props.Toys.ageGroup} />
          <br/>
          Price : <input type='text' name='price' defaultValue={this.props.Toys.price}/>
          <br/> 
          quantity: <input type='number' name='quantity' defaultValue={this.props.Toys.quantity}/>
          <br/>
          <input type='submit' name='' value='Edit Product' />
                    
            </form>
            </DefaultLayout>
            </div>
        )
    }
}
module.exports = Edit;