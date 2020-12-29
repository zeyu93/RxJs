import { Observable } from "rxjs";

const observable = new Observable((observer: any) => {
  try {
    observer.next("hey -> This is from the next() function");
    observer.next("hey 2 -> This is also from the next() function");
    setInterval(() => {
      observer.next(
        "emitting value every two seconds, observer is subscribed to handle this value"
      );
    }, 2000);
  } catch (e) {
    observer.error(e);
  }
});

const observer = observable.subscribe(
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

let cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", () => {
    observer.unsubscribe()
});
