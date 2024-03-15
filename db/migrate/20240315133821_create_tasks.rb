class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :start_time
      t.string :end_time
      t.integer :frequency, default: 0
      
      t.timestamps
    end
  end
end
