class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :start_time
      t.integer :end_time
      t.integer :frequency, default: 0
      
      t.timestamps
    end
  end
end
