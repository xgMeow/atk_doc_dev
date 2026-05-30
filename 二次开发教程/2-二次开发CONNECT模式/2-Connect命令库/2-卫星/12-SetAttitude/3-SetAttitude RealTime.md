## SetAttitude RealTime

- 作用：设置接收客户端输入实时数据并设置星历数据
- 用法：
```
SetAttitude <ObjectPath> RealTime {LookAheadMethod} [<LookAheadDuration> <LookBehindDuration>]
```
- 说明: 
    - `{LookAheadMethod}` 包括属性 `Extrapolate`, `Hold`
    - `<LookAheadDuration>` 用来计算姿态数据点的长度
    - `<LookBehindDuration>` 用来计算姿态数据点的保留长度


::: note 举例
```
SetAttitude */Satellite/xxxx RealTime Extrapolate 300 120
```
:::
