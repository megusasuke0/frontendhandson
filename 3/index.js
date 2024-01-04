//lesson03--------------------------------------------------
//chatGPT prompt："javascript DOM作成 li aタグにテキスト挿入「これです」 aタグの中にimgタグ 繰り返し 配列"
//reference:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array
//reference:https://tech.mychma.com/javascript-moji/929/

//create list item
const createList = document.getElementById('js-list');

const ListItemLinkUrl = [1,2];//配列
const ListItemLinkImgName = ['bookmark','message'];

for (let i = 0; i < ListItemLinkUrl.length; i++) { //for文でループさせる
  const listItem = document.createElement('li');
  const listItemLink = document.createElement('a');
  const listItemLinkImg = document.createElement('img');

  listItemLink.href = `${ListItemLinkUrl[i]}.html`;
  listItemLink.textContent = `a.${ListItemLinkUrl[i]}` ;
  listItemLinkImg.src = `image/${ListItemLinkImgName[i]}.png`;
  listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg);
  listItem.appendChild(listItemLink);
  createList.appendChild(listItem);
}