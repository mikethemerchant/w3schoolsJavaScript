
const url = 'https://api.signal-fire.cloud/api/v1/sfcloud/group/all/'

const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  getData();


