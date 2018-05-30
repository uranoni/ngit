const gitP = require('simple-git/promise');
const git = gitP(`${__dirname}/work`);
const simpleGit = require('simple-git')(`${__dirname}/work`);

// git.checkIsRepo()
//    .then(isRepo => !isRepo && initialiseRepo(git))
//    .then(() => git.fetch());
 
// function initialiseRepo (git) {
//    return git.init()
//       .then(() => git.addRemote('origin', 'https://some.git.repo'))
// }


require('simple-git')(`${__dirname}/work`)
     .add('./*')
     .commit("first commit!")