import React from 'react';
import JSONPretty from 'react-json-pretty';

const JsonHighlighter = ({ data }) => {
    
  

  return (
    <div>
      <style jsx global>{`
        .json-pretty {
          font-size: 12px;
          font-family: 'Courier New', monospace;
          background: 'transparent';
        }   
      `}</style>
    <pre>

      <JSONPretty id="json-pretty" data={data}></JSONPretty>
    </pre>
    </div>
  );
};

export default JsonHighlighter;