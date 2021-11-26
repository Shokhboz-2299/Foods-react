import './FoodList.scss';
import FoodBox from "../FoodBox/FoodBox";
import { useContext } from 'react';
import { Content } from '../../context/orderContext';

// data
import foods from "../../assets/data/foods";
import { useParams } from 'react-router-dom';

function FoodList() {
  const { foodtype } = useParams();
  const {orderFoods, setOrderFoods} = useContext(Content);
  return (
    <>
      {foods.length > 0 && <ul className="food-list">
        {foods.filter((food) => {
          if (foodtype) {
            return (food.foodType === foodtype)
          }
          return food.foodType === 'hot-dishes'
        }
        ).map((food) => (
          <FoodBox
            foodImg={food.img}
            foodTitle={food.title}
            foodPrice={food.price}
            foodAvialable={food.avialable}
            key={food.id}
            onClick={(e) => {
              const foundFood = foods.find((ovqat) => ovqat.id === food.id) 

              foundFood.number = foundFood.number? foundFood.number + 1 : 1;

              setOrderFoods([...new Set([...orderFoods, foundFood])]);
              }
            }
            />
        ))}
      </ul>}
    </>

  )
}

export default FoodList;