import { Widget } from "@lumino/widgets";

const w = new Widget();
w.node.textContent = "Hello World from Lumino";
w.node.style.padding = "1rem";

Widget.attach(w, document.body);
