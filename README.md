# RS School caesar cipher cli app


## Downloading

```
git clone https://github.com/Maksmir/caesar-cipher-cli-tool.git"
```

## Installing NPM modules

```
npm install
```

## Running application

To start app:

```
node index <options>
```

Options:
1.  **-s, --shift** <number>      caesar cipher shift (required!)
2.  **-i, --input** <file path>   input file path 
3.  **-o, --output** <file path>  output file path 
4.  **-a, --action** <type>       encode/decode (required!)
  
  
Example:
```
node index --action encode --shift 7
node index --action encode --shift 7 --input input.txt --output output.txt
node index --action decode --shift 7
node index --action decode --shift 7 --input input.txt --output output.txt
```
