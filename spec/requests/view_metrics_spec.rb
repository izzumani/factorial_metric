require 'rails_helper'

RSpec.describe "ViewMetrics", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/view_metrics/index"
      expect(response).to have_http_status(:success)
    end
  end

end
