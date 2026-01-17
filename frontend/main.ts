

// main.ts
import { DockPanel, Widget, TabPanel, BoxPanel } from "@lumino/widgets";

// Create a helper to make a styled widget
function createWidget(content: string, extraClasses = ""): Widget {
    const w = new Widget();
    w.node.textContent = content;
    // Tailwind classes
    w.node.className = `p-4 m-2 rounded shadow bg-white ${extraClasses}`;
    return w;
}

// Create some widgets
const leftWidget = createWidget("Left Panel", "bg-blue-100");
const rightWidget = createWidget("Right Panel", "bg-green-100");
const bottomWidget = createWidget("Bottom Panel", "bg-yellow-100");

// Create dock panel
const dock = new DockPanel();
dock.addWidget(leftWidget); // first widget
dock.addWidget(rightWidget, { mode: "split-right", ref: leftWidget });
dock.addWidget(bottomWidget, { mode: "split-bottom", ref: leftWidget });

// Attach dock panel to DOM
Widget.attach(dock, document.body);

// Make it fill the window
dock.node.className += " w-screen h-screen";
window.addEventListener("resize", () => dock.update());
