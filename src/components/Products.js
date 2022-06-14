import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products, filterText } = this.props
    const list = []

    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return
      }
      list.push(product.name)
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

  handleChange = (e) => {
    this.props.onInputChange(e.target.value)
  }

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
      inputText: "hey"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (inputText) => {
    this.setState({inputText})
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onInputChange={this.handleChange} filterText={this.state.inputText}/>
        <List filterText={this.state.inputText} products = {this.props.products}/>
      </React.Fragment>
    )
  }

}
