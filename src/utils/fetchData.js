export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': '0a41f37689msh79ba841f8d8aeeep18e0d5jsnc3e06c075c0d',
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText}. Details: ${errorDetails}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch data error:', error);
    throw error;
  }
};
