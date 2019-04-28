# React Native App Template

A basic template for React Native App.

## Pré Requisitos

Para poder rodar o projeto, deverá ser instalado o Node.js, preferencialmente a versão mais recente, que pode ser encontrada para *download* no seguinte [link](https://nodejs.org/en/download/current/).

## Instalação e Funcionamento

Para instalar as dependências utilize:
`npm install`
E para rodar o aplicativo em um celular utilize o comando:
`react-native run-android`

## Build do Aplicativo

Para gerar o apk do aplicativo pronto para publicação, são necessários três passos:

### 1º Passo:

#### Gerar chave de assinatura

Precisamos gerar uma chave de assinatura privada, iremos utilizar o keytool, uma ferramenta que vem embutida no JDK. Com isso só precisamos executar o comando a seguir:

>>
    keytool -genkey -v -keystore <nome-do-arquivo-para-salvar>.keystore -alias <nome-da-chave> -keyalg RSA -keysize 2048 -validity 10000

### 2º Passo:

Após isso, precisamos salvar o arquivo `<nome-do-arquivo-para-salvar>.keystore` no diretório `android/app` do projeto;

### 3º Passo:

Edite o arquivo `android/gradle.properties` e inclua o seguinte (substitua ***** pela senha do keystore que você definiu quando gerou o arquivo de chaves):

```
MYAPP_RELEASE_STORE_FILE=<nome-do-arquivo-para-salvar>.keystore
MYAPP_RELEASE_KEY_ALIAS=<nome-da-chave>
MYAPP_RELEASE_STORE_PASSWORD=**
MYAPP_RELEASE_KEY_PASSWORD=*****
```

### 4º Passo:

Edite o arquivo `android/app/build.gradle` do seu projeto e adicione a configuração de assinatura:

```
...
android {
    ...
    defaultConfig { .... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

### 5º Passo:

Agora que as configurações foram finalizadas, basta gerar o APK, para isso execute o seguinte na raiz do projeto:

```
cd android
./gradlew assembleRealease
```

O APK gerado pode ser encontrado e `android/app/build/outputs/apk/app-release.apk`, e está pronto para ser distribuído.
Caso queira testa-lo, basta executar o seguinte comando, caso seu dispositivo esteja com o modo de depuração ativado:

```
react-native run-android --variant=release
```

### Observações:

Todos os comandos utilizados são compatíveis com ambientes Linux/Debian(e.g: Debian, Ubuntu, Mint).

#### 5º Passo:

Caso ocorra o erro `ENOSPC` durante a geração do APK, significa que sua memória temporária está insuficiente, para corrigir isso execute o comando abaixo.

```
echo fs.inotify.max user watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

#### Integração com Google Login:

Caso tenha sido realizada a integração com o Google Login, será necessário inserir a chave SHA1 e SHA256 no projeto do Firebase.
Para obter essas chaves, execute os comandos abaixo:

```
cd android/app
keytool -exportcert -list -v -alias <nome-da-chave> -keystore ./<nome-do-arquivo-para-salvar>.keystore
```

#### Integração com Facebook Login:

Caso tenha sido realizada a integração com o Facebook Login, será necessário inserir a chave SHA1 de 28 caracteres no projeto do Facebook Developers.
Para obter essa chave, execute os comandos abaixo:

```
cd android/app
keytool -exportcert -alias <nome-da-chave> -keystore ./<nome-do-arquivo-para-salvar>.keystore | openssl sha1 -binary | openssl base64
```