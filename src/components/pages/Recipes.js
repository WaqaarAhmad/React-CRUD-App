import React from 'react';


const Recipes = (props) => {
    const {recipes} = props;
    return(
        <div className="row">
            {
                recipes.map(recipe =>(
                    <div className = "col-md-3">
                        <div className = "card">
                            <img src={recipe.recipe.image} className="img-fluid" />
                            <div className="card-body">
                                <h5>
                                    {recipe.recipe.label}
                                </h5>
                                
                            </div>
                        </div>
                    </div>

                ))
            }

        </div>
        
    );
};

export default Recipes;