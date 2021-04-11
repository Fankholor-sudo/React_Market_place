import React,{Component} from 'react';

class Category extends Component{
    categoryName = this.props.category;
    render() {
        return  <div className="category">
                    <span>{this.categoryName}</span>
                    <button><a href="#">View more</a></button>
                </div>
    }
}

export default Category;