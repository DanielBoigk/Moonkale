# Moonkale

## Introduction

Currently, tooling for editing both code and knowledge is fragmented:

* **Code editors**: VSCode, JetBrains, Zed, etc.
* **Knowledge editors**: Obsidian, Logseq, Notion, etc.
* Most editors open folders in the file system, but it would often be more beneficial to work directly with structured data, such as from **(graph) databases**.
* **No-code/low-code/diagrams** are rarely a natural extension of such editors.
* Not built with **Retrieval Augmented Generation (RAG)** in mind.

Moonkale is an attempt to unify **code + knowledge editing** in a lightweight, extensible, and performant system.

---

## Architecture

### Frontend

* **Deno + Vite** powers the frontend, keeping the stack lightweight and TypeScript-native.
* **Lumino** owns the DOM for flexible, IDE-like layouts.
* Planned components:

  * [ ] **Cytoscape** – Graph visualization and interaction.
  * [ ] **Milkdown** – Markdown editing for knowledge management.
  * [ ] **CodeMirror** – Code editing.
  * and many more ...

### Backend

* **Tauri + Rust** provides a performant backend while keeping the frontend decoupled.
* Backend responsibilities:

  * [ ] **File management** – Local folder support (discouraged but implemented for completeness).
  * [ ] **Database backend** – Starting with embedded databases:

    * [ ] DuckDB / SQLite
    * [ ] Kuzu / Ladybug
    * Later support for Postgres, Neo4j, Helix, Redis/Falkor, TypeDB, etc.
  * [ ] **Julia connector** – For heavy graph analytics that aren’t fully developed in Rust yet.

---

## Philosophy

* **Keep the frontend simple, fast, and extensible**. No heavy frameworks; Lumino manages layout.
* **Discourage very large files**; prefer small, structured artifacts.
* **Leverage Rust & Julia for performance**, leaving the frontend lightweight.

--- 
## Help wanted:

Want to see your programming language, database, or other feature integrated? Open a pull request!
This FOSS project can’t thrive without a serious community behind it.

## How to develop:

To run frontend only execute: `deno task dev`

To launch full application run: `deno task tauri dev`
