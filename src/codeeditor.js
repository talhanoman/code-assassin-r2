import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp'
import StudentHeader from './components/student/header';
import { FaPlay } from "react-icons/fa";

function CodeEditor() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [lang, setLang] = useState('Cpp')
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  const handleRunCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/post/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: value,
          language: lang, // Adjust the language based on your server setup
          input,
        }),
      });

      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      setOutput(error.stderr)
      console.error('Error:', error.stderr);
    }
  };

  return (
    <div className='main-wrapper bg-secondary'>
      <StudentHeader activeMenu={'Code Editor'} />
      <div className="d-flex justify-content-between mb-2 bg-dark rounded p-2 ">
        <div className="col-12 w-25">
          <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="form-select" id="inlineFormSelectPref">
      <option value="Java">Java</option>
      <option value="Cpp">Cpp</option>
      <option value="Python">Python</option>
    </select>

        </div>
        <div>
          <button type="button" className="btn btn-success">Coding Sprint</button>
          <button type="button" onClick={handleRunCode} className="btn btn-success ms-2">
            <FaPlay className='text-white ' />
          </button>
        </div>
      </div>
      <div className="d-flex h-100">
        <div className="w-75 h-100">
          <CodeMirror value={value} theme={'dark'} height="800px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
        </div>
        <div className="w-25 h-100 d-flex flex-column p-4">


        <textarea
      type="text"
      disabled
      id="input"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="form-control flex-fill"
      aria-label="Input"
    ></textarea>

    <textarea
      type="text"
      disabled
      id="output"
      value={output}
      onChange={(e) => setOutput(e.target.value)}
      className="form-control flex-fill"
      aria-label="Output"
    ></textarea>

        </div>
      </div>
    </div>
  )
}
export default CodeEditor;
