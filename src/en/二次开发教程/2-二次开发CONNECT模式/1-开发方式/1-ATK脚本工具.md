---
description: The ATK Script tool is a scripting tool built into ATK. It uses ATK's own scripting language (.atks) and interacts with ATK directly through shared memory; it is not part of the TCP communication system of Connect mode.
---

# ATK Script Tool

The ATK Script tool is a scripting tool built into ATK. It uses ATK's own scripting language (`.atks`) and interacts with ATK directly through **shared memory**.

Entry point: ATK menu bar → **Integration** → **ATK Script**.

::: warning Differences from Connect Mode
The ATK Script tool communicates via **shared memory** and runs in the same process as ATK; it does not belong to the TCP network communication system of Connect mode. Its scripting syntax and built-in functions differ from Connect commands.
:::

For detailed scripting syntax, built-in functions and operating instructions, refer to the [ATK Script Tool documentation](../../../5.专业使用指南/18-脚本工具/).
