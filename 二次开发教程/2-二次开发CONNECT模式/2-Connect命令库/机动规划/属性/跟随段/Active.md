# Active

作用：设置停止条件是否选中

用法： 

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```

说明： Stopping Condition 目前包括属性 Altitude ，Apoapsis ，Argument_of_Latitude（设置属性使用 ArgLat），AscendingNode ，DescendingNode，Duration ，Epoch ，Longitude ，Latitude ，Mean_Anomaly ，Periapsis，R_Magnitude ，True_Anomaly ，X-Y_Plane_Cross（设置属性使用 XYPlaneCross），Y-Z_Plane_Cross（设置属性使用 YZPlaneCross），Z-X_Plane_Cross（设置属性使用 ZXPlaneCross），AscToDesc ，DescToAsc ，StateCalc

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Duration.Active false
```

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.Active false
```
