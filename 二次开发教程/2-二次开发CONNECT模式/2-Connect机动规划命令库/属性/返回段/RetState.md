# RetState

## 作用

设置该返回段是否返回控制变量到它的父级段

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.RetState {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Value` | 包括属性 `Enable` 和 `Disable` |

### `Value` 取值

| 取值 | 说明 |
|------|------|
| `Enable` | 启用返回控制变量 |
| `Disable` | 禁用返回控制变量 |

## 示例

::: details open **设置 RetState 属性值为 Enable**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Return.RetState Enable
```
:::
