---
title: Model Configuration
index: false
description: Guide to configuring the large language model and embedding model for the ATK Q&A Assistant, supporting both local Ollama deployment and cloud API calls.
---

The Q&A Assistant requires both a Q&A model and an embedding model. The Q&A model is entered in the **Main Model** section of the main interface; it supports services compatible with the OpenAI API specification and can call a cloud API or point to a local Ollama instance. The embedding model is entered in the **Knowledge Base Embedding Model** section, and the Embedding mode determines how it is invoked.

| Embedding Mode | Required Fields |
|----------------|----------------|
| API | API Key, Base URL, model name |
| Local Ollama | Model name, Base URL |

After filling in the fields, click **Test Connection** and save the configuration only after the connection succeeds.

- [Local Model Configuration](./本地模型配置.md): runs locally through Ollama, keeps data on-premises, and requires downloading model files
- [API Model Configuration](./API模型配置.md): calls cloud services, requires no local GPU, and is billed by usage
