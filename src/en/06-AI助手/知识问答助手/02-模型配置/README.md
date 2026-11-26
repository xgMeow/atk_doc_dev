---
title: Model Configuration
index: false
description: Guide to configuring the Q&A model and embedding model for the Q&A Assistant, explaining how the two models divide responsibilities, how they differ, and what to watch for, with local Ollama deployment and cloud API calls.
---

# Model Configuration

The Q&A Assistant depends on two types of models: the Q&A model understands the question and composes the answer, while the embedding model converts documents and questions into vectors to support knowledge base retrieval. The two have different responsibilities and different interfaces, so they cannot replace each other, nor can one model serve both roles.

## Roles and Differences of the Two Models

When a document is added, the embedding model converts each chunk into a set of numbers (a vector) and stores it in the vector store. When a question is asked, the same embedding model converts the question into a vector, and the system retrieves the most relevant chunks by vector similarity. The retrieved chunks, together with the user's question, are passed to the Q&A model, which composes the answer in natural language. The embedding model does not produce answer text directly.

| Item | Q&A Model | Embedding Model |
|------|-----------|-----------------|
| Where it is configured | Main Model | Knowledge Base Embedding Model |
| Main role | Understands the question and the retrieved chunks, generates a natural-language answer | Converts document chunks and questions into vectors for retrieval comparison |
| Interface | Chat completion interface: takes context, returns text | Vectorization interface: takes text, returns a vector |
| Required | Required | Required |
| Effect of changing it | Affects only later answers; documents already stored are unaffected | **Stored vectors are not in the same vector space as the new model, and the user document library may need to be rebuilt** |
| Typical models | Cloud: deepseek-v4-pro, Qwen-Max, GPT series; local: deepseek-r1, qwen2.5 | Cloud: text-embedding-v4; local: qwen3-embedding, bge-m3, nomic-embed-text |

## The Two Models Must Not Be Used Interchangeably

Entering a Q&A model in the Knowledge Base Embedding Model section is a common configuration mistake. DeepSeek provides chat models and does not offer a vectorization interface, so it cannot be used as an embedding model: its model list contains no embedding models, and entering a DeepSeek model name in the Knowledge Base Embedding Model section cannot complete vectorization. When an embedding model is needed, use a provider that offers vectorization services, such as text-embedding-v4 from Qwen, or download an embedding model in local Ollama.

To tell which category a model belongs to, refer to the following clues:

- Provider consoles classify models by purpose: those labeled **Vector** or **Embedding** are embedding models; those labeled **Chat** or **Language Model** are Q&A models
- Model names: embedding model names usually contain embedding or embed, such as text-embedding-v4, qwen3-embedding, nomic-embed-text, and bge-m3; chat model names usually contain chat, instruct, r1, max, and similar words
- API documentation: the vectorization interface takes text as input and returns a vector, not natural language

::: warning The Q&A Model Configuration Cannot Be Carried Over to the Embedding Model
The two models can come from different providers, and each requires its own API Key, Base URL, and model name. If the two models use the same access address of the same provider, the API Key and Base URL can be the same, but the model name must be that of the corresponding embedding model; the model name in the Q&A model section cannot be reused in the embedding model section.
:::

::: tip Common Combinations
- Use DeepSeek as the Q&A model and Qwen text-embedding-v4 as the embedding model, with both going through cloud APIs
- Deploy both models on local Ollama, using deepseek-r1 as the Q&A model and qwen3-embedding as the embedding model
:::

## Configuration Entry

Both models are configured in the **Parameter Settings** panel. The Q&A model is entered in the Main Model section; it supports services compatible with the OpenAI API specification, can call cloud APIs, and can also point to local Ollama. The embedding model is entered in the Knowledge Base Embedding Model section, and the way it is invoked is determined by the Embedding mode.

| Embedding Mode | Required Fields | Prerequisite |
|----------------|-----------------|--------------|
| API | API Key, Base URL, model name | Vectorization service of the provider has been enabled |
| Local Ollama | Model name, Base URL | Ollama is installed and the embedding model is downloaded |

After filling in the fields, click **Test Connection**, and save the configuration only after the connection succeeds.

## Selection Guidance

- The Q&A model determines the accuracy and quality of answers. The larger the parameter size, the stronger the reasoning and language organization ability, and the higher the memory and VRAM requirements
- The embedding model is responsible only for generating vectors; its size is usually far smaller than that of the Q&A model, and a model with a small parameter size can run on a local CPU
- For Chinese documents, choose an embedding model with good Chinese support, such as text-embedding-v4, qwen3-embedding, or bge-m3
- Environments where data cannot be transmitted externally can configure both models as local Ollama; the two models can also have one use a cloud API and the other use local Ollama, without constraining each other
- Cloud APIs are billed by token; the unit price of the embedding model is usually lower than that of the Q&A model, and most of the cost comes from the Q&A model side

## Notes

- The embedding model determines the shape of the vector store. After the embedding model is changed, the vectors of stored documents are generated by the old model and are incompatible with the new model, so the user document library may need to be rebuilt; rebuilding will lose uploaded documents, so back them up in advance. See [Document Management](../03-文档管理.md#notes)
- The model name must match the downloaded or enabled model. If a parameter-size tag was specified during download, enter the same tag in the configuration; for example, if qwen3-embedding:4b was downloaded, enter qwen3-embedding:4b
- Under local Ollama, the Base URLs of the two models are written differently: enter `http://localhost:11434/v1` for the Main Model and `http://localhost:11434` for the Knowledge Base Embedding Model
- The Base URL of a cloud embedding model is determined by the provider; some providers use a workspace-specific address, and whether the address includes /v1 must follow the provider documentation
- The retrieval count affects only the number of chunks returned per retrieval, and temperature affects only answer generation; neither changes stored vectors
- The speech recognition model is unrelated to the two models; it is used only for voice questions, and leaving it unconfigured does not affect text conversations

## Configuration Steps

Choose the page according to how it runs:

- [Local Model Configuration](./本地模型配置.md): runs locally through Ollama, keeps data on-premises, and requires downloading model files
- [API Model Configuration](./API模型配置.md): calls cloud services, requires no local GPU, and is billed by usage
