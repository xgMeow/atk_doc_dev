## VOModelOffset

- 作用：设置卫星 3D 模型偏移属性
- 用法： 
```
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```
- 说明：目前`{OffsetOption}`包括属性 `Label` 和 `Translational`
::: note 举例
```
VO */Satellite/Satellite1 ModelOffset Label On 10 20 30
```
```
VO */Satellite/Satellite1 ModelOffset Translational off
```
:::
