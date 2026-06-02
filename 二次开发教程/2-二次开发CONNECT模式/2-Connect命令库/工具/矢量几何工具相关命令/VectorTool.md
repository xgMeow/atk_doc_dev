# VectorTool

作用：自定义坐标系以及用于构建坐标系的元素。

用法：

```
VectorTool <ScenarioPath> {Options} 
```


| Options                               | 说明                |
| ------------------------------------- | ------------------  |
| `{Create \| Modify \| Delete}`            | 有关使用 VectorTool 命令创建、修改和删除向量几何组件及模板的详细信息，请参阅以下链接。[VectorTool Angle](./17-工具.md#vectortool-angle)、[VectorTool Axes](./17-工具.md#vectortool-axes)、[VectorTool Plane](./17-工具.md#vectortool-plane)、[VectorTool Point](./17-工具.md#vectortool-point)、[VectorTool System](./17-工具.md#vectortool-system)、[VectorTool Vector](./17-工具.md#vectortool-vector)      | 


::: note 举例
```
VectorTool * Satellite/Satellite1 Create Plane SatPlane2 "Quadrant"
```
:::
