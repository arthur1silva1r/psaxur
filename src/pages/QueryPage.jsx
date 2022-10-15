import { useState } from "react";
import Navbar from '../components/Navbar'

const QueryPage = () => {

  const [keyList, setKey] = useState(JSON.parse(localStorage.getItem('arrayIds')));

  const onLoad = () => {
    const arrayKeys = [];
    keyList.forEach((key) => {
      arrayKeys.push(`<li>${key.id}: ${key.keyword}</li>`);
    });

    return arrayKeys; 
  } 

  return (
    <>
      <div id='query-list'>
        <Navbar />
        <h1>LISTA DE PESQUISAS</h1>
        { onLoad() }
      </div>
    </>
  );
};

export default QueryPage;
