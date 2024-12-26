import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBucket } from '@fortawesome/free-solid-svg-icons';  // Import the icon

// Define the type for the props
interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <>
    <div className="flex justify-center items-center space-x-2">
        <h1 className="uppercase">{props.text}</h1>
        <FontAwesomeIcon icon={faBucket} />
    </div>
    </>
  );
}

export default Heading;
