import axios from "axios";

const KEY = "AIzaSyBNQIWLtY1hCED03Ov7rtUGN0_GoIleoN4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
