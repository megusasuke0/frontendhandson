//lesson04--------------------------------------------------

//create list item
const createList = document.getElementById('js-list');
const listItemLinkImgNames = ['bookmark','message'];

for (let i = 0; i < listItemLinkImgNames.length; i++) { //for文でループさせる
  const listItem = document.createElement('li');
  const listItemLink = document.createElement('a');
  const listItemLinkImg = document.createElement('img');

  listItemLink.href = `${i + 1}.html`;
  listItemLink.textContent = `a.${i + 1}` ;
  listItemLinkImg.src = `image/${listItemLinkImgNames[i]}.png`;
  listItemLink.insertAdjacentElement('afterbegin',listItemLinkImg);
  listItem.appendChild(listItemLink);
  createList.appendChild(listItem);
}
