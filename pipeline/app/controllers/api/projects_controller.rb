module Api
  class ProjectsController < ApplicationController
    def index
      projects = Project.find(params[:id])
      render json: projects.to_json
    end
  end
end