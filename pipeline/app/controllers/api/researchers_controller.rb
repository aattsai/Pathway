module Api
  class ResearchersController < ApplicationController
    skip_before_action :authenticate_user_from_token!

    # POST /user/login
    def create
      @user = Team.find_for_database_authentication(email: params[:username])
      return invalid_login_attempt unless @user

      if @user.valid_password?(params[:password])
        sign_in :user, @user
        render json: @user, serializer: SessionSerializer, root: nil
      else
        invalid_login_attempt
      end
    end

    def destroy
      warden.logout
      render json: {} 
    end
    
    private

    def invalid_login_attempt
      warden.custom_failure!
      render json: {error: ('Incorrect username/password')}, status: :unprocessable_entity
    end
  end
end