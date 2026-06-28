# GetAttitude

## 作用

获得卫星的姿态类型。

## 语法

```atk-command
GetAttitude <ObjectPath> {AttOption}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `AttOption` | 包括属性为 `Profile ConnectName`、`Profile LongName` |

## 示例

::: details open **获得卫星的姿态类型**
```
GetAttitude */Satellite/Satellite1 Profile LongName
```
:::
