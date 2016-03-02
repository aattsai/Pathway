module Api
  class ProjectsController < ApplicationController
    def show
      projects = Project.find(params[:id])
      render json: projects.to_json
    end

    def create
      project = Project.new(project_params)
      if project.save
        render json: project
      else
        render json: project.errors.full_messages
      end
    end

    private

    def project_params
      params.require(:project).permit(:name, :description, :blog_url, :total_amount, :score)
    end
  end
end