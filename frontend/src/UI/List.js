import React, { Component } from 'react'

const ListComponent = (ItemComponent, data) => {
  return class ListItemComponent extends Component {
    render() {
      console.log("ListItemComponent", data);
      return (
         <div>
           {
             data.map((datum) => (
                 <div key={datum.id}>
                   <ItemComponent post={datum} {...this.props} />
                 </div>
             ))
           }
         </div>
      );
    }
  }
}

export default ListComponent;
