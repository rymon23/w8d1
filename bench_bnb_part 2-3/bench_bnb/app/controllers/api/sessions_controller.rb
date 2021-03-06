class Api::SessionsController < ApplicationController 
  def create
    @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
        )
    if @user
      login(@user)
      # render jsonn: 'api/users/'
    else
      render json: status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: #'api/users/show'
    else
      render json: status: 404
    end
  end
end
