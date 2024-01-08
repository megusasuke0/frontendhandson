//lesson04--------------------------------------------------
//chatGPT prompt："javascript DOM作成 li aタグにテキスト挿入「これです」 aタグの中にimgタグ 配列 複数 for文でループ"
//reference:https://qiita.com/yrn03m/items/87e223acc6e733b50429    (参考）連想配列

//list item
const items = document.getElementById('js-items');
const arrayItems = [
  {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}];
const fragmentItem = document.createDocumentFragment();

arrayItems.forEach(arrayItem => {
  const listItem = document.createElement('li');
  const listItemLink = document.createElement('a');
  const listItemLinkImg = document.createElement('img');

  listItemLink.href = `/${arrayItem.to}`;
  listItemLink.textContent = arrayItem.text ;
  listItemLinkImg.src = `image/${arrayItem.img}`;
  listItemLinkImg.alt = arrayItem.alt;
  listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg);
  listItem.appendChild(listItemLink);
  fragmentItem.appendChild(listItem);
});

  items.appendChild(fragmentItem);
