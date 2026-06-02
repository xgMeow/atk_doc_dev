# Set Mass

- 作用：设置卫星质量与转动惯量矩阵

- 用法： 
```
SetMass <SatObjectPath> {DefineOption} <Parameters>
```

- 说明：

 

| DefineOption | Parameters                              | 说明          |
| ------------ | -------------------------------------   |--------------|
| Value        | `<Mass>`                                | 设置质量      |
| Matrix       | `<lxx> <lxy>  <lyy> <lxz> <lyz>  <lzz>` | 设置转动惯量  |

::: note 举例
```
SetMass */Satellite/Satellite1 Matrix 1290.0 1291.0 1292.0 1293.0 1294.0 1295.0
```
:::
