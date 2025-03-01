export default function SurveyForm({ submitSurvey }) {
    return (
      <form onSubmit={submitSurvey}>
        <label>How did you hear about us?</label>
        <input type="text" name="answer" required />
        <button type="submit">Submit</button>
      </form>
    );
  }