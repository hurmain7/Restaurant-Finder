import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 0iZ-BlyHQWl3BpReNbvMjBNfIz2XmW5Q7FgFsbF2bL8f8Og9FAWeOvMdrpjH7FiOzRyajyzAVcbvBdHJl99-1S_OWheT6R2I4vzX5-C935-_FKZlB2XcuwV6tXunXXYx'
  }
});
