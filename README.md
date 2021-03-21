## Docker React-Admin

```shell script
npx create-react-app docker-react-admin
```

**Dockerfile**

```dockerfile
# pull official base image
FROM node:14.16.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
```
**.dockerignore**

```.gitignore
node_modules
npm-debug.log
build
.dockerignore
**/.git
**/.DS_Store
**/node_modules
```

```shell script
docker build -t react-admin:dev .
```

**docker-compose.yml**

```dockerfile
version: '3.7'

services:

  react-admin:
    container_name: react-admin
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - '.:/app'
      - '/app/node_modules'
    ports:
      - 3001:3000
    environment:
      - CHOKIDAR_USEPOLLING=true  
    stdin_open: true
```

```shell script
docker-compose up -d --build
```

```shell script
docker exec -it <container> sh
```

```shell script
npm i react-admin ra-data-json-server prop-types
```

```shell script
npm r react-admin ra-data-json-server prop-types
```
