---
title: AI Assistant
index: false
description: Usage guide for the ATK AI Assistant, covering complete documentation for the Scenario Generation Agent and Q&A Assistant modules.
---

The ATK AI Assistant integrates large language model (LLM) capabilities to provide intelligent support for aerospace simulation tasks, letting you drive the software with natural language and quickly access professional knowledge.

## Module Overview

| Module | Capability | Suitable Scenarios |
|------|----------|----------|
| [Scenario Generation Agent](./场景生成智能体/README.md) | Natural language and multimodal input → simulation commands | Creating satellites, Facilities, and constellations, setting orbits and payloads, and running simulations and professional analyses |
| [Q&A Assistant](./知识问答助手/README.md) | Document knowledge → intelligent Q&A | Looking up ATK operations, retrieving uploaded documents, and understanding academic paper content |

## Scenario Generation Agent

Control ATK with natural language, without writing code or memorizing command formats. The agent accepts natural language text, speech, images, Excel spreadsheets, Word documents, and other inputs, parses requirements into underlying Connect commands in real time, and executes them, covering the entire workflow from object creation and parameter assignment to simulation propagation and data post-processing.

It currently provides 16 categories and 169 tools, covering ATK v4.2.0 release capabilities such as orbit design, access analysis, and constellations and clusters.

- **Objects and Scenarios**: batch creation of satellites, Facilities, aircraft, missiles, celestial bodies, constellations, and other objects, with support for renaming, deletion, and scenario time period settings
- **Orbits and Trajectories**: orbit wizard, classical orbital elements, position and velocity, ephemeris import, and maneuver planning, as well as missile trajectories, flight routes, and constellation configurations
- **Payloads and Links**: sensor pointing and projection, Facility parameters, and communication transmit and receive link configuration
- **Simulation and Analysis**: simulation state control, 2D and 3D display adjustments, and professional computations such as access and coverage

::: tip Related Documents
- For initial configuration, see [Quick Start](./场景生成智能体/01-快速入门.md)
- For interface operations, see [Interface and Basic Operations](./场景生成智能体/02-界面与基本操作.md)
- For the capability scope, see [Supported Function Scope](./场景生成智能体/03-支持的功能范围.md)
- For typical scenarios, see [Usage Examples](./场景生成智能体/04-使用示例.md).
:::

## Q&A Assistant

An intelligent Q&A system based on Retrieval-Augmented Generation (RAG) technology that integrates three knowledge bases to automatically match answers:

| Knowledge Base | Data Source | Example |
|--------|----------|------|
| ATK Knowledge Base | Official manual | "How do I register ATK?" |
| Paper Knowledge Base | Academic papers in the Article/ directory | "What are the common algorithms for rendezvous and docking?" |
| User Document Library | Your uploaded PDF/DOCX/MD/TXT | "What does my document say about orbit calculation?" |

Both local Ollama deployment and cloud API calls are supported, keeping data on-premises while remaining flexibly scalable.

::: tip Related Documents
New users should start with [Quick Start](./知识问答助手/01-快速入门.md); for model configuration, see [Model Configuration](./知识问答助手/02-模型配置/README.md).
:::
