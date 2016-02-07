module Api
  class PathwaysController < ApplicationController
    def index
      pathway = Pathway.all
      render json: pathway.to_json
    end
    def show
      pathway = Pathway.find(params[:id])
      render json: pathway, include: [pathway_projects: {include: :project } ]
    end
  end
end