import React from 'react';

const Error = ({ mensaje }) => {
  return (
    <div className="red darken-4 error">
      {mensaje}
    </div>
  );
}

export default Error;