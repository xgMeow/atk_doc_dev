# Define

## 作用

设置恒星类型及其参数

## 语法

```atk-command
Define <StarObjectPath> {StarOption} <Parameters>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `{StarOption}` | 恒星选项类型，取值见下方 |

### {StarOption} 取值

| 取值 | 说明 |
|------|------|
| `Position` | `<RightAscen> <Declination>` |
| `Motion` | `<RightAscen> <Declination>` |
| `Magnitude` | `<Magnitude>` |
| `Parallax` | `<Parallax>` |

## 示例

::: details open **定义恒星位置**
```
Define */Star/Star1 Position 20.0 48.0
```
:::
