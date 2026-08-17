# New

## 作用

新建场景或新建对象

## 语法

```atk-command
New <ApplicationPath> <ClassPath> <NewObjectName> {NewOptions}
```

## 补充说明

- `{NewOptions}` 包括属性 `NoDefault`、`Ignore` 和 `CentralBody <CBName>`

## 示例

::: details open **新建场景**

```
New / Scenario See_DC
```

:::

::: details open **新建卫星对象**

```
New / */Satellite Satellite1 CentralBody Earth
```

:::

::: details open **新建传感器对象**

```
New / */Satellite/Satellite1/Sensor Sensor1
```

:::
