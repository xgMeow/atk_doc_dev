# SetState SimpleAscent

- 作用：设置火箭对象简单垂直状态
- 用法： 
```
SetState <LVObjectPath> SimpleAscent {StartTime} [{StopTime}] <StepSize> Geodetic <LaunchLat> <LaunchLon> <LaunchAlt> <BurnoutVelocity> <BurnoutLat> <BurnoutLon> <BurnoutAlt>
```

::: note 举例
```
SetState */LaunchVehicle/LaunchVehicle1 SimpleAscent "1 Oct 2000 05:00:00.00" 60.0 Geodetic 28 -80 0 7.7 44 -3.5 300
```
:::
