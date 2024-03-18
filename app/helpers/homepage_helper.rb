module HomepageHelper
    def format_time(time_str)
        # Split the time string into hours and minutes
        hours, minutes = time_str.divmod(100)
      
        # Format the time as HH:MM
        "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}"
    end
end