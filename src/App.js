import "./styles.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React from "react";
import Items from "./Item";
import Modal from "./Model";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    if (isOpen) {
      setModal(false);
    }
  }, [modal, isOpen]);

  return (
    <div className="App">
      <AnimateSharedLayout>
        <AnimatePresence>
          {isOpen && (
            <div className="loading">
              <div className="loading-item">
                <motion.h3 layoutId="logo" onClick={() => setIsOpen(!isOpen)}>
                  Level Up Tutorials
                </motion.h3>
              </div>
              <motion.div exit={{ opacity: 0 }}>
                {/* <div className="loading-item">
                  <p>Is loading...</p>
                </div> */}
                <motion.div layoutId="header" className="loading-item">
                  <motion.div
                    style={{
                      backgroundColor: "#00FFFF",
                      height: 6,
                      width: 100
                    }}
                    animate={{ x: 100, y: -5 }}
                    initial={{ x: -100, y: -5 }}
                    transition={{ flip: Infinity, duration: 1.2 }}
                  />
                  <motion.div
                    style={{ backgroundColor: "#ED2939", height: 8, width: 20 }}
                    animate={{ x: 190, y: -10 }}
                    initial={{ x: -100, y: -10 }}
                    transition={{ flip: Infinity, duration: 1.2 }}
                  />
                  <motion.div
                    style={{
                      backgroundColor: "#FFFF00",
                      height: 4,
                      width: 200
                    }}
                    animate={{ x: 100, y: -5 }}
                    initial={{ x: -100, y: -5 }}
                    transition={{ flip: Infinity, duration: 1.5 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <motion.header layoutId="header" className="App-header">
          <div className="App-header-wrapper">
            <nav className="nav">
              <div className="nav-wrapper">
                <div className="nav-burger">
                  <motion.span
                    layoutId="logo"
                    onClick={() => setIsOpen(!isOpen)}
                    className="nav-burger-text"
                  >
                    Level Up Tutorials
                  </motion.span>
                </div>
                <div className="nav-menu">
                  <Items />
                </div>
              </div>
            </nav>
          </div>
        </motion.header>
        <main className="App-main--content">
          <div className="motion-animation">
            <h1>Animation</h1>
            <p>
              The animate prop can accept an object of values. When one of them
              changes, the motion component will automatically animate to the
              new state. The animation used can be configured using the
              transition prop.
            </p>
          </div>
          <div className="motion-animation">
            <h1>CSS variables</h1>
            <p>
              Motion can animate the value of CSS variables, and also read CSS
              variables as animation targets. #Using pre-defined CSS variables
              in animation HTML motion components can animate to and from CSS
              variables, as long as that variable is defined on a component
              ancestor.
            </p>
          </div>
        </main>
        <motion.footer className="App-footer">
          <AnimatePresence>
            {!modal && (
              <motion.div
                layoutId="modal_action"
                className="open-modal"
                onClick={() => setModal(true)}
              >
                Open
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {modal && (
              <Modal setModal={setModal}>
                <p>
                  Enim facilisis gravida neque convallis. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis volutpat est. Libero id
                  faucibus nisl tincidunt eget nullam. Ornare arcu dui vivamus
                  arcu. Porttitor eget dolor morbi non arcu. At varius vel
                  pharetra vel turpis nunc eget. Integer malesuada nunc vel
                  risus. Eu lobortis elementum nibh tellus molestie nunc.
                  Blandit cursus risus at ultrices. Pulvinar etiam non quam
                  lacus suspendisse faucibus interdum posuere. Pharetra magna ac
                  placerat vestibulum lectus mauris ultrices eros in. Orci
                  phasellus egestas tellus rutrum. Habitasse platea dictumst
                  vestibulum rhoncus est pellentesque elit. Mauris sit amet
                  massa vitae tortor condimentum lacinia.
                </p>
                <p>
                  Consectetur purus ut faucibus pulvinar elementum integer. Diam
                  sollicitudin tempor id eu nisl nunc mi. Fusce id velit ut
                  tortor pretium viverra suspendisse potenti. Sed faucibus
                  turpis in eu mi bibendum neque egestas. Eu feugiat pretium
                  nibh ipsum consequat nisl. Ullamcorper dignissim cras
                  tincidunt lobortis feugiat vivamus at augue. Viverra
                  adipiscing at in tellus integer feugiat scelerisque. Cras
                  semper auctor neque vitae tempus quam pellentesque nec. A diam
                  maecenas sed enim ut. Volutpat blandit aliquam etiam erat
                  velit scelerisque. Sed enim ut sem viverra. Risus pretium quam
                  vulputate dignissim suspendisse in est ante in. Id cursus
                  metus aliquam eleifend mi in nulla posuere.
                </p>
              </Modal>
            )}
          </AnimatePresence>
        </motion.footer>
      </AnimateSharedLayout>
    </div>
  );
}
