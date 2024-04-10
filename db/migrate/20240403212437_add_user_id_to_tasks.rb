class AddUserIdToTasks < ActiveRecord::Migration[7.1]
  def change
    add_reference :tasks, :user, null: false, foreign_key: true unless column_exists?(:tasks, :user_id)
  end
end
