---
description: 五种语言 SDK 的共性说明。
index: false
---

# 语言 SDK

ATK 为以下五种语言提供了 SDK，用户可在自己的开发环境中引用 ATK 通信库，通过 TCP 网络连接与 ATK 交互：

- **[Python](1-Python/1-简介与配置.md)** — Python 通信库，适合自动化脚本和快速开发
- **[Matlab](2-Matlab/1-简介与配置.md)** — Matlab 通信库，适配 Matlab R2015b
- **[C++](3-C++/1-简介与配置.md)** — C++ 库文件，支持 Windows（VS2015~2022）和 Linux
- **[Java](4-Java/1-简介与配置.md)** — Java 通信库，基于 JNI 封装，需 JDK 8 及以上
- **[Octave](5-Octave/1-简介与配置.md)** — Octave 通信库，通过内置 Java 接口调用，适配 Octave 5.2.0 及以上

## 共性说明

所有语言 SDK 具有以下共同特点：

- **通信方式**：通过 TCP 网络连接与 ATK 交互，默认端口 `6655`
- **核心 API**：均提供 `atkOpen` / `atkConnect` / `atkClose` 三组核心接口。其中 Python、C++ 与 Matlab 的 `atkOpen` 两个参数均有默认值（`"127.0.0.1"`、`6655`），可省略参数直接连接，`atkConnect` 为 3 参形式；Java 与 Octave 无默认参数，`atkOpen` 的 IP 与端口需显式传入，`atkConnect` 为 4 参形式（第 4 参为保留参数，传 `""` 即可）
- **命令格式**：均使用统一的 [CONNECT 命令语法](../../2-命令参考/1-命令语法约定.md)
- **示例源码位置**：各语言的完整示例统一发布在 **`Help\Examples\08-二次开发案例\`** 下，文件名形如 `ATKConnect<语言>Test.<扩展名>`（如 `ATKConnectPythonTest.py`、`ATKConnectJavaTest.java`、`ATKConnectMatlabTest.m`、`ATKConnectOctaveTest.m`）。各语言的「完整示例」页直接引用该目录下的文件，不再重复贴出代码；C++ 示例为 `IntegratingWithATK\connect\C++\src\ex-InclinationChange.cpp`

<Catalog />
