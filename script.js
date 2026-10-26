const recipes = [
  {
    id: 1,
    title: "Avocado Toast",
    description:
      "Creamy avocado, zesty lemon, and a sprinkle of chili on crisp sourdough.",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",
    category: "Breakfast",
    dietaryTags: ["Vegetarian", "Vegan"],
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "1 tsp lemon juice",
      "Chili flakes and sea salt",
      "Microgreens, to serve",
    ],
    instructions: [
      "Toast the sourdough until golden and crisp.",
      "Mash avocado with lemon juice, salt, and chili flakes.",
      "Spread generously over toast and finish with microgreens.",
    ],
    prepTime: 5,
    cookTime: 10,
    difficulty: "Easy",
    servings: 2,
  },
  {
    id: 2,
    title: "Miso Ramen",
    description:
      "A deeply savory bowl of noodles, mushrooms, greens, and silky miso broth.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
    category: "Dinner",
    dietaryTags: ["Vegetarian"],
    ingredients: [
      "4 cups vegetable stock",
      "3 tbsp white miso",
      "2 portions ramen noodles",
      "1 cup shiitake mushrooms",
      "2 pak choi",
      "2 soft-boiled eggs",
    ],
    instructions: [
      "Simmer stock with mushrooms for 10 minutes.",
      "Whisk miso with a little warm broth, then stir it back into the pot.",
      "Cook noodles separately, add pak choi, and serve with egg.",
    ],
    prepTime: 15,
    cookTime: 20,
    difficulty: "Medium",
    servings: 2,
  },
  {
    id: 3,
    title: "Berry Chia Parfait",
    description:
      "Layers of creamy coconut chia pudding, berries, and crunchy granola.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85",
    category: "Breakfast",
    dietaryTags: ["Vegan", "Gluten-Free"],
    ingredients: [
      "1 cup coconut milk",
      "3 tbsp chia seeds",
      "1 tsp maple syrup",
      "1 cup mixed berries",
      "1/3 cup gluten-free granola",
    ],
    instructions: [
      "Stir coconut milk, chia, and maple syrup together.",
      "Chill for at least 3 hours until thickened.",
      "Layer pudding, berries, and granola in glasses.",
    ],
    prepTime: 10,
    cookTime: 0,
    difficulty: "Easy",
    servings: 2,
  },
  {
    id: 4,
    title: "Citrus Salmon Bowl",
    description:
      "Flaky roasted salmon meets bright citrus, fluffy rice, and crunchy greens.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    category: "Lunch",
    dietaryTags: ["Gluten-Free"],
    ingredients: [
      "2 salmon fillets",
      "2 cups cooked jasmine rice",
      "1 orange, segmented",
      "2 cups arugula",
      "1 tbsp olive oil",
      "Lime and sesame seeds",
    ],
    instructions: [
      "Season salmon with olive oil, salt, and pepper.",
      "Roast at 400°F for 12–15 minutes.",
      "Build bowls with rice, greens, citrus, and salmon. Finish with lime.",
    ],
    prepTime: 15,
    cookTime: 15,
    difficulty: "Easy",
    servings: 2,
  },
  {
    id: 5,
    title: "Garden Pasta",
    description:
      "A colorful weeknight pasta tossed with roasted vegetables and basil.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    category: "Dinner",
    dietaryTags: ["Vegetarian"],
    ingredients: [
      "8 oz rigatoni",
      "1 zucchini, sliced",
      "1 bell pepper, chopped",
      "1 cup cherry tomatoes",
      "2 garlic cloves",
      "Fresh basil and parmesan",
    ],
    instructions: [
      "Roast vegetables with garlic and olive oil at 425°F for 20 minutes.",
      "Cook pasta until al dente, reserving 1/2 cup pasta water.",
      "Toss pasta with vegetables, pasta water, basil, and parmesan.",
    ],
    prepTime: 15,
    cookTime: 25,
    difficulty: "Easy",
    servings: 4,
  },
  {
    id: 6,
    title: "Dark Chocolate Mousse",
    description:
      "A light, rich chocolate mousse made with just a handful of ingredients.",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=85",
    category: "Dessert",
    dietaryTags: ["Vegetarian", "Gluten-Free"],
    ingredients: [
      "5 oz dark chocolate",
      "3 eggs, separated",
      "2 tbsp sugar",
      "1/2 cup heavy cream",
      "Pinch of sea salt",
    ],
    instructions: [
      "Melt chocolate gently over a double boiler and cool slightly.",
      "Whisk yolks into chocolate. Whip whites with sugar to soft peaks.",
      "Fold whites and whipped cream into chocolate. Chill 2 hours.",
    ],
    prepTime: 20,
    cookTime: 5,
    difficulty: "Medium",
    servings: 4,
  },
  {
    id: 7,
    title: "Herby Falafel Pita",
    description:
      "Crisp baked falafel, fresh herbs, and tahini tucked into warm pita.",
    image:
      "https://images.unsplash.com/photo-1593001874117-c99c800e3ebc?auto=format&fit=crop&w=900&q=85",
    category: "Lunch",
    dietaryTags: ["Vegan"],
    ingredients: [
      "1 can chickpeas",
      "1/2 cup parsley",
      "2 garlic cloves",
      "1 tsp cumin",
      "4 pita breads",
      "Tahini, cucumber, and tomato",
    ],
    instructions: [
      "Pulse chickpeas, herbs, garlic, cumin, and salt in a food processor.",
      "Shape into balls and bake at 400°F for 20 minutes, turning once.",
      "Fill warm pitas with falafel, vegetables, and tahini.",
    ],
    prepTime: 20,
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
  },
  {
    id: 8,
    title: "Cinnamon Apple Oats",
    description:
      "Warm, comforting oats topped with caramelized apples and toasted walnuts.",
    image:
      "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=85",
    category: "Breakfast",
    dietaryTags: ["Vegetarian"],
    ingredients: [
      "1 cup rolled oats",
      "2 cups milk of choice",
      "1 apple, diced",
      "1 tsp cinnamon",
      "1 tbsp maple syrup",
      "Walnuts",
    ],
    instructions: [
      "Simmer oats and milk for 5 minutes, stirring often.",
      "Cook apple with cinnamon and maple syrup until tender.",
      "Spoon oats into bowls and top with apples and walnuts.",
    ],
    prepTime: 5,
    cookTime: 10,
    difficulty: "Easy",
    servings: 2,
  },
  {
    id: 9,
    title: "Crispy Tofu Tacos",
    description:
      "Golden tofu, avocado crema, and crunchy slaw in soft corn tortillas.",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85",
    category: "Dinner",
    dietaryTags: ["Vegan", "Gluten-Free"],
    ingredients: [
      "14 oz firm tofu",
      "8 corn tortillas",
      "1/2 cabbage, shredded",
      "1 avocado",
      "Lime juice",
      "Smoked paprika",
    ],
    instructions: [
      "Press tofu dry, cube it, and toss with paprika and oil.",
      "Pan-fry until crisp on all sides.",
      "Mash avocado with lime. Fill tortillas with slaw, tofu, and crema.",
    ],
    prepTime: 20,
    cookTime: 15,
    difficulty: "Easy",
    servings: 4,
  },
  {
    id: 10,
    title: "Honey Almond Granola",
    description:
      "A golden, crunchy granola for breakfast bowls, yogurt, or snacking.",
    image:
      "https://images.unsplash.com/photo-1517093602195-b40af9688b46?auto=format&fit=crop&w=900&q=85",
    category: "Snacks",
    dietaryTags: ["Vegetarian", "Gluten-Free"],
    ingredients: [
      "3 cups rolled oats",
      "1 cup almonds",
      "1/3 cup honey",
      "3 tbsp coconut oil",
      "1 tsp cinnamon",
      "Dried cranberries",
    ],
    instructions: [
      "Mix oats, almonds, cinnamon, honey, and coconut oil.",
      "Spread on a lined tray and bake at 325°F for 25 minutes.",
      "Cool completely before stirring through cranberries.",
    ],
    prepTime: 10,
    cookTime: 25,
    difficulty: "Easy",
    servings: 8,
  },
  {
    id: 11,
    title: "Caprese Skewers",
    description:
      "A fresh, no-cook snack of tomatoes, mozzarella, basil, and balsamic.",
    image:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=85",
    category: "Snacks",
    dietaryTags: ["Vegetarian", "Gluten-Free"],
    ingredients: [
      "24 cherry tomatoes",
      "24 mini mozzarella balls",
      "Fresh basil leaves",
      "2 tbsp balsamic glaze",
      "Olive oil and pepper",
    ],
    instructions: [
      "Thread tomato, basil, and mozzarella onto small skewers.",
      "Arrange on a platter and drizzle with olive oil.",
      "Finish with balsamic glaze and cracked pepper.",
    ],
    prepTime: 15,
    cookTime: 0,
    difficulty: "Easy",
    servings: 6,
  },
  {
    id: 12,
    title: "Lemon Herb Chicken",
    description: "Juicy pan-seared chicken with a bright lemon herb sauce.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    category: "Dinner",
    dietaryTags: ["Gluten-Free"],
    ingredients: [
      "4 chicken breasts",
      "2 lemons",
      "3 garlic cloves",
      "Fresh parsley",
      "2 tbsp butter",
      "Olive oil",
    ],
    instructions: [
      "Season chicken and sear in olive oil until golden.",
      "Add garlic, lemon juice, and butter; cook until chicken is done.",
      "Rest for 5 minutes, then spoon over the pan sauce and garnish with parsley.",
    ],
    prepTime: 10,
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
  },
];
let state = {
  category: "All",
  diet: "All",
  search: "",
  favorites: loadFavorites(),
  view: "home",
};
const $ = (s) => document.querySelector(s),
  $$ = (s) => document.querySelectorAll(s);
function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem("recipehub-favorites") || "[]");
  } catch {
    return [];
  }
}
function saveFavorites() {
  localStorage.setItem("recipehub-favorites", JSON.stringify(state.favorites));
}
function updateFavoriteCount() {
  $("#favorite-count").textContent = state.favorites.length;
}
function isFavorite(id) {
  return state.favorites.includes(id);
}
function toggleFavorite(id) {
  state.favorites = isFavorite(id)
    ? state.favorites.filter((f) => f !== id)
    : [...state.favorites, id];
  saveFavorites();
  updateFavoriteCount();
  renderRecipes();
  if ($("#modal-backdrop").classList.contains("hidden") === false)
    openRecipeModal(id);
}
function renderFilters() {
  const cats = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snacks"];
  const diets = ["All", "Vegetarian", "Vegan", "Gluten-Free"];
  $("#category-filters").innerHTML = cats
    .map(
      (x) =>
        `<button class="filter-button ${state.category === x ? "active" : ""}" data-category="${x}">${x}</button>`,
    )
    .join("");
  $("#diet-filters").innerHTML = diets
    .map(
      (x) =>
        `<button class="filter-button ${state.diet === x ? "active" : ""}" data-diet="${x}">${x}</button>`,
    )
    .join("");
}
function filterRecipes() {
  const term = state.search.toLowerCase().trim();
  return recipes.filter(
    (r) =>
      (state.category === "All" || r.category === state.category) &&
      (state.diet === "All" || r.dietaryTags.includes(state.diet)) &&
      (!term ||
        [r.title, r.description, r.category, ...r.dietaryTags, ...r.ingredients]
          .join(" ")
          .toLowerCase()
          .includes(term)),
  );
}
function renderRecipeCard(r, index) {
  return `<article class="recipe-card" style="animation-delay:${index * 35}ms"><div class="card-image-wrap"><img class="card-image" src="${r.image}" alt="${r.title}" loading="lazy"><button class="favorite-button ${isFavorite(r.id) ? "saved" : ""}" data-favorite="${r.id}" aria-label="${isFavorite(r.id) ? "Remove" : "Save"} ${r.title} ${isFavorite(r.id) ? "from" : ""} favorites">${isFavorite(r.id) ? "♥" : "♡"}</button></div><div class="card-body"><div class="card-kicker"><span>${r.category}</span><span>${r.difficulty}</span></div><h3>${r.title}</h3><p class="card-description">${r.description}</p><div class="tag-list">${r.dietaryTags.map((t) => `<span class="tag">${t}</span>`).join("")}</div><div class="card-footer"><span class="recipe-meta">◷ ${r.prepTime + r.cookTime} min · ${r.servings} servings</span><button class="view-button" data-recipe="${r.id}">View recipe ↗</button></div></div></article>`;
}
function renderRecipes() {
  renderFilters();
  const list =
    state.view === "favorites"
      ? recipes.filter((r) => state.favorites.includes(r.id))
      : filterRecipes();
  $("#results-title").textContent =
    state.view === "favorites" ? "Your favorite recipes" : "Explore recipes";
  $("#results-count").textContent =
    `${list.length} ${list.length === 1 ? "recipe" : "recipes"}`;
  $("#recipe-grid").innerHTML = list.map(renderRecipeCard).join("");
  const empty = $("#empty-state");
  if (!list.length) {
    empty.classList.remove("hidden");
    $("#empty-title").textContent =
      state.view === "favorites"
        ? "No favorite recipes yet"
        : "No recipes found";
    $("#empty-text").textContent =
      state.view === "favorites"
        ? "Start exploring recipes and save the ones you love."
        : "Try searching for another recipe or ingredient.";
    $("#empty-action").textContent =
      state.view === "favorites" ? "Explore recipes" : "Clear search";
  } else empty.classList.add("hidden");
  updateFavoriteCount();
}
function openRecipeModal(id) {
  const r = recipes.find((x) => x.id === id);
  if (!r) return;
  $("#modal-content").innerHTML =
    `<div class="modal-hero"><img src="${r.image}" alt="${r.title}"><div class="modal-title-over"><span class="tag">${r.category}</span><h2 id="modal-title">${r.title}</h2></div></div><div class="modal-content-body"><p class="modal-description">${r.description}</p><div class="modal-stats"><div class="stat"><strong>${r.prepTime} min</strong><span>Prep time</span></div><div class="stat"><strong>${r.cookTime} min</strong><span>Cook time</span></div><div class="stat"><strong>${r.prepTime + r.cookTime} min</strong><span>Total time</span></div><div class="stat"><strong>${r.difficulty}</strong><span>Difficulty</span></div><div class="stat"><strong>${r.servings}</strong><span>Servings</span></div></div><div class="modal-columns"><div><h3>Ingredients</h3><ul class="ingredient-list">${r.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul></div><div><h3>How to make it</h3><ol class="instruction-list">${r.instructions.map((i) => `<li>${i}</li>`).join("")}</ol></div></div><button class="primary-button modal-save ${isFavorite(r.id) ? "saved" : ""}" data-modal-favorite="${r.id}">${isFavorite(r.id) ? "♥ Saved to favorites" : "♡ Save recipe"}</button></div>`;
  $("#modal-backdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  $("#modal-close").focus();
}
function closeRecipeModal() {
  $("#modal-backdrop").classList.add("hidden");
  document.body.style.overflow = "";
}
function clearFilters() {
  state.category = "All";
  state.diet = "All";
  state.search = "";
  $("#search-input").value = "";
  state.view = "home";
  $$(".nav-link").forEach((x) =>
    x.classList.toggle("active", x.dataset.view === "home"),
  );
  renderRecipes();
}
$("#search-input").addEventListener("input", (e) => {
  state.search = e.target.value;
  state.view = "home";
  renderRecipes();
});
$("#search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#explore").scrollIntoView({ behavior: "smooth" });
});
$("#category-filters").addEventListener("click", (e) => {
  if (e.target.dataset.category) {
    state.category = e.target.dataset.category;
    state.view = "home";
    renderRecipes();
  }
});
$("#diet-filters").addEventListener("click", (e) => {
  if (e.target.dataset.diet) {
    state.diet = e.target.dataset.diet;
    state.view = "home";
    renderRecipes();
  }
});
$("#clear-filters").addEventListener("click", clearFilters);
$("#empty-action").addEventListener("click", () =>
  state.view === "favorites" ? clearFilters() : clearFilters(),
);
$("#recipe-grid").addEventListener("click", (e) => {
  const fav = e.target.closest("[data-favorite]");
  const card = e.target.closest("[data-recipe]");
  if (fav) toggleFavorite(Number(fav.dataset.favorite));
  else if (card) openRecipeModal(Number(card.dataset.recipe));
});
$("#modal-content").addEventListener("click", (e) => {
  const b = e.target.closest("[data-modal-favorite]");
  if (b) toggleFavorite(Number(b.dataset.modalFavorite));
});
$("#modal-close").addEventListener("click", closeRecipeModal);
$("#modal-backdrop").addEventListener("click", (e) => {
  if (e.target === $("#modal-backdrop")) closeRecipeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !$("#modal-backdrop").classList.contains("hidden"))
    closeRecipeModal();
});
$$(".nav-link").forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const view = link.dataset.view;
    state.view = view === "favorites" ? "favorites" : "home";
    $$(".nav-link").forEach((x) => x.classList.toggle("active", x === link));
    if (view === "favorites") {
      $("#explore").scrollIntoView({ behavior: "smooth" });
    } else if (view === "explore")
      $("#explore").scrollIntoView({ behavior: "smooth" });
    renderRecipes();
  }),
);
$("#mobile-menu").addEventListener("click", () => {
  $("#mobile-menu").setAttribute(
    "aria-expanded",
    $("#mobile-menu").getAttribute("aria-expanded") !== "true",
  );
  $(".main-nav").classList.toggle("open");
});
renderRecipes();
