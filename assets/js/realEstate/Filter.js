import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<section className="filter">
    <h4>Filter</h4>
    <select name="neighbourhood" className="filters neighbourhood">
      <option>Ridgewood</option>
    </select>
    <select name="housetype" className="filters neighbourhood">
      <option>Ranch</option>
    </select>
    <select name="bedrooms" className="filters bedrooms">
      <option>2 BR</option>
    </select>
    <div className="filters price">
      <span className="title">Price</span>
      <input type="text" name="min-price" />
      <input type="text" name="max-price" />
    </div>
    <div className="filters floor space">
      <span className="title">Price</span>
      <input type="text" name="min-floor-space" />
      <input type="text" name="max-floor-space" />
    </div>
    <div className="filters extras">
      <label for="extras">
      <span>Elevators</span>
      <input name="extras" value="elevators" type="checkbox" />
      </label>
      <label for="extras">
      <span>Swimming Pool</span>
      <input name="extras" value="swimming-pool" type="checkbox" />
      </label>
      <label for="extras">
      <span>Finished Basement</span>
      <input name="extras" value="finished basement" type="checkbox" />
      </label>
      <label for="extras">
      <span>Finished Basement</span>
      <input name="extras" value="gym" type="checkbox" />
      </label>
      
    </div>
    </section>

    )
  }
}
