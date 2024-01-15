//lesson05--------------------------------------------------

//list item
const listItems = document.getElementById('js-items');
const items = [
  {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}];
const fragmentItem = document.createDocumentFragment();

new Promise((resolve) => {
  resolve(items);
  }).then((items)=>{
    items.forEach((item) => {
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
  })
      listItems.appendChild(fragmentItem);
  });
