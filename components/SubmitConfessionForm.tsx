export default function SubmitConfessionForm() {
  return (
    <form className="panel grid">
      <h2 style={{ marginTop: 0 }}>New Konfession</h2>
      <select>
        <option>Select Avenue</option>
        <option>Heartlines</option>
        <option>Parent Time</option>
        <option>Spiritual Lane</option>
      </select>
      <select>
        <option>Anonymous</option>
        <option>Named</option>
      </select>
      <select>
        <option>Advice</option>
        <option>Support</option>
        <option>Shared Experience</option>
      </select>
      <input placeholder="Title" />
      <textarea placeholder="Say what needs to be said." rows={8} />
      <button className="btn btn-primary" type="submit">Publish</button>
    </form>
  );
}
