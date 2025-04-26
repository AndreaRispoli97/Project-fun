import axios from "axios";
import { useEffect, useState } from "react";

function RandomFood() {
    const [foodRandom, setFoodRandom] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const fetchRandomMeal = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => {
                const meal = res.data.meals[0];
                setFoodRandom([meal]);

                const newIngredients = [];
                for (let index = 1; index <= 20; index++) {
                    const item = meal[`strIngredient${index}`];
                    if (item) {
                        newIngredients.push(item);
                    }
                }
                setIngredients(newIngredients);
            })
            .catch(err => {
                alert(err);
            });
    };

    useEffect(() => {
        fetchRandomMeal();
    }, []);

    return (
        <>
            <h2 className="title">What are we eating today??</h2>
            <div className="random-food-container">
                {foodRandom.map(({ idMeal, strMeal, strArea, strInstructions, strMealThumb }) => (
                    <div key={idMeal} className="meal-card">
                        <h2 className="meal-name">{strMeal}</h2>
                        <h3 className="meal-area">{strArea}</h3>
                        <p className="meal-instructions">{strInstructions}</p>
                        <ul className="ingredient-list">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <div className="meal-image-container">
                            <img className="meal-image" src={strMealThumb} alt="RandomFood" />
                        </div>
                    </div>
                ))}
                <div className="button-container">
                    <button className="random-button" onClick={fetchRandomMeal}>New Recipe!</button>
                </div>
            </div>
        </>
    );
}

export default RandomFood;
