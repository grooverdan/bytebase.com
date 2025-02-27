---
title: AI Assistant
---

AI Assistant uses OpenAPI or its compatible service to argument the database development workflow.

## Enable AI Assistant

Go to Bytebase console, click **Settings > General**. Scroll down to **AI Assistant**.

![openai](/content/docs/ai-assistant/openai.webp)

- **OpenAI API Key**. The Open API key you obtained [here](https://platform.openai.com/account/api-keys).
- **OpenAI API Endpoint**. If you use an OpenAPI compatible service or access OpenAPI via a proxy, you can optionally specify the custom endpoint.

## Integrate model with Ollama

If you have privacy concerns, you can self-host model and use Ollama which provides [OpenAI compatible Chat Completions API](https://ollama.com/blog/openai-compatibility).

## Features

- [SQL Editor AI Assistant](/docs/sql-editor/ai-assistant)
- [Index Advisor](/docs/slow-query/index-advisor)
