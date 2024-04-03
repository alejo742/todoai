Rails.application.routes.draw do
  get '/signup', to: 'users#new', as: :signup
  post '/signup', to: 'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  
  get 'homepage/index', as: 'homepage'
  post 'homepage', to: 'homepage#create'
  delete 'homepage/:id', to: 'homepage#destroy', as: 'destroy_task'
  put '/homepage/:id', to: 'homepage#update', as: 'update_task'

  # Defines the root path route ("/")
  root "sessions#new"
end
