import Row from './Row'
import styles from "./Row.module.css";
import Request from '../../utils/request';
import fetchdata from '../../utils/fetchData';

function RowList() {
   

  return (
    <>
      <section className={styles.all_movies_container}>
        {fetchdata?.map((properties, index) => (
          <>
            <Row
              title={properties.title}
              fetchUrl={properties.fetchUrl}
              isSmall={properties.isSmall}
              key={index}
            />
            
          </>
        ))}
      </section>
    </>
  );
}

export default RowList