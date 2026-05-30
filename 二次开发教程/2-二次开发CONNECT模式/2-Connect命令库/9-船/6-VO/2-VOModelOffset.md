## VOModelOffset

 

作用：设置船 3D 模型属性

用法： 
```
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

说明：目前`{OffsetOption}`包括属性 `Label` 和 `Translational`

举例：
```
VO */Ship/Ship1 ModelOffset Label On 10 20 30
```
```
VO */Ship/Ship1 ModelOffset Translational off
```
