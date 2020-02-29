FROM node:10.15-alpine	

# set env variable
ENV APP_ROOT /app

# set work dir
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

# copy package.json and install packages
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

CMD [ "npm", "run", "start" ]