import React from 'react';
//import "../../../App.css";



const Header = props => {
    return (
        <div className="jumbotron">
            <h1 className="display-1"><i className="material-icons brand-icon">fastfood</i>Recipe App</h1>

            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search Any Recipe..."
                value = {props.search}
                onChange = {props.onInputChange} />
                    <div className="input-group-append">
                        <button className = "btn btn-dark">Search Recipe</button>
                    </div>
            </div>

            </div>
    );
};

export default Header;