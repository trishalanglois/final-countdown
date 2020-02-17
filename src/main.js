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



console.log(getStartDate(), getEndDate())


// https://api.nasa.gov/planetary/apod?api_key=81wyuIHRfdWbPLRvS1C4zXZoQsy3GlgY2FfMUGuj&start_date=2020-02-01&end_date=2020-02-16