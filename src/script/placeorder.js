import { meals } from "./data.js";

const urlParams = new URLSearchParams(window.location.search);
const mealId = Number(urlParams.get("id"));
const mealDetails = meals.find((meal) => meal.id === mealId);

let meal_detail = document.querySelector(".meal_detail");

if (mealDetails) {
  console.log("Meal found:", mealDetails);
} else {
  meal_detail.innerHTML = "meal not found";
}
