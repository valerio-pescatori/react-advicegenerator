import { FC, useEffect, useState } from "react";
import styles from "./Advice.module.css";
import dice from "./assets/icon-dice.svg";
import divider from "./assets/pattern-divider-desktop.svg";

interface IAdviceWrapper {
  slip: IAdvice;
}

interface IAdvice {
  id: number;
  advice: string;
}

const Advice: FC = () => {
  const [advice, setAdvice] = useState<IAdvice | null>(null);

  useEffect(() => {
    // IIFE to avoid return type error
    (async () => {
      let response: Response = await fetch("https://api.adviceslip.com/advice");
      let json: IAdviceWrapper = await response.json();
      setAdvice(json.slip);
    })();
  }, []);

  return (
    <div className={styles.container}>
      {/* Card */}
      <div className={styles.advice}>
        <h3 className={styles.adviceNumber}>Advice #{advice?.id}</h3>
        <h2>"{advice?.advice}"</h2>
        <img src={divider} alt="______________" />
        <div className={styles.adviceDice} onClick={() => window.location.reload()}>
          <img src={dice} alt="Dice" />
        </div>
      </div>
    </div>
  );
};

export default Advice;
