---
description: 设置停止条件计算对象的坐标系。
---

# CoordSystem

## 作用

设置停止条件计算对象的坐标系。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `{Stopping Condition}` | 停止条件名称，可取 `Argument_of_Latitude`、`AscendingNode`、`DescendingNode`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`） |
| `{Value}` | 坐标系名称，`CentralBody` 可取 `Earth`、`Mars`、`Moon` 等，坐标轴包括 `J2000`、`Fixed` |

::: tip 相关参考

- [CoordSystem（段约束属性）](../约束属性/CoordSystem.md)：设置段约束的坐标系，取值更完整

:::

## 适用段

保持段、跟随段、预报段

## 示例

::: details open **设置 AscendingNode 停止条件的坐标系**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```
:::

::: details open **设置 AscendingNode 加入条件的坐标系**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```
:::
