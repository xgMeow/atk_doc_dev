# Propagator

## 作用

设置轨道预报器参数

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ForceModel.{Parameters} {Value}
```

## 参数说明

| 参数 | 取值 | 说明 |
| ---- | ---- | ---- |
| `Gravity.GravModel` | 如下类型说明 | 引力场模型 |
| `Gravity.MaxDegree` | | 引力阶数 |
| `Gravity.MaxOrder` | | 引力次数 |
| `Drag.UseDrag` | {true \| false} | 是否采用大气阻力摄动 |
| `Drag.AtmModel` | | 大气阻力摄动大气模型 |
| `Drag.UseFluxGeoFile` | | 是否采用太阳辐射和地磁文件 |
| `Drag.F10p7` | | 平均 F10.7 |
| `Drag.DailyF10p7` | | 每日 F10.7 |
| `Drag.Ap` | | 地磁指数 AP |
| `SRP.UseSRP` | | 是否采用太阳光压摄动 |
| `ThirdBodies.CentralBodyName.UseGravity` | | 是否采用当前中心天体三体摄动 |
| `ThirdBodies.CentralBodyName.Gm` | | 当前中心天体引力值 |
| `ThirdBodies.CentralBodyName.Degree` | | 当前中心天体阶数 |
| `ThirdBodies.CentralBodyName.Order` | | 当前中心天体次数 |
| `ThirdBodies.CentralBodyName.GravModel` | | 当前中心天体模型 |
| `ThirdBodies.CentralBodyName.GravType` | | 当前中心天体类型 |

::: note 类型说明
<br>
引力场模型 : <br><br>
对于地球  EGM96,EGM2008,GEMT1,GGM01C,GGM02C,JGM2,JGM3,WGS84,WGS84_EGM96<br><br>
对于月球  GLGM2,LP75D,LP75G,LP100J,LP100K,LP150Q ,LP165P <br><br>
对于火星GMM1,GMM2B,Mars50c,MRO110C <br><br>
对于水星  lcarus1987,ZonalsToJ4 <br><br>
对于金星  MGNP180U,ZonalsToJ4 <br><br>
对于木星  JUP230,jup230Spice,ZonalsToJ4 <br><br>
对于土星  Astron2004,sat252Spice,ZonalsToJ4 <br><br>
对于天王星  ura083Spice,ZonalsToJ4 <br><br>
对于海王星  AstronAstro1991,nep016_6Spice,ZonalsToJ4 <br><br>
对于冥王星  plu017Spice,ZonalsToJ4 <br><br>
对应输入序号，从0开始，例如：
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.ForceModel.Gravity.GravModel EGM96
```
<br><br>CentralBodyName包括：Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune,Pluto,Moon,Sun
:::

::: note 注意：
获得此属性值暂未实现
:::

## 示例

::: details open **设置引力场模型为 EGM96**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.LambertTarget.ForceModel.Gravity.GravModel EGM96
```
:::
