import React,{Component} from 'react';

class Category extends Component{
    categoryName = this.props.category;
    render() {
        return  <div className="category">
                    <h1>{this.categoryName}</h1>
                    <button>View more</button>
                </div>
    }
}

export default Category;