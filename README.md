# Hibari
Extended user, anime & manga stats for [Kitsu][0]

## Installing
[![GitHub Rl]][1]
[![Github Dl]][1]

- Download the [latest release][1]
- Extract the zip
- Upload to web server

## Development
[![Travis]][2]
[![CC Score]][3]
[![CC Issues]][4]
[![David]][5]
[![DavidD]][6]

### Setup
``` bash
# Download source code
git clone https://github.com/wopian/hibari.git
# install dependencies
npm i
```

### Building
```bash
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
```

### Linting
```bash
npm run lint
```

### Updating Local Dependencies
```bash
npm update && npm prune
```

### Updating Origin Dependencies
```bash
npm i -g npm-check-updates
ncu --packageFile package.json
``` 

## Known Issues
No known issues

## Releases
See [CHANGELOG][5]

[GitHub Rl]:https://img.shields.io/github/release/wopian/hibari.svg?style=flat-square
[GitHub Dl]:https://img.shields.io/github/downloads/wopian/hibari/total.svg?style=flat-square
[Travis]:https://img.shields.io/travis/wopian/hibari.svg?style=flat-square&label=travis
[CC Score]:https://img.shields.io/codeclimate/github/wopian/hibari.svg?style=flat-square
[CC Issues]:https://img.shields.io/codeclimate/issues/github/wopian/hibari.svg?style=flat-square
[David]:https://img.shields.io/david/wopian/hibari.svg?style=flat-square
[DavidD]:https://img.shields.io/david/dev/wopian/hibari.svg?style=flat-square

[0]:https://kitsu.io
[1]:https://github.com/wopian/hibari/releases
[2]:https://travis-ci.org/wopian/hibari
[3]:https://codeclimate.com/github/wopian/hibari
[4]:https://codeclimate.com/github/wopian/hibari/issues
[5]:https://github.com/wopian/hibari/blob/master/CHANGELOG.md
[6]:https://david-dm.org/wopian/hibari
[7]:https://david-dm.org/wopian/hibari?type=dev
