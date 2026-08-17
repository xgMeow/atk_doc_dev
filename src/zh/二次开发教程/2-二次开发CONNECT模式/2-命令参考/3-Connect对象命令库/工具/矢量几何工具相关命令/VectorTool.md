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
