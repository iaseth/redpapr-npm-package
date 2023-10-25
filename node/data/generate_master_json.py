import json
import os



OUTPUT_JSON_PATH = "../src/data/redpapr.json"

def is_valid_input_json_file(filepath):
	if filepath.endswith(".json") and filepath != OUTPUT_JSON_PATH and os.path.isfile(filepath):
		return True
	return False

def main():
	json_files = [p for p in os.listdir() if is_valid_input_json_file(p)]
	jo = {}
	for json_file in json_files:
		json_name = json_file[:-5]
		jo[json_name] = json.load(open(json_file))

	with open(OUTPUT_JSON_PATH, "w") as f:
		json.dump(jo, f, indent="\t")
	print(f"Saved: '{OUTPUT_JSON_PATH}'")

if __name__ == '__main__':
	main()
