# react-native-release-tracer

Find release stack trace points into js bundled source code.

## Usage
First ensure you are using same dependencies and code you used in release version.

### Usage android
```sh
$ bundle.sh android
$ node findline.js
$ node app {line} {column}
```

### Usage ios
```sh
$ bundle.sh ios
$ node findline.js
$ node app {line} {column}
```

## Example output
```json
{ 
  source: '/home/homefolder/projectname/app/lib/samplefile.js',
  line: 49,
  column: 15,
  name: null 
}
```

[Credits Stackoverflow Answer](https://stackoverflow.com/a/37829277)