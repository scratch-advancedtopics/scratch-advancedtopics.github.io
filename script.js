fetch('https://api.github.com/orgs/scratch-advancedtopics/members')
  .then(res => res.json())
  .then(res => {
    const div = document.getElementById('members');
    for (let i = 0; i < res.length; i++) {
      let el = document.createElement('div');
      div.innerHTML += `<a href="${res[i].html_url}" class="exclude"><img src="${res[i].avatar_url}" class="avatar flex-item" title="${res[i].login}"></a>`
    }
  });