import React from "react";

interface Fruit {
  fruitName: string;
  fruitImage: string;
}

interface CardProps {
  fruit: Fruit;
  onAdd: (fruit: Fruit) => void;   // Function to add fruit to the bucket
  onRemove: (fruit: Fruit) => void; // Function to remove fruit from the bucket
  isInBucket: boolean;  // Whether the fruit is currently in the bucket
}

const Card: React.FC<CardProps> = ({ fruit, onAdd, onRemove, isInBucket }) => {
  return (
    <div className="p-6 bg-slate-50 rounded-xl shadow-lg flex items-center gap-x-4 my-4">
      <div className="shrink-0">
        <img className="size-12 rounded-full" src={fruit.fruitImage} alt={fruit.fruitName} />
      </div>
      <div className="flex-grow">
        <div className="text-xl font-medium text-black">{fruit.fruitName}</div>
      </div>
      <div className="flex gap-x-2">
        {/* Add Button */}
        {!isInBucket && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 cursor-pointer text-green-500" onClick={() => onAdd(fruit)}>
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
          </svg>
        )}

        {/* Remove Button */}
        {isInBucket && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 cursor-pointer text-red-500" onClick={() => onRemove(fruit)}>
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Card;
