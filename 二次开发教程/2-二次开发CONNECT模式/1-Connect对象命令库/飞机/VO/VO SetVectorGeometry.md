# VO SetVectorGeometry

## 作用

设置**飞机向量**。

## 语法

```
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

**注意**：`ReferenceCrdn` 必须使用双引号。

- 若 `{Option}` 输入为 `Add` 或 `Modify`，以下参数适用所有类型：

| 参数 | 说明 |
|------|------|
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

- 若 `{Option}` 输入为 `Add` 或 `Modify`，以下参数仅适用 Axes 和 Vector：

| 参数 | 说明 |
|------|------|
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

- 若 `{Option}` 输入为 `Add` 或 `Modify`，以下参数仅适用 Vector：

| 参数 | 说明 |
|------|------|
| `usetruescale` | `{On \| Off}` |

## 示例

::: details open **添加飞机向量**
```
VO */Aircraft/Aircraft1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改飞机向量**
```
VO */Aircraft/Aircraft1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
