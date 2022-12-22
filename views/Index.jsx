const React = require("react");
const DefaultLayout = require("./Default.jsx");

class Index extends React.Component {
  render() {
    return (
      <div className="main-container">
      <link rel="stylesheet" type="text/css" href="../styles/index.css"/>
      <DefaultLayout title={"Toys Index Page"}>
        <section className="allToys">
        <ul>
          {this.props.toys.map((toy, i) => {
            return (
              <li key={i}>
                <a href={`/toys/${toy.id}`} > {toy.name} </a>
                
                <form
                  action={`/toys/${toy._id}?_method=DELETE`}
                  method='POST'>
                  <input type='submit' value='DELETE' />
                  <a href={`/toys/${toy._id}/edit`}> Edit </a>
                </form>
              </li>
            );
          })}
        </ul>
        </section>
        <footer className= "create">
        <nav>
          <a href='/toys/new'>Create a New Product</a>
        </nav>
        </footer>
      </DefaultLayout>
      </div>
    );
  }
}

module.exports = Index;