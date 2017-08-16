Rails.application.routes.draw do
	root 'application#index'

	resources :heroes, only: [:index, :show, :update]

	match "*path", to: 'application#index', via: [ :get, :post ]

end
