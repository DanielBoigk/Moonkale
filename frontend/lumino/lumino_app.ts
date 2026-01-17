
// import all the relevant stuff from Lumino:
import { DockPanel, Widget, TabPanel, BoxPanel, MenuBar, Menu } from "@lumino/widgets";
//import { createHelloWorld } from "../widgets/lumino/HelloWorldWidget.ts";



const w = new Widget();
w.node.textContent = "Hello World";
Widget.attach(w, document.body);
