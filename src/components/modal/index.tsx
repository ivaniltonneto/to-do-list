import { IChildrenModal } from '../../interfaces';
import Div from './styles';

const Modal = ({ children }: IChildrenModal) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal');
    modal?.classList.add('hide');
  };
  return (
    <>
      <Div id="modal" className="hide">
        <div className="fade" onClick={closeModal}></div>
        <div className="modal">
          <h2>text modal</h2>
          {children}
        </div>
      </Div>
    </>
  );
};

export default Modal;
