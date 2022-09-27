import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>

};

const MOdalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>

};

const proralElement = document.getElementById('overlays')

const Modal = props => {
  return ( 
    <Fragment>
      {ReactDOM.createPortal(<Backrop />, proralElement)}
      {ReactDOM.createPortal(
        <MOdalOverlay>{props.children}</MOdalOverlay>,
        proralElement
      )}
    </Fragment>
  );
};

export default Modal;