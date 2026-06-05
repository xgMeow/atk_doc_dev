# AccessMulti Assets

## 作用

指定批量可见性计算的**来源对象**（观测者），可同时指定多个来源。

## 语法

```
AccessMulti / Assets < AssetObjectPath > < AssetObjectPath > …
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `< AssetObjectPath >` | 对象路径，可指定多个 |

## 补充说明

- 本命令是 AccessMulti 框架的**配置步骤**，用于指定"谁来观测"。
- 来源对象（Assets）通常是卫星传感器、探测器等具有观测能力的实体。
- 配合使用：`AccessMulti / Objects` 指定目标，`AccessMulti / Interval` 指定时间，`AccessMulti / Access Compute` 执行计算。

## 示例

::: details open **将多个卫星传感器的可见性设置为可访问。**

```
AccessMulti / Assets */Satellite/Satellite1/Sensor/Sensor1 */Satellite/Satellite2/Sensor/Sensor1 */Satellite/Satellite3/Sensor/Sensor1
```

:::
