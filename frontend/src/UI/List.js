import React, { Component } from 'react'

const ListComponent = (ItemComponent, data) => {
  return class ListItemComponent extends Component {
    render() {
      console.log("ListItemComponent", data);
      return (
         <div className="row">
           {
             data.map((datum) => (
                 <div key={datum.id} className="col-9 col-lg-11">
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
