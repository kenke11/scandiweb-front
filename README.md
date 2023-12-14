# SCANDIWEB test assigment front

## Initialisation

```bash
git clone https://github.com/kenke11/scandiweb-front.git
```

### Go to project folder

```bash
cd scandiweb-front
```

### Create local env file

```bash
cp .env.example .env
```

### change .env

#### Enter your back api url

```dotenv
VUE_APP_API_URL=http://127.0.0.1:8000
```

## Project setup

```bash
npm install
```

## dev server: 
```bash
vue-cli-service build --mode development
```

## production server:
```bash
vue-cli-service build --mode production
```

### Compiles and hot-reloads for development
```bash
npm run serve
```
