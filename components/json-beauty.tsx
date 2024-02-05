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
      <JSONPretty id="json-pretty" data={data}></JSONPretty>
    </div>
  );
};

export default JsonHighlighter;