var fs = require("fs");

convert_question_csv_to_json = function (filename, filename2) {
	var read_file = fs.readFileSync(filename, "utf-8");
	var regexp = /\r?\n/;
	var file_rows = read_file.split(regexp);
	var file_row_cols = file_rows.map(function(row){
		var line = row.split(",");

		return {
			question: line[0],
			answer: line[1].split(";"),
			country: line[2]
		}
	});

	var to_be_json = JSON.stringify(file_row_cols);

	fs.writeFileSync(filename2, to_be_json);
	console.log(to_be_json)
}

convert_question_csv_to_json("./uganda_questions.csv", "uganda_questions.json");
convert_question_csv_to_json("./chad_questions.csv", "chad_questions.json");
convert_question_csv_to_json("./ethiopia_questions.csv", "ethiopia_questions.json");
convert_question_csv_to_json("./nigeria_questions.csv", "nigeria_questions.json");
convert_question_csv_to_json("./senegal_questions.csv", "senegal_questions.json");