---
description: ATK CONNECT 模式概述。CONNECT 模式通过 TCP 网络通信操控 ATK，支持 Python 客户端工具、Java 命令行客户端，以及 Python、Matlab、C++ 三种语言 SDK，另有 ATK 脚本工具作为补充。
index: false
---

# CONNECT模式

CONNECT 模式使用 TCP 网络方式与 ATK 软件进行连接，用户通过编写脚本发送命令的方式对 ATK 软件进行操控。

核心 API 由三组接口组成：`atkOpen`（建立连接）、`atkConnect`（发送命令）、`atkClose`（断开连接）。所有开发方式均基于此三组接口，命令格式统一使用 [CONNECT 命令语法](2-命令参考/1-命令语法约定.md)。

开始开发前，请先了解 [ATK 启动与端口配置](ATK启动与端口配置.md)（默认端口、指定端口、查看端口）。

## 开发方式对比

ATK 提供以下开发方式，可根据需求选择：

| 开发方式 | 入口 | 通信 | 语言 | 适用场景 |
|----------|------|------|------|----------|
| [Python 客户端工具](1-开发方式/2-Python客户端工具/1-简介与配置.md) | ATK菜单 → 集成 → 客户端 | TCP | Python | 不想配置环境，直接在ATK中编写Python脚本 |
| [Java 命令行客户端](1-开发方式/3-Java命令行客户端/1-简介与配置.md) | java -jar 启动 | TCP | Java | 无需编写代码，在命令行窗口中输入命令交互 |
| [Python SDK](1-开发方式/4-语言SDK/1-Python/1-简介与配置.md) | 自建 Python 环境 | TCP | Python | 在自己的Python项目中使用ATK |
| [Matlab SDK](1-开发方式/4-语言SDK/2-Matlab/1-简介与配置.md) | 自建 Matlab 环境 | TCP | Matlab | 在自己的Matlab项目中使用ATK |
| [C++ SDK](1-开发方式/4-语言SDK/3-C++/1-简介与配置.md) | 自建 C++ 环境 | TCP | C++ | 在自己的C++项目中使用ATK |
| [ATK 脚本工具](1-开发方式/1-ATK脚本工具.md) | ATK菜单 → 集成 → ATK脚本 | 共享内存 | ATK脚本(.atks) | 使用ATK内置脚本语言 |

::: tip 如何选择
- **不想配置环境** → [Python 客户端工具](1-开发方式/2-Python客户端工具/1-简介与配置.md)，ATK 内置，打开即用
- **不想写代码，快速交互** → [Java 命令行客户端](1-开发方式/3-Java命令行客户端/1-简介与配置.md)，java -jar 启动后在命令行输入命令
- **需要在自己项目中使用 ATK** → [语言 SDK](1-开发方式/4-语言SDK/README.md)，选择你熟悉的语言
- **简单自动化操作** → [ATK 脚本工具](1-开发方式/1-ATK脚本工具.md)
:::
