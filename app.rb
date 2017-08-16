require "sinatra"
require_relative"rand_name.rb"

#name pair code

get '/' do
    erb :enter_name
end

post '/pairs_out' do
    names = params[:text]
    names_two = names_two(names)
    erb :pairs_out, :locals => {:names_two => names_two}
end

# post '/amount_out' do
#   money = params[:money]
#   calc = change_machine(money)
#  # redirect '/enter_amount?calc=' + calc
# end


# require 'sinatra'
# require_relative "change_coin.rb"

# get '/' do
# erb :index
# end

# get '/user_change' do
#     erb :coin_change_page
# end

# post '/user_change' do
#     cents_given_to_me = params[:cents_given_to_me]
#     coins_given_to_customer = params[:coins_given_to_customer]
#     coins_given_to_customer = coin_changer(cents_given_to_me)
   
#     redirect '/results?cents_given_to_me=' + cents_given_to_me + '&coins_given_to_customer=' + coins_given_to_customer
# end

# get '/results' do
#     cents_given_to_me = params[:cents_given_to_me]
#     coins_given_to_customer = params[:coins_given_to_customer]
   
#     erb :results, :locals => {:cents_given_to_me => cents_given_to_me, :coins_given_to_customer => coins_given_to_customer}
# end