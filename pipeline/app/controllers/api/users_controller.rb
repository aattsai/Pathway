module Api
  class UsersController < ApplicationController
    skip_before_action :authenticate_user_from_token!, only: [:create]

    # POST /api/register
    # Creates an user
    def create
      @user = User.new user_params
      if @user.save
        render json: @user, serializer: Api::SessionSerializer, root: nil
      else
        render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
  end
end