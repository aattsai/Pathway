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

    def create
      user = User.find(params[:user])
      pathway = user.pathways.new(pathway_params)
      if pathway.save
        render json: pathway
      else
        render json: 'Error saving pathway'
      end
    end

    private

    def pathway_params
      params.require(:pathway).permit(:name, :description)
    end
  end
end