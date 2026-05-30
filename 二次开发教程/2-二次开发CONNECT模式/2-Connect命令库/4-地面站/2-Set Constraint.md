## Set Constraint


作用：设置约束

用法： 
```
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

::: details 详细说明（点击展开）

- 基本约束：


| ConstraintName | Parameters                                                   |
| -------------- | ------------------------------------------------------------ |
| AzimuthAngle   | `{Off \| Min <Value1> Max <Value2>} [ExcludeIntervals \|  IncludeIntervals]` |
| ElevationAngle | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| Range            | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| AzimuthRate      | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| ElevationRate    | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| RangeRate        | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| AngularRate      | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| Altitude         | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| PropagationDelay | `{Off \| Min <Value1> [\|] Max  <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| LineOfSight      | `{On \| Off}`                                                  |
| TerrainMask      | `{On \| Off}`                                                  |

- 太阳约束：
 

| ConstraintName      | Parameters                                  |
| ------------------- | -----------------------------------------   |
| SunElevationAngle   | `{Off \| Min  <Value1> [\|] Max  <Value2>}` |
| SunGroundElevAngle  | `{Off \| Min  <Value1> [\|] Max  <Value2>}` |
| LunarElevationAngle | `{Off \| Min  <Value1> [\|] Max  <Value2>}` |
| LOSSunExclusion     | `{Off \|  <Value1>}`                        |
| LOSLunarExclusion   | `{Off \|  <Value1>}`                        |
| BSSunExclusion      | `{Off \|  <Value1>}`                        |
| BSLunarExclusion    | `{Off \|  <Value1>}`                        |

:::

**注意**: 当输入 AzimuthAngle 值时，最大值和最小值必须同时输入

举例：

```
SetConstraint */Facility/Facility1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
```
SetConstraint */Facility/Facility1 ElevationAngle Min 10.0
```
```
SetConstraint */Facility/Facility1 SunElevationAngle Min 10
```
