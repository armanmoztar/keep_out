require 'rubygems'
require 'sinatra'

get '/inbound' do
  content_type 'text/xml'
  '<Response><Message>Touchdown, Test</Message></Response>'
end