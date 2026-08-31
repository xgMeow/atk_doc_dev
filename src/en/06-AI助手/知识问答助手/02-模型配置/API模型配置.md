---
description: Call the large language model and embedding model remotely through cloud APIs — no local GPU required, billed by usage.
order: 2
---

# API Model Configuration

No local GPU is needed — models are called through API interfaces provided by cloud service providers. You need to obtain **API Key**, **Base URL**, and **Model Name**, then fill them into ATK.

## Large Language Model Configuration

Using **DeepSeek** as an example.

### Obtaining an API Key

Go to the [DeepSeek official website](https://www.deepseek.com/) and click **API Open Platform**.

![DeepSeek API Open Platform](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-api-platform.png)

Create an API key on the **API keys** page.

![API Keys](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-apikeys.png)

::: warning Before You Start
The API service is billed by usage, so you need to top up your account before using it.

![Top up](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-recharge.png)
:::

### Obtaining Base URL and Model

Click **API Documentation** to view the `base_url` and `model` parameters.

![API Documentation](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/deepseek-api-doc.png)

### Filling in the Model Configuration

Fill in **model_name**, **base_url**, and **api_key** in order in the ATK model configuration interface.

![API LLM Configuration](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/api-llm-config.png)

## Embedding Model Configuration

Using **Qwen3-Embedding-8B** as an example.

### Obtaining an API Key

Go to the [ModelScope community](https://www.modelscope.cn/my/overview), click **Access Control**, and create an access token to obtain `api_key`.

![ModelScope overview](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/modelscope-overview.png)

::: warning Before You Start
You must complete real-name verification on the Alibaba Cloud Bailian platform before using the API service.
:::

### Selecting the Model

After entering the ModelScope community, search for the corresponding model in the **Model Library**.

![Model Library](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/modelscope-model-library.png)

![Model Details](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/modelscope-model-detail.png)

### Obtaining Base URL

On the model detail page, click **API-Inference** and view the code example to obtain `base_url`.

![API-Inference](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/modelscope-api-inference.png)

![Code Example](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/modelscope-code-example.png)

### Filling in the Model Configuration

Fill in **model_name**, **base_url**, and **api_key** in order in the ATK model configuration interface.

![API Embedding Model Configuration](../../../../zh/06-AI助手/知识问答助手/02-模型配置/media/API模型配置/api-embedding-config.png)
