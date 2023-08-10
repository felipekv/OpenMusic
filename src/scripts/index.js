/* Desenvolva sua lógica aqui ... */
import { firstRender } from "./render.js";
import { products, categories } from "./productsData.js";
import { categoryFilter, rangeFilter } from "./input.js";
import { themeMode } from "./theme.js";

themeMode ()

firstRender (products, categories)

categoryFilter(products, categories)

rangeFilter(products, categories)