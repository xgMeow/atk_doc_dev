# Window3D

作用：创建、移除三维窗口

用法：
```
Window3D <ScenarioPath> {Window3dOptions}
```
`{Window3dOptions}`说明：

- `CreateWindow {Normal | Attitude} [Path <TruncObjectPath>] [Title "<WindowTitle>"]` 使用默认设置打开一个三维窗口
 
- `Remove` 移除一个三维窗口
 
举例：
```
Window3D / CreateWindow Normal
```
