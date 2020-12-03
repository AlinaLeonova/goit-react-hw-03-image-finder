
import axios from 'axios';


const FetchImagesWithQuery = (query, page = 1) => {
  const apiKey = "18426896-fe41a223570e8075df6a95c49";
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};


export default FetchImagesWithQuery;
