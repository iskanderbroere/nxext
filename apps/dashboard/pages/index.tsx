import React from 'react';
import { Cats, fetchCats } from "@nxext/cats";
import styles from './index.module.css';

export async function getServerSideProps() {
  const initialCatFacts = await fetchCats()
  return {
    props: { initialCatFacts }, // will be passed to the page component as props
  }
}

export const Index = ({ initialCatFacts}) => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className={styles.page}>
      <Cats initialCatFacts={initialCatFacts} />
    </div>
  );
};

export default Index;
