---
title: Commands by Function
index: false
dir:
    link: false
---

# Commands by Function

This page organizes commands by **function module** and applies when the task objective is known but the command to use still has to be determined. To search by object instead (for example, the commands available for satellites and Facilities), see [Commands by Object](../4-Connect对象命令库/README.md).

## Function Modules

- **[Coverage](./覆盖分析.md)**: computation, area partitioning, and figures of merit for CoverageDefinitions
- **[Access](./可见性分析.md)**: access reports and batch access computation
- **[Attitude and Pointing](./姿态与指向.md)**: setting and reading attitude, and attitude constraints
- **[Collision Avoidance](./碰撞规避.md)**: parameter settings for collision avoidance, together with natural conjunction analysis, avoidance maneuver planning, and maneuver review
- **[Vector Geometry](./矢量几何.md)**: custom coordinate systems and their building elements (points, vectors, axes, planes, and angles)
- **[3D Graphics](./三维视图.md)**: models, points, vectors, outlines, and articulation control in the 3D graphics window
- **[2D Graphics](./二维视图.md)**: trajectories, labels, ground tracks, outlines, and line style colors in the 2D graphics window

> Vector Geometry creates geometric components that other commands can reference; it does not act on a specific object itself, and its display is handled by `VO SetVectorGeometry` in [3D Graphics](./三维视图.md).
>
> 3D Graphics and 2D Graphics act on the graphics window itself rather than on a specific object in the scenario.

::: tip Related Documents
- For the symbol conventions of command syntax, see [Command Syntax Conventions](../1-命令语法约定.md).
:::
