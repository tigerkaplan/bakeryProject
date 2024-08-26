const DishCard = ({ project }) => {
    return (
        <div className="max-w-sm mx-auto rounded-3xl shadow-md overflow-hidden h-full flex flex-col border border-gray-300">
            <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="mb-2 text-2xl font-bold tracking-tighter">
                    {project.title}
                </h3>
                <p className="text-sm">{project.description}</p>
            </div>
        </div>
    );
};

export default DishCard;
