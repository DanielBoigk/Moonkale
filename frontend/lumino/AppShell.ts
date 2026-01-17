// AppShell.ts
import {
  Widget,
  BoxPanel,
  DockPanel,
  TabPanel
} from "@lumino/widgets";

/**
 * AppShell
 *
 * Top:
 *   MenuBar / Toolbar (dummy)
 * Center:
 *   LeftSidebar | Main DockPanel | RightSidebar
 * Bottom:
 *   StatusBar (dummy)
 */
export class AppShell extends Widget {
  readonly dock: DockPanel;
  readonly leftSidebar: TabPanel;
  readonly rightSidebar: TabPanel;

  constructor() {
    super();
    this.id = "app-shell";

    /* ---------------- root layout ---------------- */
    const root = new BoxPanel({ direction: "top-to-bottom", spacing: 0 });
    this.layout = root;

    /* ---------------- top bar ---------------- */
    const topBar = new Widget();
    topBar.node.textContent = "Menu / Toolbar";
    topBar.node.style.height = "32px";
    topBar.node.style.borderBottom = "1px solid #ccc";
    topBar.node.style.padding = "4px";

    /* ---------------- bottom bar ---------------- */
    const statusBar = new Widget();
    statusBar.node.textContent = "StatusBar";
    statusBar.node.style.height = "24px";
    statusBar.node.style.borderTop = "1px solid #ccc";
    statusBar.node.style.padding = "4px";

    /* ---------------- center area ---------------- */
    const center = new BoxPanel({ direction: "left-to-right", spacing: 0 });

    /* ---- left sidebar ---- */
    this.leftSidebar = new TabPanel();
    this.leftSidebar.node.style.width = "240px";
    this.leftSidebar.node.style.borderRight = "1px solid #ccc";

    /* ---- right sidebar ---- */
    this.rightSidebar = new TabPanel();
    this.rightSidebar.node.style.width = "300px";
    this.rightSidebar.node.style.borderLeft = "1px solid #ccc";

    /* ---- main dock ---- */
    this.dock = new DockPanel();
    this.dock.spacing = 4;

    /* ---------------- assemble ---------------- */
    center.addWidget(this.leftSidebar);
    center.addWidget(this.dock);
    center.addWidget(this.rightSidebar);

    BoxPanel.setStretch(this.leftSidebar, 0);
    BoxPanel.setStretch(this.dock, 1);
    BoxPanel.setStretch(this.rightSidebar, 0);

    root.addWidget(topBar);
    root.addWidget(center);
    root.addWidget(statusBar);

    BoxPanel.setStretch(topBar, 0);
    BoxPanel.setStretch(center, 1);
    BoxPanel.setStretch(statusBar, 0);
  }
}
