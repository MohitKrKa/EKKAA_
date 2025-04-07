import React, { useRef, useEffect, useState } from "react";

const ChildComponent = () => {
  const childRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (childRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = childRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    const child = childRef.current;
    if (child) {
      child.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (child) {
        child.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
    //   ref={childRef}
      className="relative h-[300vh] w-full bg-blue-50 border-2 border-black overflow-hidden"
    >
      <p>Child Component Content</p>
    </div>
  );
};

export default ChildComponent;
