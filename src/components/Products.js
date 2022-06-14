import React from 'react'

class List extends React.Component {

  render() {
    const { products, filterText } = this.props
    const list = []

    products.forEach((product) => {
      if (product.title.indexOf(filterText) === -1) {
        return
      }
      list.push(product.title)
    })

    return(
      <ul>
        {list.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => this.props.onInputChange(e.target.value)

  render() {
    return(
      <form>
        <input type="text" placeholder="search..." value={this.props.filterText} onChange={this.handleChange}/>
      </form>
    )
  }
}

export class ProductsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      products: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState(data)
      });
  }

  handleChange = (inputText) => this.setState({inputText})

  render() {
    return (
      <React.Fragment>
        <SearchBar onInputChange={this.handleChange} filterText={this.state.inputText}/>
        <List filterText={this.state.inputText} products = {this.state.products}/>
      </React.Fragment>
    )
  }

}
