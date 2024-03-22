class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.string :task_start_hour
      t.string :task_start_minute, default: "00"
      t.string :task_end_hour
      t.string :task_end_minute, default: "00"
      t.date :due_date, default: nil
      t.string :task_frequency, default: "Never"
      
      t.timestamps
    end
  end
end
