import axios from "axios";
import { useEffect, useState } from "react";

function CompleteLists() {

    const [listsComplete, setListsComplete] = useState([])


    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                setListsComplete(res.data.categories)

            })
            .catch(err => {
                alert(err)
            })

    }, [])


    // console.log('ci sono')
    return (
        <>
            <h2 className="title-lists">Complete list</h2>
            <div className="container-list">
                {listsComplete.map(({ idCategory, strCategory, strCategoryDescription, strCategoryThumb }) => (
                    <div key={idCategory} className="category-card">
                        <h2 className="category-title">{strCategory}</h2>
                        <p className="category-description">{strCategoryDescription}</p>
                        <div className="category-image-container-lists">
                            <img className="category-image-lists" src={strCategoryThumb} alt="cibo" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )



}

export default CompleteLists