# CoordSystem

## 作用

设置 `CoordSystem` 坐标系

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Argument_of_Latitude`，`Ascending- Node`，`DescendingNode`，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）。`Value` 属性 `CentralBod` 包括 `Earth`，`Mars`，`Moon`，坐标轴包括 `J2000`，`Fixed`

## 示例

::: details open **设置 Ascending_Node 停止条件的坐标系**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```
:::
