class HerosController < ApplicationController
	def index
		heroes_list_json = []
		#we get all the heroes from the file
		File.open(Rails.root.to_s + '/tmp/heroes_list', 'r').each_line { |l| heroes_list_json << Hash[*l.chomp.split(/,|:/)] }
		respond_to do |format|
			format.html { render json: heroes_list_json }
		end
	end

	def show
		hero = {}
		#we get only the hero which match the params[:id]
		File.open(Rails.root.to_s + '/tmp/heroes_list', 'r').each_line { |l| hero = Hash[*l.chomp.split(/,|:/)] if l.split(',')[0].split('id:')[1] == params[:id] }
		respond_to do |format|
			format.html { render json: hero }
		end
	end

	def update
		original_file_path = Rails.root.to_s + '/tmp/heroes_list'
		temp_file_path = Rails.root.to_s + '/tmp/heroes_list.tmp'

		#we create a temporary file in which we copy the line of the original file. we only change the line where the id is equal to params[:id]
		temp_file = File.open(temp_file_path, 'w')
		File.open(original_file_path, 'r').each_line do |line|
			if line.split(',')[0].split('id:')[1] == params[:id]
				temp_file.puts "id:#{params[:id]},name:#{params[:name]}"
			else
				temp_file.puts line
			end
		end
		temp_file.close
		FileUtils.mv(temp_file_path, original_file_path)

		respond_to do |format|
			format.html { render nothing: true }
		end
	end
end
