---
title: AI Assistant
index: false
description: Usage guide for the ATK AI Assistant, covering complete documentation for the Scenario Generation Agent and Q&A Assistant modules.
---

The ATK AI Assistant integrates large language model (LLM) capabilities to provide intelligent support for aerospace simulation tasks, letting you drive the software with natural language and quickly access professional knowledge.

## Module Overview

| Module | Capability | Suitable Scenarios |
|------|----------|----------|
| [Scenario Generation Agent](./场景生成智能体/README.md) | Natural language → simulation commands | Create satellites/ground stations/constellations, set orbits and payloads, run simulation analysis |
| [Q&A Assistant](./知识问答助手/README.md) | Document knowledge → intelligent Q&A | Look up ATK operations, retrieve uploaded documents, understand academic paper content |

## Scenario Generation Agent

Control the ATK aerospace simulation software with natural language, **without writing code or memorizing command formats**. The agent parses your instructions into underlying Connect commands in real time and executes them automatically, covering the entire workflow from object creation and parameter assignment to simulation and data post-processing.

- **Object Management**: create satellites, ground stations, aircraft, missiles, celestial bodies, constellations, and more
- **Orbit Settings**: supports five methods — orbit wizard, classical orbital elements, position and velocity, ephemeris import, and maneuver planning
- **Payload & Link**: fine-grained configuration of sensor pointing, ground station parameters, and communication links
- **Simulation Analysis**: professional computations such as coverage analysis and access analysis

> For detailed usage, see [Usage Guide](./场景生成智能体/01-使用说明.md); for typical scenario examples, see [Input Examples](./场景生成智能体/02-输入示例.md).

## Q&A Assistant

An intelligent Q&A system built on Retrieval-Augmented Generation (RAG) technology that integrates three knowledge bases to automatically match answers:

| Knowledge Base | Data Source | Example |
|--------|----------|------|
| ATK Knowledge Base | Official manual | "How do I register ATK?" |
| User Document Library | Your uploaded PDF/DOCX/MD/TXT | "What does my document say about orbit calculation?" |
| Paper Knowledge Base | Academic papers in the Article/ directory | "What are the common algorithms for rendezvous and docking?" |

Both local Ollama deployment and cloud API calls are supported, keeping data on-premises while remaining flexibly scalable.

> New users should start with [Quick Start](./知识问答助手/01-快速入门.md); for model configuration, see [Model Configuration](./知识问答助手/02-模型配置/README.md).
