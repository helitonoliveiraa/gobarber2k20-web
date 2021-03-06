import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading: React.FC = () => (
  <div style={{ alignSelf: 'center' }}>
    <Loader
      type="Puff"
      color="#FF9000"
      height="5rem"
      width="5rem"
      timeout={0}
    />
  </div>
);

export default Loading;
