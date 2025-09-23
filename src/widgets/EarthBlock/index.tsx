import { Title } from '../../shared/ui/Title';
import { ArtMenu } from '../ArtMenu';
import styles from './../../styles/home.module.scss';
import cl from 'classnames';

const EarthBlock = () => {
  return (
    <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size="Large">
          Factions
        </Title>
        <ArtMenu />
    </section>
  );
};

export default EarthBlock;





