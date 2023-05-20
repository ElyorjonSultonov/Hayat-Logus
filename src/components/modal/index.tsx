import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-circle.svg";
interface PortalProps {
  children: ReactNode;
  close: () => void;
  styles?: React.CSSProperties;
  title?: string;
}

const Modal: React.FC<PortalProps> = ({ children, close, styles, title }) => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    throw new Error("Could not find portal root element!");
  }
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <div onClick={close} className={classes.shadow} />
      <div style={styles} className={classes.content}>
        <div className={classes.header}>
          <h3 className={classes.title}>{title}</h3>
          <button className={classes.closeButton} onClick={close}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
