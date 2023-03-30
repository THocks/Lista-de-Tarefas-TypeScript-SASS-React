import * as React from 'react';
import styles from './Modal.module.sass'

export interface IAppProps {
    children: React.ReactNode
}

export default function Modal ({children}: IAppProps) {

  const closeModal = (e:React.MouseEvent):void =>{

    const modal = document.querySelector('#modal')
    modal!.classList.add('modalHide')
  }

  return (
    <div id='modal' className='modalHide' >
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
         {children}
      </div>
    </div>
  );
}
