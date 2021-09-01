<h1 align="center">Curate Roadmaps 🚀</h1>

<p align="center">
<a href="https://github.com/ashfaqhaq/curate-frontend"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/ashfaqhaq/curate-frontend"><img src="https://img.shields.io/badge/Built%20by-developers%20%3C%2F%3E-0059b3"></a>
<a href="https://github.com/ashfaqhaq"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>
<a href="https://github.com/ashfaqhaq/curate-frontend/graphs/contributors"><img src="https://img.shields.io/github/contributors/ashfaqhaq/curate-frontend?color=brightgreen"></a>
<a href="https://github.com/ashfaqhaq/curate-frontend/blob/main/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/ashfaqhaq/curate-frontend?style=flat-square" alt="Curate-Frontend licence" />
</a>
<a href="https://github.com/ashfaqhaq/curate-frontend" target="blank">
<img src="https://img.shields.io/github/forks/ashfaqhaq/curate-frontend?style=flat-square" alt="styler forks"/>
</a>
<a href="https://github.com/ashfaqhaq/curate-frontend/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/ashfaqhaq/curate-frontend?style=flat-square" alt="styler stars"/>
</a>
<a href="https://github.com/ashfaqhaq/curate-frontend/issues" target="blank">
<img src="https://img.shields.io/github/issues/ashfaqhaq/curate-frontend?style=flat-square" alt="styler issues"/>
</a>
<a href="https://github.com/ashfaqhaq/curate-frontend" target="blank">
<img src="https://img.shields.io/github/issues-pr/ashfaqhaq/curate-frontend?style=flat-square" alt="styler pull-requests"/>
</a>

</p>



<p align="center">
    <a href="https://curate-roadmaps.netlify.app" target="blank">View Demo</a>
    ·
    <a href="https://github.com/ashfaqhaq/curate-frontend/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/ashfaqhaq/curate-frontend/issues/new/choose">Request Feature</a>
</p>

### Introducing Curate Roadmaps 🚀

<a href="https://curate-roadmaps.netlify.app/" target="blank">
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1630493773975/hqqREwJjI.png?auto=compress,format&format=webp" />
</a>

[Curate Roadmaps](https://curate-roadmaps.netlify.app)

[Read blog 📖](https://ashfaq.hashnode.dev/launching-curate-roadmaps-an-open-source-initiative-to-curate-useful-resources)

## 🚀 Demo

https://curate-roadmaps.netlify.app

Backend API documentation: https://nest-js-curate.herokuapp.com/api/

## 😎 Features

- ✨ **User Authentication**
- ⭐ **Curate roadmaps for everyone**
- 🌈 **Share your favorite resources list**




## 🛠️ Installation Steps

1. Fork this repository
2. Clone your forked copy of the project.

```bash
git clone --depth 1 https://github.com/<your username>/curate-frontend.git
```

To test if it is working properly change the following variables in  `index.js`

### Important configuration 
```
 <Auth0Provider
    domain= <AUTH0_dev>
    clientId= <AUTH0_clientId>
    redirectUri={window.location.origin} // dont change
    audience= <AUTH0_audience>
    scope="openid profile email"
  >
```

After doing these, go to Auth0 dashboard to change the callback, logout and web origins to localhost:3000 (which is currently where you will be signing in)!


3. Change the working directory

```bash
cd curate-frontend
```

4. Add a reference to the original repository.

```
git remote add upstream https://github.com/ashfaqhaq/curate-frontend.git
```

5. Check the remotes for this repository.

```
git remote -v
```

6. Always take a pull from the upstream repository to your main branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

7. Create a new branch.

```
git checkout -b <your_branch_name>
```

**You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.** (Authenticated via Auth0)



8. Track your changes

```
git add .
```

9. Commit your changes .

```
git commit -m "Relevant message"
```

10. Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>

```

11. To create a pull request, click on compare and pull requests. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.


## 💻 Built with

- **Auth0:** User Authentication
- **Frontend** : React
- **Backend** : Nestjs
- **Chakra UI-React:** Rich Styling
- **Rough Notation:** A javaScript library to animate annotations on a web page
- **Heroku:** For Server 
- **Netlify:** For Frontend


## 🚀 Future Plans

- Individual Profile pages detailing the complete history and resources.
- Sorting out Rodmaps according to beginners, intermediate and advanced levels.
- Enable collaboration medium by creating communitiy and creating forums.
- Toggle Custom themes.

## 🛴 Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c15bf6-33d6-4291-89da-73674aaf99e7/deploy-status)](https://app.netlify.com/sites/curate-roadmaps/deploys)


---

## ✌ Connect with me on Twitter

<a href="https://twitter.com/ashfaq_ulhaq" target="blank">
<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
</a>
