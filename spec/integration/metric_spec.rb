require 'swagger_helper'

describe 'Metrics API' do

    path '/api/v1/metrics/GetMetrics' do
        get "Retrieves all metrics records for timelines" do
            tags 'Metrics, Get Metrics Records'
            # parameter name: :page, in: :query, type: :integer, description: 'Page number. Default: 1', required: false
            #parameter name: :per_page, in: :query, type: :integer, description: 'Per page items. Default: 25', required: false
      
            produces 'application/json'
            
            response '200', :success do
                schema type: :object,
                properties: {
                    collection:{
                        type: :array,
                        items: {
                            type: :object,
                            properties: {
                                name: {type: :string},
                                value: {type: :integer},
                                created_on: {type: :timestamp}
                            }
                        }
                    }
                    
                }  


                run_test!
            end

        end
    end
    path '/api/v1/metrics/AddNewMetric' do
        
        post "Create a Metric" do
            tags "New Metrics"
            consumes "application/json"
            parameter name: :metric,in: :body, schema: {
                type: :object,
                properties: {
                    name: {type: :string},
                    value: {type: :integer},
                    created_on: {type: :timestamp}
                },
                required: %w[name value created_on ]

            }
            
            response "201", "Metric created" do
                let!(:metric) { create(:metric) }
                run_test!
            end
            response "422", "Invalid Request" do
                let(:metric) {{name:""}}
                run_test!
            end
        end

    end
end