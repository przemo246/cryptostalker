import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return [isOpen, toggleIsOpen];
};

export default useModal;
