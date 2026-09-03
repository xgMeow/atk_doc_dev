---
description: Based on the ATK Connect integrated client mode, this case uses command scripts to implement the design and analysis of a fast orbital maneuver plan transferring a spacecraft from a low Earth parking orbit (LEO) to a geosynchronous orbit (GEO).
thumbnail: /zh/综合案例/media/基于ATK.Connect模式的轨道快速转移的C++实现/image01-客户端界面.png
---

# Fast Orbit Transfer Implementation in C++ Based on the ATK.Connect Mode

## Introduction

This case implements the orbital maneuver planning design for a fast transfer from a near-Earth parking orbit (LEO orbit) with a radius of 6700 km to a geosynchronous orbit (GEO orbit) with a radius of 42164.197 km. The case is implemented using the integrated client based on the Connect mode.

This case uses the ATK software and, through the integrated client program, uses the interface functions to parse and transfer data so as to complete the case implementation. The integrated client interface is shown in the figure below:

![Client interface](../../zh/综合案例/media/基于ATK.Connect模式的轨道快速转移的C++实现/image01-客户端界面.png)

The interface functions set and modify the scenario properties through command input, completing the case construction, as shown in the figure below:

![Command Script dialog box](../../zh/综合案例/media/基于ATK.Connect模式的轨道快速转移的C++实现/image03-CommandScript对话框.png)

Running the client commands, the scenario track is shown in the figure below:

![Fast transfer track](../../zh/综合案例/media/基于ATK.Connect模式的轨道快速转移的C++实现/image04-快速转移轨道.png)

## Case Implementation

This case is implemented with the integrated client provided by the ATK software. Parameter settings can be performed by inputting multiple commands and running them together. The case implementation flow is as follows:

1. Start the ATK software, and in the <kbd>Integration</kbd> menu bar click the <kbd>Client</kbd> button to open the client dialog box;

2. In the <kbd>HOME</kbd> menu bar, click the <kbd>New</kbd> button, and input the parameter-setting commands in the【Command Script】dialog (the code can be copied directly into the dialog):

```lua
# (1) ATK与客户端连接
conID = atkOpen();

# (2) 想定新建并设置属性
atkConnect(conID, 'New', '/ Scenario FastTransfer');
atkConnect(conID, 'SetAnalysisTimePeriod', '* "5 Nov 2022 00:00:00.000" "8 Nov 2022 00:00:00.000"');

# (3) 卫星新建与轨道预报设置为机动规划
atkConnect(conID, 'New', '/ Satellite FastTransfer');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetProp');

# (4) 机动规划添加段（新添加卫星会有默认初始段）
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer InsertSegment MainSequence.SegmentList.- Propagate');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer InsertSegment MainSequence.SegmentList.- Target_Sequence');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer InsertSegment MainSequence.SegmentList.Target_Sequence.SegmentList.- Maneuver');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer InsertSegment MainSequence.SegmentList.- Propagate');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer InsertSegment MainSequence.SegmentList.- Target_Sequence');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer InsertSegment MainSequence.SegmentList.Target_Sequence1.SegmentList.- Maneuver');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer InsertSegment MainSequence.SegmentList.- Propagate');

# (5) 初始段属性设置
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.InitialState.Epoch "5 Nov 2022 00:00:00.000" UTCG');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.CoordinateType "Modified Keplerian"');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.sma 6700000 m');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.ecc 0');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.inc 0');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.RAAN 0');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.w 0');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.ta 0');

# (6) 第一个预报段属性设置
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate.SegmentColor -16776961');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate.StoppingConditions Duration');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.TripValue 7200 sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.Tolerance 0.0001 sec');

# (7) 第一个瞄准段中机动段属性设置
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Maneuver.ImpulsiveMnvr.ThrustAxes "Satellite VNC(Earth)"');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer AddMCSSegmentControl MainSequence.SegmentList.Target_Sequence.SegmentList.Maneuver ImpulsiveMnvr.Cartesian.X');

# (8) 第一个瞄准段添加属性页
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Target_Sequence.Profiles Differential_Corrector');
# 控制变量
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Active true');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X MaxStep 100 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Correction 2781.50365947627 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Perturbation 0.1 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Scale 1 m/sec');
# 约束条件
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Maneuver.Results "RadiusOfApoapsis"');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver StateCalcRadiusOfApoapsis Active true');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver StateCalcRadiusOfApoapsis Desired 84328394 m');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver StateCalcRadiusOfApoapsis Scale 1 m');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver StateCalcRadiusOfApoapsis tolerance 0.1 m');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver StateCalcRadiusOfApoapsis Weight 1');

# (9) 第二个预报段属性设置
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate1.SegmentColor -16711936');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate1.StoppingConditions Apoapsis');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate1.StoppingConditions.Apoapsis.Tolerance 1e-4 m');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate1.StoppingConditions.Apoapsis.RepeatCount 1');

# (10) 第二个瞄准段中机动段属性设置
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Target_Sequence1.SegmentList.Maneuver.SegmentColor -16711681');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Target_Sequence1.SegmentList.Maneuver.ImpulsiveMnvr.ThrustAxes "Satellite VNC(Earth)"');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer AddMCSSegmentControl MainSequence.SegmentList.Target_Sequence1.SegmentList.Maneuver ImpulsiveMnvr.Cartesian.X');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer AddMCSSegmentControl MainSequence.SegmentList.Target_Sequence1.SegmentList.Maneuver ImpulsiveMnvr.Cartesian.Z');

# (11) 第二个瞄准段添加属性页
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Target_Sequence1.Profiles Differential_Corrector');
# 控制变量
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Active true');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X MaxStep 300 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Correction 1581.97670664023 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Perturbation 0.1 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Scale 1 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.Z Active true');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.Z MaxStep 300 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.Z Correction 30.0 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.Z Perturbation 0.1 m/sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.Z Scale 1 m/sec');
# 约束条件
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Target_Sequence1.SegmentList.Maneuver.Results "Eccentricity" "CosineVFPA"');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcEccentricity Active true');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcEccentricity Desired 0');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcEccentricity Scale 1');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcEccentricity tolerance 0.1');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcEccentricity Weight 1');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcCosineVFPA Active true');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcCosineVFPA Desired 0');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcCosineVFPA Scale 1');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcCosineVFPA tolerance 0.1');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetMCSConstraintValue MainSequence.SegmentList.Target_Sequence1.Profiles.Differential_Corrector Maneuver StateCalcCosineVFPA Weight 1');

# (12) 第三个预报段属性设置
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate2.SegmentColor -65536');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate2.StoppingConditions Duration');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate2.StoppingConditions.Duration.TripValue 259200 sec');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer SetValue MainSequence.SegmentList.Propagate2.StoppingConditions.Duration.Tolerance 0.0001 sec');

# (13) 机动规划运行
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer RunMCS');
atkConnect(conID, 'Animate', '* Reset');
atkConnect(conID, 'Astrogator', '*/Satellite/FastTransfer ApplyAllProfileChanges');

# (14) 想定保存
atkConnect(conID, 'Save', '/ *');

# (15) ATK与客户端断开连接
atkClose(conID);
```

3. Click the <kbd>Save</kbd> button to save the "FastTransfer.atk" file;

4. Click the <kbd>Run</kbd> button to execute the commands. The case construction is then complete, the ATK software displays the scenario view, and the case track can be viewed.

In addition, the client can also perform parameter settings by inputting a single command and running it once. The case implementation flow is as follows:

1. Start the ATK software, and in the <kbd>Integration</kbd> menu bar click the <kbd>Client</kbd> button to open the client dialog box;

2. In the【Command Window】dialog, input the parameter-setting commands. They can be input as a single command or as multiple commands (the code can be copied into the dialog either as a single command or as multiple commands), and press the <kbd>Enter</kbd> key. The code to be executed is the same as above;

3. After the parameter settings, the case construction is complete, the ATK software displays the scenario view, and the case track can be viewed.

::: tip Note
If the track is not visible in the 3D view window after the script has finished running, click the <kbd>Reset</kbd> button in the <kbd>Start</kbd> toolbar at the top of the ATK interface to reset the animation state; the track will then be visible in the 3D view.
:::

## Case Display

**Input display**

Multiple commands are input in the【Command Script】dialog, as shown in the figure:

![Inputting multiple commands in the Command Script dialog](../../zh/综合案例/media/基于ATK.Connect模式的轨道快速转移的C++实现/image03-CommandScript对话框.png)

A single command or multiple commands are input in the【Command Window】dialog, as shown in the figure:

![Inputting commands in the Command Window dialog](../../zh/综合案例/media/基于ATK.Connect模式的轨道快速转移的C++实现/image06-CommandWindow对话框.png)

**Output display**

After clicking Run, the ATK software displays the scenario view, and the fast transfer track of the satellite is shown in 3D as follows:

![3D display of the satellite fast transfer track](../../zh/综合案例/media/基于ATK.Connect模式的轨道快速转移的C++实现/image07-卫星快速转移轨迹三维展示.png)

::: tip Note
If the fast transfer track is found to be incompletely displayed, in the ATK graphical interface right-click the "FastTransfer" satellite object, select <kbd>Properties</kbd>, enter the satellite object property settings interface, then select the【2D Graphics -> Track】settings and change the track type from【Time】to【All】.
:::
