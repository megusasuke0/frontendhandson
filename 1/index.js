//lesson01--------------------------------------------------
//chatGPT prompt："javascript DOM作成 li テキスト「これです」"
//reference:https://www.wakuwakubank.com/posts/306-javascript-dom/#index_id4
//reference:https://stackoverflow.com/questions/50250214/how-to-use-insertbefore-without-second-parameter

//create list item
const newList = document.getElementById('newlist'); // get:ID='newlist'
const listItem = document.createElement('li'); // create<li></li>
const newContent =  listItem.textContent = 'これです' // add:text -> これです
newList.insertBefore(listItem , null); 