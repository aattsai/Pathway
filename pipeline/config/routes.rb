Rails.application.routes.draw do

  root 'pathways#index'

  get '/sessions/new', to: 'sessions#new'
  post '/sessions', to: 'sessions#create'
  get '/sessions/:id', to: 'sessions#destroy'

  get '/users/new', to: 'users#new'
  post '/users', to: 'users#create'

end
