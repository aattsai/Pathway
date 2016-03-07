module Api
  class ProjectsController < ApplicationController

    def index
      projects = Project.all
      render json: projects.to_json
    end
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

    def create_association
      pathway = Pathway.find(params[:pathway_id])
      project = Project.find(params[:projects][:id])
      assoc = pathway.pathway_projects.new(project: project, donated_weight: params[:weight])
      if assoc.save
        render json: assoc
      else
        render json: 'Error adding project'
      end
    end

    private

    def project_params
      params.require(:project).permit(:name, :description, :blog_url, :total_amount, :score)
    end

  end
end