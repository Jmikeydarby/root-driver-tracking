- Accept input from either stdin or as a file name given in command license

- Each line will start with either "Driver" or "Trip"

- Format: "Driver DriverName" and "Trip DriverName StartTime(00:00) EndTime(23:59) Distance"

-- 24 Hour clock
-- Start time will always be before end time.
-- Discard any trips that average less than 5mph or more than 100 mph

- Generate a report containing each driver, miles driven, and average speed

- Sort by most miles driven to least
