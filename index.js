require("dotenv").config();
const express = require("express")
const app = express()

const data = {
    "login": "SumitThakur1600",
    "id": 172577155,
    "node_id": "U_kgDOCklRgw",
    "avatar_url": "https://avatars.githubusercontent.com/u/172577155?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SumitThakur1600",
    "html_url": "https://github.com/SumitThakur1600",
    "followers_url": "https://api.github.com/users/SumitThakur1600/followers",
    "following_url": "https://api.github.com/users/SumitThakur1600/following{/other_user}",
    "gists_url": "https://api.github.com/users/SumitThakur1600/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SumitThakur1600/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SumitThakur1600/subscriptions",
    "organizations_url": "https://api.github.com/users/SumitThakur1600/orgs",
    "repos_url": "https://api.github.com/users/SumitThakur1600/repos",
    "events_url": "https://api.github.com/users/SumitThakur1600/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SumitThakur1600/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sumit Kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-06-13T06:45:10Z",
    "updated_at": "2024-12-24T03:45:21Z"
}
app.get('/', (req, res) => {
    console.log("You are currently in the homepage")
    res.send('<h2>my name is homepage</h2>')
})
app.get("/sumit", (req, res) => {
    console.log("You are currently in sumit page")
    res.send('<h2>my name is sumit page</h2>')

})
app.get("/git", (req, res) => {
    res.json(data)
    console.log(data)
})

app.listen(process.env.PORT, () => {
    console.log(`you are working on port number ${process.env.PORT}`)
})