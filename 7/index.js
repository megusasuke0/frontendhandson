//lesson07--------------------------------------------------

//list item
const listItems = document.getElementById('js-items');
const items = [
  {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}];
const fragmentItem = document.createDocumentFragment();
const loadingItem = document.createElement('div');
const loadingItemImg = document.createElement('img');
loadingItemImg.src = 'image/loading-circle.gif';
loadingItem.appendChild(loadingItemImg);
listItems.insertAdjacentElement('beforebegin', loadingItem);

new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 3000);
  }).then((items)=>{
    loadingItem.style.display = "none";
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
