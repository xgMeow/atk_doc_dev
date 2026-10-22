---
description: Call large language models and embedding models remotely through cloud APIs — no local GPU required, billed by usage.
order: 2
---

# API Model Configuration

No local GPU is required; models are invoked through the API interfaces provided by cloud service providers. Enter the corresponding API Key, Base URL, and model name for the Q&A model and the embedding model respectively.

## Q&A Model Configuration

Using **DeepSeek** as an example.

### Obtaining an API Key

Go to the [DeepSeek official website](https://www.deepseek.com/) and click **API Development Platform**.

![DeepSeek API Development Platform](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-api-platform.png)

Create an API key on the **API keys** page.

![API Keys](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-apikeys.png)

::: warning Before You Start
The API service is billed by usage, so the account must be topped up before use.

![Top Up](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-recharge.png)
:::

### Obtaining the Base URL and Model Name

Click **API Documentation** to view the base_url and model parameters.

![API Documentation](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-api-doc.png)

### Filling in the Model Configuration

In the Main Model section of **Parameter Settings**, enter the API Key, Base URL, and model name in order. Taking DeepSeek as an example, the Base URL is https://api.deepseek.com and the model name is, for example, deepseek-v4-pro.

![Main Model Configuration](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/settings-panel.png)

## Embedding Model Configuration

Using **text-embedding-v4** from the Qwen AI platform as an example.

### Obtaining an API Key

Visit the [Qwen AI platform](https://www.qianwenai.com/), open the **API Keys** page from the left navigation, and click **Create API Key**. This service requires real-name verification.

![Create API Key](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/qianwen-apikeys.png)

### Selecting a Model

In the model list, filter by the **Vector** category and select a model from the Qwen-Embedding series.

![Vector Model Selection](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/qianwen-embedding-models.png)

### Obtaining the Workspace and Base URL

Click the avatar in the upper-right corner to open the account settings and view the workspace id under **Workspace**.

![Workspace](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/qianwen-workspace.png)

The Base URL of the embedding model uses the following format, with the workspace id replaced by the actual value:

```text
https://{workspace-id}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1
```

### Filling in the Model Configuration

In the Knowledge Base Embedding Model section of **Parameter Settings**, set the Embedding mode to **API**, enter the API Key, Base URL, and the model name text-embedding-v4 in order, click **Test Connection**, and save after the connection succeeds.

![Embedding Model Configuration](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/qianwen-embedding-config.png)
