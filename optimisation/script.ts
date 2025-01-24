import data from './input/large.json';


const access = (key: string) => {
    const value = data[key] as Activity;
    console.log(value);
  };

