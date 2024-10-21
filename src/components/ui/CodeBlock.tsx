import React, { useState } from 'react';

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className="relative bg-gray-800 text-white rounded-lg shadow-lg p-4">
      <pre className="whitespace-pre-wrap overflow-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-[#3d3d3d] hover:bg-[#525252] transition duration-150 ease-in-out focus:outline-none
           text-white font-bold py-1 px-3 rounded"
      >
        {copied ? '¡Copiado!' : 'Copiar'}
      </button>
    </div>
  );
};

export default CodeBlock;