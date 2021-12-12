export const getGifs = async (category) => {
  let url = "https://api.giphy.com/v1/gifs/search?api_key=";
  let apiKey = "Z4PAQTsExKW2vumTYlaLJ3pKdZ2Ksffw"; //api_key=Z4PAQTsExKW2vumTYlaLJ3pKdZ2Ksffw&q=dog&limit=25&offset=0&rating=g&lang=en
  let sentencia = `${url}${apiKey}&q=${category}&limit=12&offset=0&rating=g&lang=en`; //con limit=12 limitamos que solo nos mande 12 elementos
  const resp = await fetch(sentencia);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  console.log(gifs);
  return gifs;
};
