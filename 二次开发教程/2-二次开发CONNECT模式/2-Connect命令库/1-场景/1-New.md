# New

作用：新建场景或新建对象

用法：
```
New <ApplicationPath> <ClassPath> <NewObjectName> {NewOptions}
```

说明：`NewOptions` 包括属性 `NoDefault`，`Ignore` 和 `CentralBody <CBName>`

::: note 举例

```
New / Scenario See_DC
```

```
New / */Satellite Satellite1 CentralBody Earth
```

```
New / */Satellite/Satellite1/Sensor Sensor1
```
:::
