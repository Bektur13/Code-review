
export default function Home() {
  return (
    <main>
      <h1 className="text-5xl black flex items-center justify-center">Review your Code</h1>
      <select name="languages" id="langauges">
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="go">Go</option>
      </select>
      <textarea name="text" id=""></textarea>
      <button>Push</button>
      <div></div>
    </main>
  );
}
