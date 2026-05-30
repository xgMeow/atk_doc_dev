## VO Model

- 作用：设置火箭 3D 模型属性
- 用法： 
```
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

| Option           | Value       | 说明                |
| ---------------- | ----------- | ------------------  |
| Show             | `{On \| Off}` | 是否显示模型       |
| File             | `<ModelFile>` | 模型文件路径       |

::: note 举例
```
VO */LaunchVehicle/LaunchVehicle1 Model Show Off
```
:::
