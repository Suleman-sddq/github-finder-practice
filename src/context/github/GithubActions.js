import axios from "axios";


const REACT_APP_GITHUB_URL = "https://api.github.com";
const REACT_APP_GITHUB_TOKEN = "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";

const github = axios.create({
   baseURL: REACT_APP_GITHUB_URL,
   headers: {
      Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
   }
})

export const searchUser = async (text) => {
   const params = new URLSearchParams({
      q: text
   })

   const response = await github.get(`/search/users?${params}`);
   return response.data.items;
}

// Get a single USER_AND_REPOS
export const getUserAndRepos = async (login) => {
   const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
   ]);


   return {
      user: user.data,
      repos: repos.data
   };
}

