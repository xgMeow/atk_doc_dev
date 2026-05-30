## CentralBodyCode

作用：设置摄动力中心天体

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value>
```
:::

::: info 说明
- CentralBodyName对应顺序：Mercury-0,Venus-1,Earth-2,Mars-3,Jupiter-4,Saturn-5,Uranus-6,Neptune-7,Pluto-8,Moon-9,Sun-10
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.CentralBodyCode 3
```
:::
