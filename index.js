const submitBtn = document.querySelector('#submitBtn');
const commetSection = document.querySelector('#comments');
const forma = document.querySelector('#forma');

function createComment () {
    const header = document.createElement('header');
    const a = document.createElement('a');
    const p = document.createElement('p');
    const article = document.createElement('article');
    const time = document.createElement('time');

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const website = document.querySelector('#website');
    const comment = document.querySelector('#comment');

    a.textContent = name.value;
    a.href = website.value;
    p.textContent = comment.value;
    time.textContent = 'Just Now';

    header.classList.add('commHeader');
    a.classList.add('commA');
    p.classList.add('commText');
    article.classList.add('commArticle');
    time.classList.add('commTime');

    header.appendChild(a);
    header.appendChild(time);
    article.appendChild(header);
    article.appendChild(p);
    commetSection.appendChild(article);
    p.setAttribute('style', 'display: inline;');
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createComment();
    forma.reset();
})
