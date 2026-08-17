# VO SetVectorGeometry

## 作用

设置**船向量**。

## 语法

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## 参数说明

### {Option} 取值

| {Option} | `<Parameters>` |
| -- | -- |
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

### DisplayOption 通用取值（Add / Modify 适用所有类型）

| {DisplayOption} | `<DisplayValue>` |
| -- | -- |
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

### DisplayOption 取值（Add / Modify，仅适用 Axes 和 Vector）

| {DisplayOption} | `<DisplayValue>` |
| -- | -- |
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

### DisplayOption 取值（Add / Modify，仅适用 Vector）

| {DisplayOption} | `<DisplayValue>` |
| -- | -- |
| `usetruescale` | `{On \| Off}` |

## 补充说明

- `ReferenceCrdn` 必须使用双引号。

## 示例

::: details open **添加向量**
```
VO */Ship/Ship1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改向量**
```
VO */Ship/Ship1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
