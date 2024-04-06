"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";

interface Props {
  content: React.ReactNode;
}

function Modal({ content }: Props) {
  const { closeModal } = useGlobalState();
  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}></div>
      {content}
    </div>
  );
}

export default Modal;
