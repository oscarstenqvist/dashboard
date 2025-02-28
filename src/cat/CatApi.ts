const url = "https://cataas.com/cat/says/Bloober%20Cat%20Service";
export const getCat = async (width: number, height: number) => {
  const response = await fetch(url + "?json=true&width=" + width + "&height=" + height + "&");
  const data = await response.json();
  return data.url;
}