import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <div>{open && <p>The modal is open!!</p>}</div>
    </div>
  );
};

export default Modal;
