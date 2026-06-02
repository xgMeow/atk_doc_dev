# Cartesian
 

作用：为初始段坐标类型位置速度设置属性值

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.Cartesian.<Element> <Value> <Unit>
```

说明：
 

| Element | 说明                                      |
| ------- | ----------------------------------------- |
| X       | 默认单位时 m，包括单位 m ，km             |
| Y       | 默认单位时 m，包括单位 m ，km             |
| Z       | 默认单位时 m，包括单位 m ，km             |
| Vx      | 默认单位时 m/sec，包括单位 m/sec ，km/sec |
| Vy      | 默认单位时 m/sec，包括单位 m/sec ，km/sec |
| Vz      | 默认单位时 m/sec，包括单位 m/sec ，km/sec |

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Cartesian.X 6700000 m
```
