Rails.application.routes.draw do
  devise_for :users, only: []

  namespace :api, defaults: { format: :json } do
    resource :login, only: [:create], controller: :sessions
    resource :register, only: [:create], controller: :users
  end
  resource :user, only: [:new]
end
