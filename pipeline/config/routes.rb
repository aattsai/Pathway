Rails.application.routes.draw do
  devise_for :users, only: []

  namespace :user, defaults: { format: :json } do
    resource :login, only: [:create], controller: :sessions
    resource :register, only: [:create], controller: :users
  end
end
