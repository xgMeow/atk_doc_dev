# CoordSystem

作用：设置坐标系

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```

说明： Stopping Condition 目前包括属性 Argument_of_Latitude ，Ascending- Node ，DescendingNode ，X-Y_Plane_Cross（设置属性使用 XYPlaneCross），Y- Z_Plane_Cross（设置属性使用 YZPlaneCross），Z-X_Plane_Cross（设置属性使用 ZXPlaneCross）。Value 属性 CentralBody 包括 Earth ，Mars ，Moon，坐标轴包括 J2000 ，Fixed

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```
