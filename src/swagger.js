const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "APi de tarefas",
        description: "Documentação da API de tarefas"
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Task",
            "description": "Endpoints"
        }
    ],
    definitions: {
        User: {
            "id": 1,
            "descricao": "Desenvolver API de tarefas",
            "prazo": "2020-01-01T06:06:00.001Z",
            "completa": true
        }
    },
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/routes/task.routes']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js');
})