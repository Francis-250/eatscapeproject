import { meals } from "./data.js";

const hero_meal = document.querySelector(".hero_meal");
const all_meals = document.querySelector(".all_meals");

const heroMealGenerate = () => {
  return meals
    .slice(0, 5)
    .map((meal) => {
      return `<a href="placeorder.html?id=${meal.id}" class="p-4 flex flex-col gap-3 shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-30">
            <img src="${meal.image}" alt="${meal.name}" class="w-full h-40 object-cover rounded-t-lg" />
            <div class="flex flex-col gap-2">
              <header class="text-xl mb-2 text-[#9acd32]">${meal.name}</header>
              <p class="text-lg">Price: ${meal.price}</p>
            </div>
            <div class="flex justify-end p-2">
    <button class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200">
      <i class="fa-solid fa-plus text-sm"></i>
    </button>
  </div>
          </a>`;
    })
    .join("");
};
hero_meal.innerHTML = heroMealGenerate();

const allMealGenerate = () => {
  return meals
    .map((meal) => {
      return `<a href="placeorder.html?id=${meal.id}" class="p-4 flex flex-col gap-3 shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-30">
            <img src="${meal.image}" alt="${meal.name}" class="w-full h-40 object-cover rounded-t-lg" />
            <div class="flex flex-col gap-2">
              <header class="text-xl mb-2 text-[#9acd32]">${meal.name}</header>
              <p class="text-lg">Price: ${meal.price}</p>
            </div>
            <div class="flex justify-end p-2">
    <button class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200">
      <i class="fa-solid fa-plus text-sm"></i>
    </button>
  </div>
          </a>`;
    })
    .join("");
};
all_meals.innerHTML = allMealGenerate();
