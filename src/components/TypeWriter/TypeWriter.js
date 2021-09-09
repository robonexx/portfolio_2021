import React, { useState, useEffect } from "react";
const words = ["Inspiration... leads to","Creativity... ", "Creative minds solve the problems of our future"];

export default function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && 
        index !== words.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 200 : subIndex === words[index].length ? 100 :
                100, parseInt(Math.random() * 10)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 400);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1>
         {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
    </>
  );
}
