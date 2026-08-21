# SetState TLE

## 作用

设置卫星对象 TLE 状态。

## 语法

```atk-command
SetState <SatObjectPath> TLE "<TLECard1>" "<TLECard2>" [{Options}]
```

## 参数说明

| `Options` | 说明 |
| --- | --- |
| `TimePeriod {TimeInterval}` | 如果不输入时间段，则默认使用 `TLE` 数据中的时间。`TimeInterval` 输入格式请查看[常用日期/时间格式](../../../2-参数值格式/日期时间格式.md) |
| `TimeStep <StepSize>` | 默认单位是秒 |
| `Routine <PropName>` | 输入该命令设置不同的 `SGP4` 例程 |
| `NoProp` | 若输入此命令，则卫星状态会被设置但不会被预报 |

::: tip 注意
- 每行 TLE 数据必须有 69 的字符长度，请不要忽略任何一个空格。
- 轨道历元设置暂无作用，以场景时间为准
:::

## 示例

::: details open **设置卫星 TLE 状态**
```
SetState */Satellite/Satellite1 TLE "1 00005U 58002B   21084.26048267 -.00000099  00000-0 -13258-3 0  9992" "2 00005  34.2472  83.1377 1847466 176.0822 185.6710 10.84848342235752"
```
:::
