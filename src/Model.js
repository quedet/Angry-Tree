import { motion } from "framer-motion";

const Modal = ({ setModal, children }) => {
  console.log(children);

  return (
    <motion.div
      className="modal"
      id="modal"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.y > 300) {
          setModal(false);
        }
      }}
      exit={{ opacity: 0, y: "110%" }}
      initial={{ opacity: 0.5, y: "110%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ damping: 25, type: "spring" }}
    >
      <motion.div
        layoutId="modal_action"
        className="close-modal"
        onClick={() => setModal(false)}
      >
        Close
      </motion.div>
      <div className="modal-wrapper">
        <header className="modal-header">
          <h1>More Information</h1>
        </header>
        <section className="modal-content">{children}</section>
      </div>
    </motion.div>
  );
};

export default Modal;
