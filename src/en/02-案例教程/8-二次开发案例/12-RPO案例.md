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

<mix-code lang="python">
# 1, Connect to ATK
conID = atkOpen()
</mix-code>

### Creating a New Scenario and Setting Its Properties

<mix-code lang="python">
# 2, Create the scenario
atkConnect(conID, 'New', '/ Scenario Teardrop')
# Set the simulation time period
atkConnect(conID, 'SetAnalysisTimePeriod', '* "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000"')
# Initialize the simulation
atkConnect(conID, 'Animate', '* Reset')
</mix-code>

### Creating the Target Satellite and Setting Its Properties

<mix-code lang="python">
# 3, Create the target satellite object
atkConnect(conID, 'New', '/ Satellite WorkSatellite')
# Set the related parameters
atkConnect(conID, 'SetState', '*/Satellite/WorkSatellite Classical HPOP "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000" 60 J2000 "2007-03-08 00:00:00.000" 42164000 0 0 0 0 0')
</mix-code>

### Creating the Servicer Satellite and Setting Its Properties

<mix-code lang="python">
# 4, Create the service satellite object
atkConnect(conID, 'New', '/ Satellite ServiceSatellite')
# Set the orbit propagator to Maneuver Planning
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetProp')

# Set the orbital elements with the Keplerian coordinate type
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.sma 6700000 m')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.ecc 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.inc 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.RAAN 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.w 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.TA 0')
</mix-code>

### Inserting the RPO Segment and Configuring the Orbit Propagator

<mix-code lang="python">
# 5, Insert an RPO segment
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite InsertSegment MainSequence.SegmentList.- RPOTearDrop')
# Advanced settings: configure the orbit propagator parameters
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.CenterBody "Earth"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.GravityModel "WGS84"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyGravity "Sun, Moon"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyModel "Point-Mass Model"')
# Enable atmospheric drag perturbation and select the atmospheric model
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericDrag "On"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericModel "NRLMSISE00"')
# Enable solar radiation pressure
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolarPressure "On"')
</mix-code>

### Teardrop Fly-Around Segment Parameters

<mix-code lang="python">
# 6, Set the teardrop fly-around segment parameters
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.NumCircles 5')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.StartDistance -300')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ManeuverDistance -800')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.WaitTime 21600') # Waiting time is 21600 seconds
# Set the maximum true anomaly change
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.MaxDeltaTrueAnomaly 5')
# Set the solution algorithm to Sequential Quadratic Programming
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolveMethod 2')
# Set the reference spacecraft to the target satellite
atkConnect(conID, 'Reference',  '*/Satellite/ServiceSatellite SetRefSatellite */Satellite/WorkSatellite')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.Reference "Satellite/WorkSatellite"')
</mix-code>

### Running the Mission

<mix-code lang="python">
# 7, Run the mission control sequence
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite RunMCS')
atkConnect(conID, 'Animate', '* Reset')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite ApplyAllProfileChanges')
</mix-code>

### Viewing Report Data

<mix-code lang="python">
# 8, Print and view the report data
atkConnect(conID, 'Report_RM', '*/Satellite/ServiceSatellite Style "Position" TimePeriod "8 Mar 2007 00:00:00.000" "13 Mar 2007 00:00:00.000"')
</mix-code>

### Saving the Scenario and Disconnecting from ATK

<mix-code lang="python">
# 9, Save the file and disconnect
atkConnect(conID, 'Save', '/ *')
atkClose(conID)
</mix-code>

## Report Data Results

The result of this example is: successfully performing a teardrop fly-around. The result is shown below:

![Relative Trajectory](../../../zh/02-案例教程/8-二次开发案例/media/12RPO案例/image_12_1.png)

## Complete Script

<mix-code lang="python">
# 1, Connect to ATK
conID = atkOpen()

# 2, Create a new scenario named "Teardrop"
atkConnect(conID, 'New', '/ Scenario Teardrop')
# Set the simulation time period
atkConnect(conID, 'SetAnalysisTimePeriod', '* "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000"')
# Initialize the simulation
atkConnect(conID, 'Animate', '* Reset')

# 3, Create the target satellite object
atkConnect(conID, 'New', '/ Satellite WorkSatellite')
# Set the related parameters
atkConnect(conID, 'SetState', '*/Satellite/WorkSatellite Classical HPOP "2007-03-08 00:00:00.000" "2007-03-13 00:00:00.000" 60 J2000 "2007-03-08 00:00:00.000" 42164000 0 0 0 0 0')

# 4, Create the service satellite object
atkConnect(conID, 'New', '/ Satellite ServiceSatellite')
# Set the orbit propagator to Maneuver Planning
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetProp')

# Set the orbital elements with the Keplerian coordinate type
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.sma 6700000 m')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.ecc 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.inc 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.RAAN 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.w 0')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.TA 0')

# 5, Insert an RPO segment
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite InsertSegment MainSequence.SegmentList.- RPOTearDrop')
# Advanced settings: configure the orbit propagator parameters
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.CenterBody "Earth"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.GravityModel "WGS84"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyGravity "Sun, Moon"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ThreeBodyModel "Point-Mass Model"')
# Enable atmospheric drag perturbation and select the atmospheric model
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericDrag "On"')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.AtmosphericModel "NRLMSISE00"')
# Enable solar radiation pressure
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolarPressure "On"')

# 6, Set the teardrop fly-around segment parameters
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.NumCircles 5')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.StartDistance -300')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.ManeuverDistance -800')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.WaitTime 21600')
# Set the maximum true anomaly change
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.MaxDeltaTrueAnomaly 5')
# Set the solution algorithm to Sequential Quadratic Programming
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.SolveMethod 2')
# Set the reference spacecraft to the target satellite
atkConnect(conID, 'Reference',  '*/Satellite/ServiceSatellite SetRefSatellite */Satellite/WorkSatellite')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite SetValue MainSequence.SegmentList.RPOTearDrop.Reference "Satellite/WorkSatellite"')

# 7, Run the mission control sequence
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite RunMCS')
atkConnect(conID, 'Animate', '* Reset')
atkConnect(conID, 'Astrogator', '*/Satellite/ServiceSatellite ApplyAllProfileChanges')

# 8, Print and view the report data
atkConnect(conID, 'Report_RM', '*/Satellite/ServiceSatellite Style "Position" TimePeriod "8 Mar 2007 00:00:00.000" "13 Mar 2007 00:00:00.000"')

# 9, Save the file and disconnect
atkConnect(conID, 'Save', '/ *')
atkClose(conID)
</mix-code>