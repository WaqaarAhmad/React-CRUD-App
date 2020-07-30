import React from 'react';
//import "../../../App.css";



const Header = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-1"><i class="material-icons brand-icon">fastfood</i>Recipe App</h1>

            <div class="input-group w-50 mx-auto">
                <input type="text" class="form-control" placeholder="Search Any Recipe" />
                    <div class="input-group-append">
                        <button className = "btn btn-dark">Search Recipe</button>
                    </div>
            </div>

            </div>
    );
};

export default Header;