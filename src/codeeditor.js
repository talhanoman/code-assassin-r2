import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp'
import StudentHeader from './components/student/header';

function CodeEditor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <div className='main-wrapper'>
      <StudentHeader activeMenu={'Code Editor'} />
      <CodeMirror value={value} theme={'dark'} height="800px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
    </div>
  )
}
export default CodeEditor;
