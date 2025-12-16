import styles from './Cat.module.scss';
import catVideo from '/Animated_Cat_Video_Generation.mp4';

export const Cat = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src={catVideo} type="video/mp4" />
      </video>
    </div>
  );
};
