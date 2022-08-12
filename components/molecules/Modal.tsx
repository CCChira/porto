import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

type Props = {
  children: JSX.Element | string;
};

const Modal: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState('block');
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`${isOpen} fixed top-0 left-0 z-10 h-full w-full overflow-auto rounded-md bg-black bg-opacity-40`}
    >
      <div className="my-[15%] mx-auto w-3/4 bg-white p-5">
        <div
          className={`${
            hovered ? 'bg-primary' : 'bg-white'
          } ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition duration-300 ease-in-out`}
          onClick={() => setIsOpen('hidden')}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className={`${
              hovered ? 'text-white' : 'text-primary'
            } text-2xl transition duration-300 ease-in-out`}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
