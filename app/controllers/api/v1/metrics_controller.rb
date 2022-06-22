class Api::V1::MetricsController < ApplicationController
    before_action
    def index
        @metrics = Metric.all.order(created_on: :asc)
        puts "loading metrics"
        render json: @metrics, status: :ok
    end

    def create
        # render json: {message:"Done"}, status: :ok

        @metric = Metric.new(metric_params)
            if(@metric.save)
                render json: @metric, status: :ok
            else
                render json: @metric.errors, status: :not_found
            end

    end
    private 
    def metric_params
        
        params.permit(:name, :value, :created_on)
    end
    

end
