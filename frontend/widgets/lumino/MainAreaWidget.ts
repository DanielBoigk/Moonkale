// MainAreaWidget.ts
import { Widget, DockPanel, TabPanel } from "@lumino/widgets";

function dummyWidget(title: string, content: string): Widget {
  const w = new Widget();
  w.node.textContent = content;
  w.title.label = title;
  w.title.closable = true;
  w.node.style.padding = "1rem";
  return w;
}

export function createMainArea(): Widget {
  // DockPanel = rearrangeable / IDE-like layout
  const dock = new DockPanel();
  dock.id = "main-dock";
  dock.spacing = 4;

  // initial widgets
  const editor1 = dummyWidget("Editor.ts", "Dummy editor content");
  const editor2 = dummyWidget("Main.jl", "Some Julia code here");
  const consoleW = dummyWidget("Console", ">>> output");
  const inspector = dummyWidget("Inspector", "Selected node info");

  // center area with tabs
  dock.addWidget(editor1);
  dock.addWidget(editor2, { ref: editor1, mode: "tab-after" });

  // side / bottom splits
  dock.addWidget(consoleW, { ref: editor1, mode: "split-bottom" });
  dock.addWidget(inspector, { ref: editor1, mode: "split-right" });

  // wrapper so it plays well with BoxPanel / DockPanel parents
  const wrapper = new Widget();
  wrapper.node.style.width = "100%";
  wrapper.node.style.height = "100%";

  DockPanel.setStretch(dock, 1);
  Widget.attach(dock, wrapper.node);

  return wrapper;
}
