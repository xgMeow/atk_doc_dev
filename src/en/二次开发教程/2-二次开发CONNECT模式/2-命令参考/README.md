---
title: Command Reference
index: false
---

# Command Reference

This directory collects all commands in CONNECT mode and offers several entry points for different lookup habits.

## Search Entry Points

- **[Command Index](./3-命令总索引.md)**: alphabetical lookup when the command name is known.
- **[Commands by Object](./4-Connect对象命令库/README.md)**: when the object type to be operated (satellite, facility, missile, and so on) is known, look up the commands available for that object.
- **[Commands by Function](./5-Connect功能索引/README.md)**: when the mission goal is known (Coverage, Access, Attitude and Pointing, Collision Avoidance, Vector Geometry, 3D Graphics, 2D Graphics), determine which commands to use.

## Entry Types

Entries in this directory fall into two categories, which are worth distinguishing:

- **Index container**: "Commands by Object" and "Commands by Function". Several lookup pages hang below such an entry, and the entry itself only groups them without carrying command content.
- **Standalone page**: "Command Index". One entry is one page, with no subordinate level.

## About Duplication

The same command may appear in several search entry points; for example, `AddAttitude Euler` appears under both "Attitude and Pointing" and "Satellite". This results from the entry points complementing one another and is not duplicated content — the command description exists only once in the whole library, and every entry point points to the same page.
