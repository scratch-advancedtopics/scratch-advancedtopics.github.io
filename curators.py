import urllib.request
import json

def get_users():
	offset = 0
	out = []
	while True:
		contents = urllib.request.urlopen(f"https://api.scratch.mit.edu/studios/30152868/curators?offset={offset}").read()
		contents = contents.decode('utf-8')
		if contents == '[]':
			break
		out.append(contents)
		offset+=20
	return out

def main():
	out = []
	for i in get_users():
		i = json.loads(i)
		out.append(i)
	return out
if __name__ == '__main__':
  with open('curators.json','w') as f:
	  json.dump(main(),f)
