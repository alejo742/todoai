class HomepageController < ApplicationController
  before_action :require_login

  def index
    @task = Task.new
    @tasks = current_user.tasks.where("due_date IS NULL OR due_date = ?", Date.today)
  end

  def create
    @task = current_user.tasks.build(task_params)
    if @task.save
      flash[:success] = "Task created successfully."
      redirect_to root_path
    else
      flash[:error] = "Failed to create task."
      render :index
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    if @task.destroy
      flash[:success] = "Task deleted successfully."
      redirect_to root_path
    else
      flash[:error] = "Failed to delete task."
      render :index
    end
  end

  def update
    @task = current_user.tasks.find(params[:id])
    if @task.update(task_params)
      flash[:success] = "Task updated successfully."
      redirect_to root_path
    else
      flash[:error] = "Failed to update task."
      render :index
    end
  end


  private 

  def task_params
    params.require(:task).permit(:task_name, :task_start_hour, :task_start_minute, :task_end_hour, :task_end_minute, :due_date, :task_frequency)
  end

  
  private
  
  def require_login
    unless session[:user_id]
      flash[:error] = "You must be logged in to access this page."
      redirect_to login_path
    end
  end
end
