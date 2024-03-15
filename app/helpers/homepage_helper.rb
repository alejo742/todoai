module HomepageHelper
    def format_time(time_str)
        # Insert a colon between the hour and minute parts of the time string
        time_str.insert(-3, ":")
    end
end
