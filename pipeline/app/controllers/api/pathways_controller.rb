module Api
  class PathwaysController < ApplicationController
    def index
      pathway = Pathway.all
      render json: pathway.to_json
    end

  end
end