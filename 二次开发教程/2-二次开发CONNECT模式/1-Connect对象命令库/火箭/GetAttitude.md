# GetAttitude

## 作用

获得火箭的姿态类型

## 语法

```atk-command
GetAttitude <ObjectPath> {AttOption}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `AttOption` | 可选 `Profile ConnectName` 或 `Profile LongName` |

## 示例

::: details open **获取火箭姿态类型**
```
GetAttitude */LaunchVehicle/LaunchVehicle1 Profile LongName
```
:::
