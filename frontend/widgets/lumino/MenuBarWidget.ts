// MenuBarWidget.ts
import { Widget, MenuBar, Menu } from "@lumino/widgets";
import { CommandRegistry } from "@lumino/commands";

export function createMenuBar(): Widget {
  const commands = new CommandRegistry();

  // ---- commands ----
  commands.addCommand("app:new", { label: "New", execute: () => console.log("New") });
  commands.addCommand("app:open", { label: "Open", execute: () => console.log("Open") });
  commands.addCommand("app:save", { label: "Save", execute: () => console.log("Save") });
  commands.addCommand("app:quit", { label: "Quit", execute: () => console.log("Quit") });

  commands.addCommand("edit:undo", { label: "Undo", execute: () => console.log("Undo") });
  commands.addCommand("edit:redo", { label: "Redo", execute: () => console.log("Redo") });

  commands.addCommand("help:about", { label: "About", execute: () => console.log("About") });

  // ---- menus ----
  const fileMenu = new Menu({ commands });
  fileMenu.title.label = "File";
  fileMenu.addItem({ command: "app:new" });
  fileMenu.addItem({ command: "app:open" });
  fileMenu.addItem({ command: "app:save" });
  fileMenu.addItem({ type: "separator" });
  fileMenu.addItem({ command: "app:quit" });

  const editMenu = new Menu({ commands });
  editMenu.title.label = "Edit";
  editMenu.addItem({ command: "edit:undo" });
  editMenu.addItem({ command: "edit:redo" });

  const helpMenu = new Menu({ commands });
  helpMenu.title.label = "Help";
  helpMenu.addItem({ command: "help:about" });

  // ---- menubar ----
  const menuBar = new MenuBar();
  menuBar.addMenu(fileMenu);
  menuBar.addMenu(editMenu);
  menuBar.addMenu(helpMenu);

  // wrapper widget (useful for DockPanel)
  const wrapper = new Widget();
  wrapper.node.style.height = "28px";
  wrapper.node.style.borderBottom = "1px solid #ccc";

  Widget.attach(menuBar, wrapper.node);
  return wrapper;
}
