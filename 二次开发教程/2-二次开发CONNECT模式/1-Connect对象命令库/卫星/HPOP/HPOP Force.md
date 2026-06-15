# HPOP Force

## 作用

设置受力模型的地球引力、太阳光压、三体引力。

## 语法

```
HPOP <ObjectPath> Force {ForceModel} <ModelParameters>
```

## 参数说明

::: details ForceModel 参数说明（点击展开）

| `ForceModel` | `ModelParameters` | 说明 |
| --- | --- | --- |
| `SRP` | `{On \| Off} Model Spherical <Cr> <AMRatio>` | 如果输入的是 off，则不会设置 Options，如果输入的是 on，Options 应当包括太阳光压和光压面积。 |
| `Gravity` | `"<FilePath>" <MaxDegreeValue> <MaxOrderValue>` | `<MaxDegreeValue>` 和 `<MaxOrderValue>` 输入值在 0-100.0。另外输入值必须小于选择文件的最大阶数和最大次数。 |
| `ThirdBodyGravity` | `<ThirdBodyGravityName> <ThirdBodyGravityUse> {PointMass \| GravField <Model>} <Order> <Degree> <GravityValue>` | `GravField <Model>` 详细内容请看下方类型说明 |

:::

::: note 类型说明

三体引力模型:

对于地球 EGM96,EGM2008,GEMT1,GGM01C,GGM02C,JGM2,JGM3,WGS84,WGS84_EGM96

对于月球 GLGM2,LP75D,LP75G,LP100J,LP100K,LP150Q,LP165P

对于火星 GMM1,GMM2B,Mars50c,MRO110C

对于水星 lcarus1987,ZonalsToJ4

对于金星 MGNP180U,ZonalsToJ4

对于木星 JUP230,jup230Spice,ZonalsToJ4

对于土星 Astron2004,sat252Spice,ZonalsToJ4

对于天王星 ura083Spice,ZonalsToJ4

对于海王星 AstronAstro1991,nep016_6Spice,ZonalsToJ4

对于冥王星 plu017Spice,ZonalsToJ4

ThirdBodyGravityName 包括：Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune,Pluto,Moon,Sun
:::

::: tip
使用此命令，必须保证轨道预报器类型为 HPOP
:::

## 示例

::: details open **设置太阳光压受力模型**
```
HPOP */Satellite/Satellite1 Force SRP On Model Spherical 3.2 221.0
```
:::

::: details open **设置地球引力受力模型**
```
HPOP */Satellite/Satellite1 Force Gravity "EGM96" 2.3 1.2
```
:::

::: details open **设置三体引力受力模型**
```
HPOP */Satellite/Satellite1 Force ThirdBodyGravity Mars on GravField GMM2B 5 6 42828371901284
```
:::
