import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'

const RequestPage = () => {

  const [key, setKey] = useState('');
  const [obj, setObj] = useState({
    id: '',
    keyword: '',
  });

  useEffect(() => {
    requestFunc();
  })

  const onHandleChange = (target) => {
    const { value } = target;
    setKey(value);
  }

  const requestFunc = async () => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: {'keyword': JSON.stringify(key)},
    };

    const request = await fetch('http://testapp.axreng.com:3000/crawl', options);
    setObj({
      id: request.json().id,
      keyword: key,
    });
  }

  const saveSearch = () => {
    const arrayIds = JSON.parse(localStorage.getItem('arrayIds'));
    if (!arrayIds) {
      return localStorage.setItem('arrayIds', JSON.stringify([obj]));
    } 
    return localStorage.setItem('arrayIds', JSON.stringify([...arrayIds, obj]));
  }

  const callFuncs = async () => {
    await requestFunc();
    saveSearch();
  }

  return (
    <div>
      <Navbar/>
      <h1 className='title1'>SOLICITAÇÃO</h1>
      <input onChange={(event) => {onHandleChange(event.target)}}/>
      <button type="button" onClick={callFuncs}>Pesquisar</button>
    </div>
  );
};

export default RequestPage;
