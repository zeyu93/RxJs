import { Observable } from "rxjs";

const observable = new Observable((observer: any) => {
  observer.next("hey -> This is from the next() function");
  observer.next("hey 2 -> This is also from the next() function");
  observer.complete("completed -> This is from the complete() function");
  observer.next("hey -> This is from the next() function");
});

observable.subscribe(
  (value: any) => {
    addItem(value);
  },
  (err) => {
    addItem(err);
  },
  () => {
    addItem("Completed");
  }
);

function addItem(value: any) {
  const list = document.getElementById("output");
  const node = document.createElement("li");
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  list.appendChild(node);
}
