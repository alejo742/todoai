class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "User successfully registered."
      redirect_to login_path # Redirect to the homepage or login page
    else
      if @user.errors.include?(:username)
        flash.now[:alert] = "Username already exists."
      elsif @user.errors.include?(:password_confirmation)
        flash.now[:alert] = "Passwords don't match."
      else
        flash.now[:alert] = "An unexpected error occurred."
      end
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
