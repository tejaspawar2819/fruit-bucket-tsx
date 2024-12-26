import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBucket } from "@fortawesome/free-solid-svg-icons";
import CardComp from "./Card";

interface Fruit {
  fruitName: string;
  fruitImage: string;
}

interface AccordionProps {
  accordionHeading: string;
  isCart: boolean;
  fruits: Fruit[];
  onAddToBucket: (fruit: Fruit) => void;
  onRemoveFromBucket: (fruit: Fruit) => void;
  bucketFruits: Fruit[];
}

const Accordion: React.FC<AccordionProps> = ({ accordionHeading, isCart, fruits, onAddToBucket, onRemoveFromBucket, bucketFruits }) => {
  return (
    <div id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          <span className="flex items-center">
            {isCart ? (
              <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
            ) : (
              <FontAwesomeIcon icon={faBucket} className="mr-2" />
            )}
            <span className="capitalize">{accordionHeading}</span>
          </span>
          {isCart ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3">
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s14.3-32-32-32l-144 0 0-144z" />
            </svg>
          )}
        </button>
      </h2>
      <div id="accordion-open-body-1" className="p-5 border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900" aria-labelledby="accordion-open-heading-1">
        {fruits.length > 0 ? (
          fruits.map((fruit) => (
            <div key={fruit.fruitName} className="w-full">
              <CardComp fruit={fruit} onAdd={onAddToBucket} onRemove={onRemoveFromBucket}
                isInBucket={bucketFruits.some((item) => item.fruitName === fruit.fruitName)}
              />
            </div>
          ))
        ) : (
          <p>No fruits available</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
