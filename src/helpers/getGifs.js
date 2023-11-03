export const getGifs = async (category) => {
  const api_key = '8H5e165002wOohCGvqBfTE4scC5LCvIy';
  const queryString = `api_key=${api_key}&q=${category}&limit=10`;
  const url = `https://api.giphy.com/v1/gifs/search?${queryString}`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return(gifs);
};