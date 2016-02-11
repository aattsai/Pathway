Rails.application.routes.draw do
  root 'application#index'
  # get '*path' => 'application#index'
  devise_for :users, only: []

  namespace :api, defaults: { format: :json } do
    resources :login, only: [:create, :destroy], controller: :sessions
    resources :register, only: [:create], controller: :users
    resources :pathways, only: [:index, :show] do 
      resources :projects, only:[:show]
    end
  end
end
