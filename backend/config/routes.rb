Rails.application.routes.draw do
  resources :articles, only: [:index, :create, :show, :update, :destroy]
end
