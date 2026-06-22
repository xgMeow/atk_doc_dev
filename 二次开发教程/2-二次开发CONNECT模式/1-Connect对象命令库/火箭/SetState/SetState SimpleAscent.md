# SetState SimpleAscent

## 作用

设置火箭对象简单垂直状态

## 语法

```atk-command
SetState <LVObjectPath> SimpleAscent {StartTime} [{StopTime}] <StepSize> Geodetic <LaunchLat> <LaunchLon> <LaunchAlt> <BurnoutVelocity> <BurnoutLat> <BurnoutLon> <BurnoutAlt>
```

## 示例

::: details open **设置火箭简单垂直上升状态**
```
SetState */LaunchVehicle/LaunchVehicle1 SimpleAscent "1 Oct 2000 05:00:00.00" 60.0 Geodetic 28 -80 0 7.7 44 -3.5 300
```
:::
