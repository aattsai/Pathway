# require "application_responder"

class ApplicationController < ActionController::Base
  # ActionController::API => We took this out because conflict between Responders and Rails-API
  # self.responder = ApplicationResponder

  include AbstractController::Translation
  include ActionController::RequestForgeryProtection
  include ActionController::Cookies
  
  respond_to :json

  # Turn on request forgery protection
  protect_from_forgery

  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
  def index
    render 'layouts/application'
  end
  # before_action :authenticate_user_from_token!


  protected

  # In Rails 4.2 and above
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end


end