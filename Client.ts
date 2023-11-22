import Field from "./Field";
import WebPageDirector from "./WebPageDirector";

let dir = new WebPageDirector();

let article = dir.createArticle("test");

console.log(article.toString());

const fields = [
  new Field("fname", "First name:", "text", undefined),
  new Field("lname", "Last name:", "text", undefined),
];

let form = dir.createForm(fields);
console.log(form.toString());
