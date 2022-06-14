import logo from './logo.svg';
import './App.css';
import React from 'react';

const ProductRow = ({product}) => {

  const name = product.stocked ?
    product.name :
    <div style={{color: "red"}}>{product.name}</div>

  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const ProductCategoryRow = ({category}) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  )
}

const ProductTable = ({products, surname}) => {
  const rows = []
  let lastCategory = null

  products.forEach(product => {
    if (product.category !== lastCategory) {
      lastCategory = product.category
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }
    rows.push(<ProductRow product = {product} key={product.name}/>)
  })

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  )
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleCheckbokChange = this.handleCheckbokChange.bind(this)
  }

  handleFilterTextChange (e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleCheckbokChange (e) {
    this.props.onCheckBoxChange(e.target.checked)
  }



  render() {
    return(
      <div>
        <form className ="form-group">
          <input className="form-control" type="text" placeholder="Search..." onChange={this.handleFilterTextChange} />
        </form>
        <form className ="form-check">
          <input className="form-check-input" type="checkbox" id="stock" onChange={this.handleCheckbokChange}  />
          <label htmlFor="stock" className="form-check-label">Produits en stock seulement</label>
        </form>
      </div>
    )
  }
}


export class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleFilterTextChange (filterText) {
    this.setState({filterText})
  }

  handleCheckboxChange (inStockOnly) {
    this.setState({inStockOnly})
  }

  render() {
    return (
      <React.Fragment>
        <>{JSON.stringify(this.state)}</>
        <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onCheckBoxChange={this.handleCheckboxChange}
        />
        <ProductTable products = {this.props.products}/>
      </React.Fragment>
    )
  }
}
