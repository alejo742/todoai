# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Generate sample tasks
Task.create!(
  name: "Meeting",
  start_time: 900,  # Representing 09:00 (9:00 AM) in military time
  end_time: 1030,   # Representing 10:30 (10:30 AM) in military time
  frequency: 1      # Example frequency value
)

Task.create!(
  name: "Lunch",
  start_time: 1200, # Representing 12:00 (12:00 PM) in military time
  end_time: 1300,   # Representing 13:00 (1:00 PM) in military time
  frequency: 2      # Example frequency value
)

Task.create!(
  name: "Presentation",
  start_time: 1500, # Representing 15:00 (3:00 PM) in military time
  end_time: 1630,   # Representing 16:30 (4:30 PM) in military time
  frequency: 3      # Example frequency value
)