//lesson03--------------------------------------------------
//chatGPT prompt："javascript DOM作成 li aタグにテキスト挿入「これです」 aタグの中にimgタグ 繰り返し 配列"
//reference:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array
//reference:https://tech.mychma.com/javascript-moji/929/

//create list item
const createList = document.getElementById('js-list');
const ListItemLinkImgName = ['bookmark','message'];

for (let i = 0; i < ListItemLinkImgName.length; i++) { //for文でループさせる
  const listItem = document.createElement('li');
  const listItemLink = document.createElement('a');
  const listItemLinkImg = document.createElement('img');

  listItemLink.href = `${i + 1}.html`;
  listItemLink.textContent = `a.${i + 1}` ;
  listItemLinkImg.src = `image/${ListItemLinkImgName[i]}.png`;
  listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg);
  listItem.appendChild(listItemLink);
  createList.appendChild(listItem);
}