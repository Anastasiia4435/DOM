//first

const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', event => {
    btn.textContent = text.value;
})

//second

const image = document.querySelector('.image');

image.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=3946f2936f02a2562494798a97a46a1b136cc02a-8377431-images-thumbs&n=13');

//third

const link = document.querySelector('.link');
const image2 = document.querySelector('.image2');

link.setAttribute('href', 'https://www.tiktok.com');
image2.setAttribute('alt', 'image with a cat');

//fourth 

const element = document.querySelector('.element');

element.textContent = "New text"