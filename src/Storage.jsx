import React, { useEffect ,useState} from 'react'

function Storage(id, initvalue) {
  const get = () => {
    const feed = JSON.parse(localStorage.getItem(id)) || JSON.parse(sessionStorage.getItem(id));
    return feed || initvalue;
  };
  const [topic, SetTopic] = useState(get());

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(topic));
    sessionStorage.setItem(id, JSON.stringify(topic));
  }, [id, topic]);
  return [topic, SetTopic];
}
    

export default Storage
