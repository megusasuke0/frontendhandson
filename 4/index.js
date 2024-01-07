//lesson04--------------------------------------------------
//chatGPT prompt："javascript DOM作成 li aタグにテキスト挿入「これです」 aタグの中にimgタグ 配列 複数 for文でループ"
//reference:https://qiita.com/yrn03m/items/87e223acc6e733b50429（参考）連想配列

//create list item
const createList = document.getElementById('js-list');
const arrayItems = [     //連想配列を作成
  {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}];

  for (let i = 0; i < arrayItems.length; i++) { //連想配列をループさせる
    const listItem = document.createElement('li');
    const listItemLink = document.createElement('a');
    const listItemLinkImg = document.createElement('img');

    listItemLink.href = `/${arrayItems[i].to}`;
    listItemLink.textContent = arrayItems[i].text ;
    listItemLinkImg.src = `image/${arrayItems[i].img}`;
    listItemLinkImg.alt = arrayItems[i].alt;
    listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg);
    listItem.appendChild(listItemLink);

    createList.appendChild(listItem);
  }
