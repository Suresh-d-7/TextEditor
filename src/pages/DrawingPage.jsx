import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';

const DrawingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div>
      <h2>Drawing Canvas</h2>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Draw here!" x={50} y={50} fontSize={30} />
        </Layer>
      </Stage>
    </div>
  );
};

export default DrawingPage;
