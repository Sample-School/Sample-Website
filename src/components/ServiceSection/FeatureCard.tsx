import styles from './ServiceSection.module.css';

interface FeatureCardProps {
  image: string;
  text: string;
  imagePosition: 'left' | 'right';
  customWidth?: string;
}

export function FeatureCard({ image, text, imagePosition, customWidth }: FeatureCardProps) {
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
            style={{ width: customWidth || '10%' }}
            alt=""
        />
    </div>
  );
}
