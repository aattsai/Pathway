Rails.application.routes.draw do
  root 'application#index'
  # get '*path' => 'application#index'
  devise_for :users, defaults: { format: :json }, controllers: { registrations: 'registrations' }
  devise_for :teams, defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
    # resources :login, only: [:create, :destroy], controller: :sessions
    # resources :researcher, only: [:create, :destroy], controller: :researchers
    resources :register, only: [:create], controller: :users
    resources :pathways, only: [:index, :show] do 
      resources :projects, only:[:show]
    end
    resources :projects, only: [:create]
  end
end
