# Set Position

## 作用

设置地面站位置属性。

## 语法

```atk-command
SetPosition <ObjectPath> [{Type}] {CoordType} <Parameters>
```

## 参数说明

| 参数 | 说明 |
| --------- | --------------------------- |
| `Cartesian` | `<X> <Y> <Z>`，输入默认单位为 m |
| `Geodetic` | `<Lat> <Lon> {<Altitude> \| Terrain} [MSL]`，目前仅支持输入纬度、经度、高度 |

## 示例

::: details open **设置地理坐标位置**
```
SetPosition */Facility/Facility1 Geodetic 37.9 -75.5 0.0
```
:::
