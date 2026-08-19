---
description: Create an RPO teardrop fly-around example using the secondary development Connect mode, demonstrating operations such as target and servicer satellite setup, and teardrop fly-around segment parameter configuration.
---

# RPO

Through the secondary development Connect mode, create an RPO teardrop fly-around example. The specific details are the same as "Example 3-12 - RPO Example". ATK must remain open. The specific command categories include:

1. Connecting to ATK.
2. Creating a new scenario and setting its properties.
3. Creating the target satellite and setting its properties.
4. Creating the servicer satellite and setting its properties.
5. Inserting the RPO segment and configuring the orbit propagator.
6. Teardrop fly-around segment parameters.
7. Running the mission.
8. Viewing report data.
9. Saving the scenario and disconnecting from ATK.

## Script Demonstration

### Connecting to ATK

```mixcode
{C:1, Connect to ATK}
conID = atkOpen()
```

### Creating a New Scenario and Setting Its Properties

```mixcode
{C:2, Create the scenario}
atkConnect(conID, {S:New}, {S:/ Scenario Teardrop})
{C:Set the simulation time period}
atkConnect(conID, {S:SetAnalysisTimePeriod}, {S:* "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000"})
{C:Initialize the simulation}
atkConnect(conID, {S:Animate}, {S:* Reset})
```

### Creating the Target Satellite and Setting Its Properties

```mixcode
{C:3, Create the target satellite object}
atkConnect(conID, {S:New}, {S:/ Satellite WorkSatellite})
{C:Set the related parameters}
atkConnect(conID, {S:SetState}, {S:*/Satellite/WorkSatellite Classical HPOP "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000" 60 J2000 "2007-03-08 00:00:00.000" 42164000 0 0 0 0 0})
```

### Creating the Servicer Satellite and Setting Its Properties

```mixcode
{C:4, Create the service satellite object}
atkConnect(conID, {S:New}, {S:/ Satellite ServiceSatellite})
{C:Set the orbit propagator to Maneuver Planning}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetProp})

{C:Set the orbital elements with the Keplerian coordinate type}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.sma 6700000 m})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.ecc 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.inc 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.RAAN 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.w 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.TA 0})
```

### Inserting the RPO Segment and Configuring the Orbit Propagator

```mixcode
{C:5, Insert an RPO segment}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite InsertSegment MainSequence.SegmentList.- RPOTearDrop})
{C:Advanced settings: configure the orbit propagator parameters}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.CenterBody "Earth"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.GravityModel "WGS84"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyGravity "Sun, Moon"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyModel "Point-Mass Model"})
{C:Enable atmospheric drag perturbation and select the atmospheric model}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericDrag "On"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericModel "NRLMSISE00"})
{C:Enable solar radiation pressure}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolarPressure "On"})
```

### Teardrop Fly-Around Segment Parameters

```mixcode
{C:6, Set the teardrop fly-around segment parameters}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.NumCircles 5})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.StartDistance -300})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ManeuverDistance -800})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.WaitTime 21600}) {C:Waiting time is 21600 seconds}
{C:Set the maximum true anomaly change}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.MaxDeltaTrueAnomaly 5})
{C:Set the solution algorithm to Sequential Quadratic Programming}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolveMethod 2})
{C:Set the reference spacecraft to the target satellite}
atkConnect(conID, {S:Reference},  {S:*/Satellite/ServiceSatellite SetRefSatellite */Satellite/WorkSatellite})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.Reference "Satellite/WorkSatellite"})
```

### Running the Mission

```mixcode
{C:7, Run the mission control sequence}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite RunMCS})
atkConnect(conID, {S:Animate}, {S:* Reset})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite ApplyAllProfileChanges})
```

### Viewing Report Data

```mixcode
{C:8, Print and view the report data}
atkConnect(conID, {S:Report_RM}, {S:*/Satellite/ServiceSatellite Style "Position" TimePeriod "8 Mar 2007 00:00:00.000" "13 Mar 2007 00:00:00.000"})
```

### Saving the Scenario and Disconnecting from ATK

```mixcode
{C:9, Save the file and disconnect}
atkConnect(conID, {S:Save}, {S:/ *})
atkClose(conID)
```

## Report Data Results

The result of this example is: successfully performing a teardrop fly-around. The result is shown below:

![Relative Trajectory](../../../zh/02-案例教程/8-二次开发案例/media/12RPO案例/image_12_1.png)

## Complete Script

```mixcode
{C:1, Connect to ATK}
conID = atkOpen()

{C:2, Create a new scenario named "Teardrop"}
atkConnect(conID, {S:New}, {S:/ Scenario Teardrop})
{C:Set the simulation time period}
atkConnect(conID, {S:SetAnalysisTimePeriod}, {S:* "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000"})
{C:Initialize the simulation}
atkConnect(conID, {S:Animate}, {S:* Reset})

{C:3, Create the target satellite object}
atkConnect(conID, {S:New}, {S:/ Satellite WorkSatellite})
{C:Set the related parameters}
atkConnect(conID, {S:SetState}, {S:*/Satellite/WorkSatellite Classical HPOP "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000" 60 J2000 "2007-03-08 00:00:00.000" 42164000 0 0 0 0 0})

{C:4, Create the service satellite object}
atkConnect(conID, {S:New}, {S:/ Satellite ServiceSatellite})
{C:Set the orbit propagator to Maneuver Planning}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetProp})

{C:Set the orbital elements with the Keplerian coordinate type}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.sma 6700000 m})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.ecc 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.inc 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.RAAN 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.w 0})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.TA 0})

{C:5, Insert an RPO segment}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite InsertSegment MainSequence.SegmentList.- RPOTearDrop})
{C:Advanced settings: configure the orbit propagator parameters}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.CenterBody "Earth"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.GravityModel "WGS84"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyGravity "Sun, Moon"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyModel "Point-Mass Model"})
{C:Enable atmospheric drag perturbation and select the atmospheric model}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericDrag "On"})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericModel "NRLMSISE00"})
{C:Enable solar radiation pressure}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolarPressure "On"})

{C:6, Set the teardrop fly-around segment parameters}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.NumCircles 5})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.StartDistance -300})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ManeuverDistance -800})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.WaitTime 21600})
{C:Set the maximum true anomaly change}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.MaxDeltaTrueAnomaly 5})
{C:Set the solution algorithm to Sequential Quadratic Programming}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolveMethod 2})
{C:Set the reference spacecraft to the target satellite}
atkConnect(conID, {S:Reference},  {S:*/Satellite/ServiceSatellite SetRefSatellite */Satellite/WorkSatellite})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.Reference "Satellite/WorkSatellite"})

{C:7, Run the mission control sequence}
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite RunMCS})
atkConnect(conID, {S:Animate}, {S:* Reset})
atkConnect(conID, {S:Astrogator}, {S:*/Satellite/ServiceSatellite ApplyAllProfileChanges})

{C:8, Print and view the report data}
atkConnect(conID, {S:Report_RM}, {S:*/Satellite/ServiceSatellite Style "Position" TimePeriod "8 Mar 2007 00:00:00.000" "13 Mar 2007 00:00:00.000"})

{C:9, Save the file and disconnect}
atkConnect(conID, {S:Save}, {S:/ *})
atkClose(conID)
```