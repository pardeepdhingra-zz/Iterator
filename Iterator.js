import React, { Component } from 'react'
import pluralize from 'pluralize'

class Iterator extends Component {
  render() {
    let { name, iterate, children } = this.props;
    return (
      <div>
        {iterate.map(function(object, i){
          let childProp = {};
          childProp[pluralize.singular(name)] = object;
          return <div key={i}>{React.cloneElement(children, childProp )}</div>
        })}
      </div>
    );
  }
}

Iterator.propTypes = {
  iterate: React.PropTypes.array.isRequired,
  children: React.PropTypes.element.isRequired,
  name(props, propName, component){
    if(!propName in props){
      return new Error(`missing ${propName}`)
    }
    if(typeof props[propName] === String){
      return new Error(`${propName} shoule be string`)
    }
    if(props[propName].length <= 0){
      return new Error(`${propName} was too short`)
    }
    if(pluralize.plural(props[propName]) !== props[propName]){
      return new Error(`${propName} should be plural`)
    }
  }
}

export default Iterator;
