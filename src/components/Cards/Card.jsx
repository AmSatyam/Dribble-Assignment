import React from "react";

const Card = () => {
  const cardImage =
    "https://cdn.dribbble.com/userupload/15417891/file/original-a44c6657dbc2c4d6ba6debfaa5080c72.png?resize=752x&vertical=center";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      
      <h1 className="text-3xl font-bold mb-2">Unfold</h1>

      
      <button className="bg-gray-900 text-white px-6 py-2 rounded-full mb-8 hover:bg-gray-700">
        Get in touch
      </button>

      
      <div className="w-full flex flex-wrap justify-center gap-6">
       
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden w-full sm:w-60 md:w-72 lg:w-80"
          >
            <img
              src={cardImage}
              alt={`Card ${index + 1}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Card;
