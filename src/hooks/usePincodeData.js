import { useState, useEffect } from 'react';
import axios from 'axios';

const usePincodeData = (pincode) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (pincode) {
      axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }
  }, [pincode]);

  return data;
};

export default usePincodeData;
