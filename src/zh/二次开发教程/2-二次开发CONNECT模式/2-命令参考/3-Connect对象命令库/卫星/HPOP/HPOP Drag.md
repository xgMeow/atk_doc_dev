# HPOP Drag

## 作用

设置受力模型的大气阻力摄动。

## 语法

```atk-command
HPOP <ObjectPath> Drag {DragState} <Coeff> <AreaMassRatio> {"AtmDensModel"}
```

## 参数说明

| `AtmDensModel` | 参数 |
| :--- | :--- |
| `"1976 Standard"` | `N/A` |
| `"NRLMSISE 2000"`、`"MSISE 1990"`、`"MSIS 1986"` | `Manual <DailyF10.7> <AverageF10.7> <GeoMagIndex>` |

::: tip
使用此命令，必须保证轨道预报器类型为 HPOP
:::

## 示例

::: details open **设置大气阻力摄动**
```
HPOP */Satellite/Satellite1 Drag on 30.01 132.0 "MSISE 1990" Manual 120 105 3.5
```
:::
