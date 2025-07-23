import styles from './AboutSection.module.css';

interface AboutCardProps {
  image: string;
  text?: string;
  imagePosition: 'left' | 'right';
  customWidth?: string;
}

export function AboutCard({ image, text, imagePosition, customWidth }: AboutCardProps) {
  return (
    <div className={`${styles.card} ${imagePosition === 'right' ? styles.reverse : ''}`}>
      <img 
        src={image} 
        className={styles.image}
        style={{ width: customWidth }} // aplica largura personalizada se passada
      />
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
