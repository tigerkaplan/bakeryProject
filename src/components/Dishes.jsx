import { useState } from "react";
import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    // Extract unique categories from the DISHES array
    const filters = [...new Set(DISHES.map((item) => item.category))];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            // Remove filter
            setSelectedFilters(selectedFilters.filter((e) => e !== selectedCategory));
        } else {
            // Add filter
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    // Filter the DISHES array based on the selected filters
    const filteredItems = selectedFilters.length
        ? DISHES.filter((dish) => selectedFilters.includes(dish.category))
        : DISHES;

    return (
        <section className="container mx-auto py-16 px-4" id="dishes">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter lg:text-4xl">
                Our Menu
            </h2>

            {/* Filter buttons */}
            <div className="mb-8 flex flex-wrap justify-center gap-4">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        onClick={() => handleFilterButtonClick(filter)}
                        className={`px-4 py-2 rounded border transition-colors duration-300 ${
                            selectedFilters.includes(filter)
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-gray-200 text-gray-700 border-gray-300'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Display dishes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {filteredItems.map((dish, index) => (
                    <DishCard
                        key={index}
                        project={dish}
                    />
                ))}
            </div>
        </section>
    );
};

export default Dishes;
