const getStartDate = () => {
  let date = new Date();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return yyyy + '-' + mm + '-01'
}

const getEndDate = () => {
  let date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd
}


export const getListings = async () => {
  const apiKey = process.env.VUE_APP_NASA_KEY;
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${getStartDate()}&end_date=${getEndDate()}`);

  if (!response.ok) {
    throw Error('Error fetching listings');
  }

  const listings = await response.json();

  return listings;
}