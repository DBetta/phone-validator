# phone-validator

The project consist of FE (angular) and BE (spring boot).
# To build backend use:
```shell
cd phone
mvn compile jib:dockerBuild
```
#To build frontend use:
```shell
cd phone-ui
npm install
npm run build
docker build -t phone-validator-ui .
```
