// HelloWorldWidget.ts
import { Widget } from "@lumino/widgets";

export function createHelloWorld(): Widget {
  const w = new Widget();
  w.node.textContent = "Hello World";
  w.node.style.padding = "1rem";
  return w;
}
