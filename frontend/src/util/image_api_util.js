import axios from 'axios';

// export const getImages = () => {
//     return axios.get("/api/images/");
// }

// export const getImagesByPost = (id) => {
//     return axios.get(`/api/images/posts/${id}`)
// }

export const uploadImage = (data) => {
    return axios
      .post("/api/images/uploadImage", data)
    .catch(err => console.log(err));
}