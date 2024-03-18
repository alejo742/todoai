class HomepageController < ApplicationController
  def index
    @task = Task.new
    @tasks = Task.all
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      flash[:success] = "Task created successfully."
      redirect_to root_path
    else
      flash[:error] = "Failed to create task."
      render :index # Render the index view again with the error messages
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      flash[:success] = "Task deleted successfully."
      redirect_to root_path
    else
      flash[:error] = "Failed to delete task."
      render :index # Render the index view again with the error messages
    end
  end

  private 
  
  def task_params
    params.require(:task).permit(:task_name, :task_start_hour, :task_start_minute, :task_end_hour, :task_end_minute, :task_frequency)
  end
end
