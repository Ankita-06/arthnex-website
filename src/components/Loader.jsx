import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
  let prog = 0;

  const fill = setInterval(() => {
    prog += Math.random() * 25;

    if (prog >= 100) {
      prog = 100;
      clearInterval(fill);

      setTimeout(() => {
        setDone(true);
      }, 300);
    }

    setProgress(prog);
  }, 120);

  return () => clearInterval(fill);
}, []);

  // useEffect(() => {
  //   let prog = 0;
  //   const fill = setInterval(() => {
  //     prog += Math.random() * 25;
  //     if (prog >= 100) {
  //       prog = 100;
  //       clearInterval(fill);
  //     }
  //     setProgress(prog);
  //   }, 120);

  //   const onLoad = () => {
  //     setTimeout(() => {
  //       setProgress(100);
  //       setTimeout(() => setDone(true), 300);
  //     }, 400);
  //   };

  //   window.addEventListener('load', onLoad);
  //   return () => {
  //     clearInterval(fill);
  //     window.removeEventListener('load', onLoad);
  //   };
  // }, []);

  return (
    <div id="loader" className={done ? 'done' : ''}>
      <div className="loader-logo">Arthnex</div>
      <div className="loader-bar">
        <div className="loader-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Loader;
