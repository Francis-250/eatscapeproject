import { meals } from "./data.js";

const urlParams = new URLSearchParams(window.location.search);
const mealId = Number(urlParams.get("id"));
const mealDetails = meals.find((meal) => meal.id === mealId);

let meal_detail = document.querySelector(".meal_detail");

if (mealDetails) {
  meal_detail.innerHTML = `
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 p-6 flex flex-col items-center">
      <img src="${mealDetails.image}" alt="${mealDetails.name}" class="w-48 h-48 object-cover rounded-full shadow mb-4 border-4 border-[#9acd32]" />
      <h2 class="text-2xl font-bold text-[#9acd32] mb-2">${mealDetails.name}</h2>
      <p class="text-lg text-gray-700 mb-1"><span class="font-semibold">Category:</span> ${mealDetails.category}</p>
      <p class="text-lg text-gray-700 mb-1"><span class="font-semibold">Price:</span> <span class="text-green-600 font-bold">${mealDetails.price}</span></p>
      <p class="text-lg text-gray-700 mb-4"><span class="font-semibold">Delivery Time:</span> ${mealDetails.deliveryTime}</p>
      <button class="mt-4 px-6 py-2 bg-[#9acd32] text-white rounded-lg shadow hover:bg-[#7fae1a] transition">Order Now</button>
    </div>
  `;
} else {
  meal_detail.innerHTML = "meal not found";
}
