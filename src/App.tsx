import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Buckets from "./components/Accordion";
import AppleImg from "./assets/apple.jpg";
import BananaImg from "./assets/banana.png";
import LitchieImg from "./assets/litchie.jpg";
import PineappleImg from "./assets/pineapple.jpg";
import StrawberryImg from "./assets/strawberry.jpg";

export interface Fruit {
  fruitName: string;
  fruitImage: string;
}

export const fruitsData = [
  {
    fruitName: "Apple",
    fruitImage: AppleImg,
  },
  {
    fruitName: "Banana",
    fruitImage: BananaImg,
  },
  {
    fruitName: "Litchie",
    fruitImage: LitchieImg,
  },
  {
    fruitName: "Pineapple",
    fruitImage: PineappleImg,
  },
  {
    fruitName: "Strawberry",
    fruitImage: StrawberryImg,
  },
];

function App() {
  const [cartFruits, setCartFruits] = useState(fruitsData); // Initially all fruits are in the cart
  const [bucketFruits, setBucketFruits] = useState<Fruit[]>([]); // Initially no fruits in the bucket

  // Function to move a fruit from the cart to the bucket
  const moveToBucket = (fruit: Fruit) => {
    setCartFruits((prevCart) => prevCart.filter((item) => item.fruitName !== fruit.fruitName));
    setBucketFruits((prevBucket) => [...prevBucket, fruit]);
  };

  // Function to remove a fruit from the bucket
  const removeFromBucket = (fruit: Fruit) => {
    setBucketFruits((prevBucket) => prevBucket.filter((item) => item.fruitName !== fruit.fruitName));
    setCartFruits((prevCart) => [...prevCart, fruit]);
  };

  return (
    <>
      <div className="p-2 font-bold">
        <Heading text={"Bucket Game"} />
      </div>
      <div className="col-row grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        <div className="col p-4">
          <Buckets accordionHeading={"Cart"} isCart={true} fruits={cartFruits} onAddToBucket={moveToBucket} onRemoveFromBucket={removeFromBucket} bucketFruits={bucketFruits} />
        </div>
        <div className="col p-4">
          <Buckets accordionHeading={"Bucket"} isCart={false} fruits={bucketFruits} onAddToBucket={moveToBucket} onRemoveFromBucket={removeFromBucket} bucketFruits={bucketFruits} />
        </div>
      </div>
    </>
  );
}

export default App;
