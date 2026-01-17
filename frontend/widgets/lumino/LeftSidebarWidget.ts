// LeftSidebarWidget.ts
import { Widget, BoxLayout } from "@lumino/widgets";

export function createLeftSidebar(): Widget {
  const sidebar = new Widget();
  sidebar.addClass("lm-LeftSidebar");

  const layout = new BoxLayout({ direction: "top-to-bottom", spacing: 6 });
  sidebar.layout = layout;

  sidebar.node.style.width = "48px";
  sidebar.node.style.borderRight = "1px solid #ccc";
  sidebar.node.style.display = "flex";
  sidebar.node.style.alignItems = "center";
  sidebar.node.style.paddingTop = "6px";

  const icons = [
    { label: "Files", glyph: "📁" },
    { label: "Database", glyph: "🗄️" },
    { label: "Git", glyph: "🌿" },
    { label: "Search", glyph: "🔍" },
    { label: "Settings", glyph: "⚙️" },
  ];

  for (const { label, glyph } of icons) {
    const btn = new Widget();
    btn.node.textContent = glyph;
    btn.node.title = label;

    btn.node.style.fontSize = "20px";
    btn.node.style.cursor = "pointer";
    btn.node.style.userSelect = "none";
    btn.node.style.padding = "6px";
    btn.node.style.textAlign = "center";
    btn.node.style.width = "100%";

    btn.node.onclick = () => console.log(`${label} clicked`);
    layout.addWidget(btn);
  }

  return sidebar;
}
