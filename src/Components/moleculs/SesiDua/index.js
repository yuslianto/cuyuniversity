import React, { useRef } from 'react'

export default function MultiRef() {
  const ref1 = useRef();
  const ref2 = useRef();
  //const { ref1, ref2 } = useRef()
  const backToTop = useRef();
  const ref = useRef({ ref1, ref2, backToTop });
  //const { ref1, ref2 } = ref.current;
  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };
  return (
    <div ref={backToTop}>
      <button onClick={() => goTo(ref1.current)}>Link Pertama</button>
      <button onClick={() => goTo(ref2.current)}>Link Kedua</button>
      <img
        src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
        alt="example"
      />
      <img
        src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
        alt="example"
      />

      <h1 ref={ref1}>INI ADALAH LINK PERTAM</h1>
      <button onClick={() => goTo(backToTop.current)}>Kembali Ke atas</button>
      <img
        src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
        alt="example"
      />
      <img
        src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
        alt="example"
      />
      <h1 ref={ref2}>INI ADALAH LINK KEDUA</h1>
      <button onClick={() => goTo(backToTop.current)}>Kembali Ke atas</button>
      <img
        src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
        alt="example"
      />
      <img
        src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
        alt="example"
      /></div>
  )
}
