const myHeaders = new Headers();
myHeaders.append("authorization", "e5454a07-706c-4179-8ae7-a5503a97ec79");

funcMe(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}





const myHeaders = new Headers();
myHeaders.append("authorization", "e5454a07-706c-4179-8ae7-a5503a97ec79");

funcCards(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/cards", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}





const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "e5454a07-706c-4179-8ae7-a5503a97ec79");

const raw = JSON.stringify({
  "name": "Palienko",
  "about": "student"
});


funcPatch(){
const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me?Content-Type=application/json", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}





const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "e5454a07-706c-4179-8ae7-a5503a97ec79");

funcPost(){
const raw = JSON.stringify({
  "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd",
  "name": "Байкал",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  "owner": {
    "name": "Jacques Cousteau",
    "about": "Sailor, researcher",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    "_id": "ef5f7423f7f5e22bef4ad607",
    "cohort": "local"
  },
  "createdAt": "2019-07-05T08:10:57.741Z"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/cards", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}