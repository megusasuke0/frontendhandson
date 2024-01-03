//lesson02--------------------------------------------------
//chatGPT prompt："javascript DOM作成 li aタグにテキスト挿入「これです」 aタグの中にimgタグ"
//reference:https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

//create list item
const createList = document.getElementById('js-list'); // get:ID='js-list'
const listItem = document.createElement('li'); // create<li></li>
const listItemLink = document.createElement('a'); //create<a></a>
const listItemLinkImg = document.createElement('img'); //create<img>

listItemLink.href = "1.html";//add:linkURL
listItemLinkImg.src = "image/bookmark.png";//add:img -> src
listItemLinkImg.alt = "ブックマーク";//add:img -> alt
listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg).textContent = 'これです' //insertAdjacentElement:引数で要素のポジション指定可能

createList.appendChild(listItem).appendChild(listItemLink);//入れ子構造の方法
