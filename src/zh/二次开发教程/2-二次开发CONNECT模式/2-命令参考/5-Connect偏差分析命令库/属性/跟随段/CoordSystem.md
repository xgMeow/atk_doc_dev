# CoordSystem

## 作用

设置坐标系

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Stopping Condition` | `Argument_of_Latitude`、`AscendingNode`、`DescendingNode`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`） |
| `Value` | `CentralBody` 包括 `Earth`、`Mars`、`Moon`；坐标轴包括 `J2000`、`Fixed` |

## 示例

::: details open **设置 AscendingNode 停止条件的坐标系**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```

:::

::: details open **设置 AscendingNode 加入条件的坐标系**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```

:::
