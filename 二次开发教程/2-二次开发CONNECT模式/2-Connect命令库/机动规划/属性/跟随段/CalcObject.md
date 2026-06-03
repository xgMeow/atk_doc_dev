# CalcObject

作用：设置计算对象参数

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

说明： Stopping Condition 属性 StateCalc。

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.StateCalc.CalcObject X
```

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.StateCalc.CalcObject X
```
