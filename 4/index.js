//lesson04--------------------------------------------------
//chatGPT prompt："javascript DOM作成 li aタグにテキスト挿入「これです」 aタグの中にimgタグ 配列 複数 for文でループ"
//reference:https://qiita.com/yrn03m/items/87e223acc6e733b50429    (参考）連想配列

//list item
const listItems = document.getElementById('js-items');
const items = [
  {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}];
const fragmentItem = document.createDocumentFragment();

items.forEach(item => {
  const listItem = document.createElement('li');
  const listItemLink = document.createElement('a');
  const listItemLinkImg = document.createElement('img');

  listItemLink.href = `/${item.to}`;
  listItemLink.textContent = item.text ;
  listItemLinkImg.src = `image/${item.img}`;
  listItemLinkImg.alt = item.alt;
  listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg);
  listItem.appendChild(listItemLink);
  fragmentItem.appendChild(listItem);
});

listItems.appendChild(fragmentItem);
