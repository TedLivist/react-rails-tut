class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        name: 'some-thing',
        guid: '21loslff'
      }
    ] }.to_json
  end  
end