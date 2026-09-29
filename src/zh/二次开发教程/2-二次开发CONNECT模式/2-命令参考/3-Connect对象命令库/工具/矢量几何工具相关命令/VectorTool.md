# VectorTool

## 作用

自定义**坐标系**以及用于构建坐标系的元素。

## 语法

```atk-command
VectorTool <ScenarioPath> {Options} 
```

## 参数说明

| 参数 | 说明 |
| ------------------------------------- | ------------------  |
| `{Create \| Modify \| Delete}` | 有关使用 `VectorTool` 命令创建、修改和删除向量几何组件及模板的详细信息，请参阅以下链接。[VectorTool Angle](./VectorTool%20Angle.md)、[VectorTool Axes](./VectorTool%20Axes.md)、[VectorTool Plane](./VectorTool%20Plane.md)、[VectorTool Point](./VectorTool%20Point.md)、[VectorTool System](./VectorTool%20System.md)、[VectorTool Vector](./VectorTool%20Vector.md) |

## 示例

::: details open **创建平面组件**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlane2 "Quadrant"
```
:::

## 注意事项

> 注意：本手册案例部分 VGT 组件需要预先创建，再在脚本中引用；未创建直接运行脚本会报错。组件路径大小写敏感。

```
atkConnect(conID, 'VectorTool',
'* Satellite/Satellite1 Create Angle SatAngleBtnPlane "Between Planes"
"CentralBody/Earth PlaneNormal"
"Satellite/Satellite2 PlaneQuadrant"')
```

## 修改示例

```
atkConnect(conID,'VectorTool','* Satellite/Satellite1 Modify Axes SatAxes1 "Aligned and Constrained" X "CentralBody/Earth ICRF.Axes.X" Y "Satellite/Satellite2 VVLH.Axes.Y"');
VectorTool * Satellite/Satellite1 Modify Angle SatAngle1 "Between Vectors" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y"
```
