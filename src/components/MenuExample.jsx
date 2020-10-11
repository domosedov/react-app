import React, { useEffect, useState, useRef } from "react";

const Menu = ({ children, show }) => {
  const divRef = useRef(null);
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        ref={divRef}
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0.2s` }}
        onAnimationEnd={onAnimationEnd}
      >
        <div>
          {children}
        </div>
      </div>
    )
  );
};

export default Menu;
