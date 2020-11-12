const fetchGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=5&api_key=RY4w2wcrqVDgMTc2L8eLe8WYp7n1M7rm`;
  try {
    const response = await fetch(url);
    const { data } = await response.json();

    return data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchGifs;
