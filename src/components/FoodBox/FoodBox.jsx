import './FoodBox.scss';

function FoodBox({foodImg, foodTitle, foodPrice, foodAvialable, onClick}) {
  return (
    <li className="foodbox" onClick={onClick} >
      <img className="foodbox__img" src={foodImg} alt="Food" width="150" height="150" />
      <h3 className="foodbox__title">{foodTitle}</h3>
      <p className="foodbox__price">$ {foodPrice}</p>
      <p className="foodbox__available">{foodAvialable} Bowls avialable</p>
    </li>
  )
}

export default FoodBox;