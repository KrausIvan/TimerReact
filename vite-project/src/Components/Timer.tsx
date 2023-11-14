import styles from './Timer.module.css';
import { useState, useEffect } from 'react';

export type TimerProps = {
    Title: string;
    Steps: number;
    Interval: number;
}

export const Timer:React.FC<TimerProps> = ({Title, Steps, Interval}) => {
    const [running, setRunning] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const [caption, setCaption] = useState<string>("Stop!");

    
    useEffect(() => {
        let myInterval: number | null = null;
        if (running) {
            myInterval = setInterval(() => {
                setCount(prevCount => prevCount + Steps);
            }, Interval);
            setCaption("Stop!");   
        } 
        
        else {
            if(myInterval)
                clearInterval(myInterval);
            setCaption("Start!");
        }

        return () => {
            if (myInterval) clearInterval(myInterval);
        };
    }, [running, Steps, Interval]);


    return (
      <div className={styles['timer']}>
        <h1 className={styles['timer__title']}>{Title}</h1>
        <p className={styles['timer__count']}>{count.toFixed(1)}</p>
        <button className={styles['timer__button']} onClick={() => setRunning(x => !x)}>{caption}</button>
      </div>
    )
  }
  
