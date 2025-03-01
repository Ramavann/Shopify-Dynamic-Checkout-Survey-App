import { useEffect, useState } from 'react';
export default function Dashboard() {
  const [responses, setResponses] = useState([]);
  
  useEffect(() => {
    fetch('/api/survey/responses').then(res => res.json()).then(data => setResponses(data));
  }, []);
  
  return (
    <div>
      <h1>Survey Responses</h1>
      {responses.map((response, index) => (
        <p key={index}>{response.answer}</p>
      ))}
    </div>
  );
}
