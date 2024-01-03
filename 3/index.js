//lesson03--------------------------------------------------

//create list item
const createList = document.getElementById('js-list'); // get:ID='js-list'
const listItem = document.createElement('li'); // create<li></li>
const listItemLink = document.createElement('a'); //create<a></a>
const listItemLinkImg = document.createElement('img'); //create<img>

listItemLink.href = "1.html";//add:linkURL
listItemLink.textContent = 'これです' ;
listItemLinkImg.src = "image/bookmark.png";//add:img -> src
listItemLinkImg.alt = "ブックマーク";//add:img -> alt
listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg);//insertAdjacentElement:引数で要素のポジション指定可能

createList.appendChild(listItem).appendChild(listItemLink);//入れ子構造
