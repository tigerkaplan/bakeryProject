import PropTypes from 'prop-types';
import { useState } from 'react';
import { toggleFavoriteId } from '../utils/favorites';

const DishCard = ({ project, favorite }) => {
    const [isFavorited, setIsFavorited] = useState(favorite || false);

    const toggleFavorite = () => {
        setIsFavorited(toggleFavoriteId(project.id));
    };

    return (
        <div className="max-w-sm mx-auto rounded-3xl shadow-md overflow-hidden h-full flex flex-col border border-gray-300">
            <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="mb-2 text-2xl font-bold tracking-tighter">
                    {project.title}
                </h3>
                <p className="text-sm">{project.description}</p>
                <button
                    onClick={toggleFavorite}
                    type="button"
                    aria-pressed={isFavorited}
                    className={`mt-4 rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    {isFavorited ? '❤️ Favorited' : '🤍 Favorite'}
                </button>
            </div>
        </div>
    );
};

DishCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    favorite: PropTypes.bool,
};

export default DishCard;
