import styles from './ServiceSection.module.css';

interface FeatureCardProps {
  image: string;
  text: string;
  imagePosition: 'left' | 'right';
}

export function FeatureCard({ image, text, imagePosition}: FeatureCardProps) {
  const isRight = imagePosition === 'right';

  return (
    <div className={`${styles.backgroundgroup} ${isRight ? styles.reverse : ''}`}>
        <div className={`${styles.card} ${isRight ? styles.cardLeftRounded : styles.cardRightRounded}`}>
            <div className={styles.textBox}>
              <p className={styles.text}>{text}</p>
            </div>
        </div>
        <img 
            src={image}
            className={styles.image}
            alt=""
        />
    </div>
  );
}
