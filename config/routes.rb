Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  namespace :api do
    namespace :v1 do
      get 'metrics/GetMetrics', to: 'metrics#index'  
      post 'metrics/AddNewMetric', to: 'metrics#create'
    end
  end
  get get 'api/', to:  redirect(path: '/api-docs', status: 302)
 root  to: redirect(path: '/api-docs', status: 302) # todo: this for api only during development will redirect to the app
end
