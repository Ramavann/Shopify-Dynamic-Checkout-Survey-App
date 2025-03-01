import { useState } from 'react';
export default function Survey() {
  const [answer, setAnswer] = useState('');
  
  const submitSurvey = async () => {
    await fetch('/api/survey/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: 'How did you hear about us?', answer })
    });
  };
  
  return (
    <div>
      <h1>Survey</h1>
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={submitSurvey}>Submit</button>
    </div>
  );
}