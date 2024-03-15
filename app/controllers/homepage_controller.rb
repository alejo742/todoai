class HomepageController < ApplicationController
  def index
    @tasks = Task.all
  end
end
