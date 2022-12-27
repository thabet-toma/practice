const mongoose = require("mongoose");

const PlayersSchema = new mongoose.Schema({
	name:{type: String,minlength:[2,"three Charr is requried"]},
	date:String,
	status:Number
	
	
});

const Projects = mongoose.model("Projects", PlayersSchema);

module.exports = Projects;