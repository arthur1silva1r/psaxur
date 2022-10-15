import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'

const SearchPage = () => {

  const [id, setId] = useState('');
  const [obj, setObj] = useState('');

  useEffect(() => {
    requestFunc();
  })

  const onHandleChange = (target) => {
    const { value } = target;
    setId(value);
  }

  const requestFunc = async () => {
    const options = {
      method: 'GET',
    };

    const request = await fetch(`http://testapp.axreng.com:3000/crawl/${id}`, options);
    setObj(request.json().id);

  return (
    <div>
      <Navbar/>
      <h1 className='title1'>PESQUISAR POR ID</h1>
      <input onChange={(event) => {onHandleChange(event.target)}}/>
      <button type="button" onClick={requestFunc}>Pesquisar</button>
      {obj}
    </div>
    );
  };
}

export default SearchPage;
