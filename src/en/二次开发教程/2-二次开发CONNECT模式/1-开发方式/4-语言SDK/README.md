---
description: Common notes shared by the three language SDKs.
index: false
---

# Language SDK

ATK provides SDKs for the following three languages. You can reference the ATK communication library in your own development environment and interact with ATK over a TCP network connection:

- **[Python](1-Python/1-简介与配置.md)** — Python communication library, suitable for automation scripts and rapid development
- **[Matlab](2-Matlab/1-简介与配置.md)** — Matlab communication library, compatible with Matlab R2015b
- **[C++](3-C++/1-简介与配置.md)** — C++ library files, supporting Windows (VS2015~2022) and Linux

## Common Notes

All language SDKs share the following common features:

- **Communication method**: interact with ATK over a TCP network connection, default port `6655`
- **Core API**: all provide the three core interfaces `atkOpen` / `atkConnect` / `atkClose`
- **Command format**: all use the unified [Connect command syntax](../../2-命令参考/1-命令语法约定.md)
- **Library file location**: all are in the corresponding language folder under the `IntegratingWithATK\connect\` directory of the ATK installation package

<Catalog />
