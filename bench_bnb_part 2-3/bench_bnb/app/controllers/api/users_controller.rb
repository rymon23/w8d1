class Api::UsersController < ApplicationController
  def show

  end

  def new

  end

  def create

  end

  private
  def user_params
    params.require(:users).permit(:username, :email, :password)
  end
end
